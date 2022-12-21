import { createXhrObject } from '../ajax';

// Creation of a XML HTTP Request
var xhr : XMLHttpRequest = createXhrObject();

/**
 * Handles the response receives after sending an asynchronous request to the 
 * URL /task/[accept | affect]. 
 * If the HTTP status code is 200, updates the task affectation paragraph and
 * deletes the HTML div element that has the class "affect-container" and a 
 * dataset task-id field with the following syntax :
 * 
 * data-task-id="<taskId>"
 * 
 * Otherwise, if an error occurs, it will display the error next to the
 * HTML div element.
 * 
 * @param taskId Identifier of the task handled.
 * @param action The action performed ("accept" | "affect").
 */
function handleResponse(taskId: string, action: string) {
  if (xhr.readyState == 4) {
		if (xhr.status == 200) {
      const name = JSON.parse(xhr.responseText).name;
      const popup = document.querySelector(".task-popup[data-task-id='" + taskId + "']");
      const popupTitle = popup.querySelector("h2");
      const affectTitle = document.createElement("h3");
      affectTitle.textContent = "Tâche affectée à : " + name;
      popupTitle.after(affectTitle);

      const task: HTMLDivElement = document.querySelector(".js-task[data-task-id='" + taskId + "']");
      task.dataset.taskUser = name;

      document.querySelectorAll(
        ".js-task-affect[data-task-id='" + taskId + "'] .task-actions"
      ).forEach(button => {
          button.remove();
      });
		} else {
      var error : Element = document.querySelector('.failure-flash');
      if (error != null) {
        error.remove();
      }
      var div : HTMLDivElement = document.createElement('div');
      div.setAttribute('class', 'failure-flash');
      var text : Text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
      div.appendChild(text);
      document.querySelector(".js-task-affect[data-task-id='" + taskId + "']").after(div);
		}
	}
}

/**
 * Sends an asynchronous request to the URL /task/<action>
 * with the id of the task affected. If the task is affected
 * by the owner to another user, the user's id is also sent.
 * 
 * @param event  The event that triggered the call to the function.
 * @param action The action to perform ("accept" | "affect").
 */
function sendRequest(event: Event, action: string) : void {
  // Type specification required as the Element type does not have a dataset property.
  const target : HTMLButtonElement = event.currentTarget as HTMLButtonElement;
  const taskId : string = target.dataset.taskId;
    
  xhr.onreadystatechange = function() { handleResponse(taskId, action); };
	xhr.open("POST", "/task/" + action, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  var data : object = {taskId: taskId};
  // Add the userId if required (for task affectation)
	if (action === 'affect') {
    var select : HTMLSelectElement = target.parentNode.querySelector('select');
    data['userId'] = select.value;
  }    
	xhr.send(JSON.stringify(data));
}

export function bindAffects(element: Element) {
  const accept : Element = element.querySelector('.js-accept');
  const affect : Element = element.querySelector('.js-affect');
  // Task already affected / user not invited on the kanban
  if (accept != null) {
    accept.addEventListener('click', (evt) => sendRequest(evt, 'accept'));
  }
  // Task already affected / user not invited on the kanban
  if (affect != null) {
    affect.addEventListener('click', (evt) => sendRequest(evt, 'affect'));
  }
}




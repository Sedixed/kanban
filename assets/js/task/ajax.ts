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
 */
function handleResponse(
  taskId: string, callback: (taskId: number, res: object) => void
) {
  if (xhr.readyState == 4) {
		if (xhr.status == 200) {
      callback(+taskId, JSON.parse(xhr.responseText));
		} else {
      var error : Element = document.querySelector('.failure-flash');
      if (error != null) {
        error.remove();
      }
      var div : HTMLDivElement = document.createElement('div');
      div.setAttribute('class', 'failure-flash');
      var text : Text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
      div.appendChild(text);
      document.querySelector(".kanban-title").after(div);
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
export function sendTaskAffectRequest(
  event: Event, action: string, callback: (taskId: number, res: object) => void
) : void {
  // Type specification required as the Element type does not have a dataset property.
  const target : HTMLButtonElement = event.currentTarget as HTMLButtonElement;
  const taskId : string = target.dataset.taskId;
  
  xhr.onreadystatechange = () => {
    handleResponse(taskId, callback);
  };
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




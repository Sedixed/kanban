//  createXhrObject : creates a XML HTTP Request object
//      if supported.
function createXhrObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }

   if (window.ActiveXObject) {
        var names = [
           "Msxml2.XMLHTTP.6.0",
           "Msxml2.XMLHTTP.3.0",
           "Msxml2.XMLHTTP",
           "Microsoft.XMLHTTP"
       ];
       for(var i in names) {
           try {
                return new ActiveXObject(names[i]); 
           } catch(e) {}
       }
   }
   return null; // not supported
}


// Selection of every element having the 'task' class
const tasks = document.querySelectorAll('.task');
// Creation of a XML HTTP Request
xhr = createXhrObject();


function handleResponse(taskId, action) {
    if (xhr.readyState == 4) {
		if (xhr.status == 200) {
            var btn = document.querySelector("button[data-task-id='" + taskId + "']");
            var p = document.createElement('p');
            console.log(xhr.responseText);
            var text = document.createTextNode(action === 'affect' ? 
                'Tâche attribuée à ' + JSON.parse(xhr.responseText).name :
                'Votre tâche'
            );
            p.appendChild(text);
            btn.after(p);
            btn.remove();
            document.querySelector("div.affect-container[data-task-id='" + taskId + "']").remove();
		} else {
            var error = document.querySelector('.failure-flash');
            if (error != null) {
                error.remove();
            }
            var div = document.createElement('div');
            div.setAttribute('class', 'failure-flash');
            var text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
            div.appendChild(text);
            document.querySelector("div[data-task-id='" + taskId + "']").after(div);
            
		}
	}
}

//  TODO
function sendRequest(event, action) {
    const taskId = event.currentTarget.dataset.taskId;
    xhr.onreadystatechange = function() { handleResponse(taskId, action); };
	xhr.open("POST", "/task/" + action, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    var data = {taskId: taskId};
	if (action === 'affect') {
        var select = event.currentTarget.parentNode.querySelector('select');
        data.userId = select.value;
    }    
	xhr.send(JSON.stringify(data));
}

// Adding click event listeners for every button dedicated to task acceptance/affectation
for (var i = 0; i < tasks.length; ++i) {
    const accept = tasks[i].querySelector('.accept');
    const affect = tasks[i].querySelector('.affect');
    // Task already affected / user not invited on the kanban
    if (accept != null) {
        accept.addEventListener('click', (evt) => sendRequest(evt, 'accept'));
    }
    if (affect != null) {
        affect.addEventListener('click', (evt) => sendRequest(evt, 'affect'));
    }
}



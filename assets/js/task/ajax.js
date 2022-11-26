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


// Selection of every element having the 'invitation' class
const tasks = document.querySelectorAll('.task');
// Creation of a XML HTTP Request
xhr = createXhrObject();


function handleResponse(taskId) {
    if (xhr.readyState == 4) {
		if (xhr.status == 200) {
            var btn = document.querySelector("button[data-task-id='" + taskId + "']");
            var p = document.createElement('p');
            var text = document.createTextNode('Votre tâche');
            p.appendChild(text);
            btn.after(p);
            btn.remove();
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
function sendRequest(event) {
    const taskId = event.currentTarget.dataset.taskId;
    xhr.onreadystatechange = function() { handleResponse(taskId); };
	xhr.open("POST", "/task/accept", true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	
    var data = {id: taskId};
	xhr.send(JSON.stringify(data));
}

// Adding click event listeners for every button dedicated to task acceptance
for (var i = 0; i < tasks.length; ++i) {
    const accept = tasks[i].querySelector('.accept');
    // Task already affected / user not invited on the kanban
    if (accept != null) {
        accept.addEventListener('click', sendRequest);
    }
}



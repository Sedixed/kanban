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
const invitations = document.querySelectorAll('.invitation');
// Creation of a XML HTTP Request
xhr = createXhrObject();

//  handleResponse : handles the response received upon sending a request with the function
//      sendRequest. Deletes the container which has an identifier with the following syntax :
//      "invitation-"<id>
function handleResponse(id) {
    if (xhr.readyState == 4) {
		if (xhr.status == 200) {
            document.querySelector("div[data-invitation-id='" + id + "']").remove();
		} else {
            var error = document.querySelector('.failure-flash');
            if (error != null) {
                error.remove();
            }
            var div = document.createElement('div');
            div.setAttribute('class', 'failure-flash');
            var text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
            div.appendChild(text);
            document.querySelector('h1').after(div);
		}
	}
}

//  sendRequest : sends an asynchronous request containing the id of the
//      invitation handled, and the action performed (accept or reject)
function sendRequest(event, action) {
    const invId = event.currentTarget.dataset.invitationId;
    xhr.onreadystatechange = function() { handleResponse(invId); };
	xhr.open("POST", "/invitation/" + action, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	
    var data = {id: invId};
	xhr.send(JSON.stringify(data));
}

// Adding click event listeners for every button dedicated to invitation handling
for (var i = 0; i < invitations.length; ++i) {
    const accept = invitations[i].querySelector('.accept');
    const reject = invitations[i].querySelector('.reject');
    accept.addEventListener('click', (evt) => sendRequest(evt, 'accept'));
    reject.addEventListener('click', (evt) => sendRequest(evt, 'reject'));
}



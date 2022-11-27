import { createXhrObject } from '../script';

// Selection of every element having the 'invitation' class
const invitations : NodeListOf<Element> = document.querySelectorAll('.invitation');

// Creation of a XML HTTP Request
var xhr : XMLHttpRequest = createXhrObject();

/**
 * Handles the response receives after sending an asynchronous request to the 
 * URL /invitation/[accept | reject]. 
 * If the HTTP status code is 200, deletes the HTML div element that has an 
 * dataset invitation-id field with the following syntax :
 * 
 * data-invitation-id="<id>"
 * 
 * Otherwise, if an error occurs, it will display the error next to the
 * HTML div element.
 * 
 * @param id Identifier of the invitation handled.
 */
function handleResponse(id : string) : void {
    if (xhr.readyState == 4) {
		if (xhr.status == 200) {
            document.querySelector("div[data-invitation-id='" + id + "']").remove();
		} else {
            var error : Element = document.querySelector('.failure-flash');
            if (error != null) {
                error.remove();
            }
            var div : HTMLDivElement = document.createElement('div');
            div.setAttribute('class', 'failure-flash');
            var text : Text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
            div.appendChild(text);
            document.querySelector('h1').after(div);
		}
	}
}

/**
 * Sends an asynchronous request to the URL /invitation/<action>
 * with the id of the invitation handled.
 * 
 * @param event  The event that triggered the call to the function.
 * @param action The action to perform ("accept" | "reject").
 */
function sendRequest(event: Event, action: string) : void {
    // Type specification required as the Element type does not have a dataset property.
    const target : HTMLButtonElement = event.currentTarget as HTMLButtonElement;
    const invId : string = target.dataset.invitationId;

    xhr.onreadystatechange = function() { handleResponse(invId); };
	xhr.open("POST", "/invitation/" + action, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    var data : object = {id: invId};
	xhr.send(JSON.stringify(data));
}

// Adding click event listeners for every button dedicated to invitation handling
for (var i : number = 0; i < invitations.length; ++i) {
    const accept : Element = invitations[i].querySelector('.accept');
    const reject : Element = invitations[i].querySelector('.reject');
    accept.addEventListener('click', (evt) => sendRequest(evt, 'accept'));
    reject.addEventListener('click', (evt) => sendRequest(evt, 'reject'));
}



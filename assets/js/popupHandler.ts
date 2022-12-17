import { bindAffects } from "./task/ajax";

/**
 * Creates a popup container with the content <child>,
 * ignoring the page flow.
 * 
 * @param child The content of the popup.
 */
function createPopup(child : Element, closeMessage: string = "Annuler") {
  let popup : HTMLDivElement = document.createElement('div');
  popup.classList.add('popup');

  let relativeContainer = document.createElement('div');
  relativeContainer.classList.add('popup-relative');
  popup.appendChild(relativeContainer);

  let exit : HTMLButtonElement = document.createElement('button');
  exit.classList.add('popup-exit');
  exit.addEventListener('click', () => popup.remove());
  let exitText = document.createTextNode(closeMessage);
  exit.append(exitText);

  relativeContainer.append(child);
  relativeContainer.append(exit);
  document.getElementsByTagName('body')[0].append(popup);
}

/**
 * Creates an input container named <name> for a <type> input with 
 * the label <labelContent>. 
 * 
 * @param type         Type of input.
 * @param labelContent Text content of the input label.
 * @param name         The name of the input.
 */
function createInput(type : string, labelContent : string, name : string) : HTMLDivElement {
  let inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');
  inputContainer.classList.add('form-element-bigger-container');
  let input = document.createElement('input');
  input.name = name;
  input.type = type;
  if (type === 'text') {
      input.required = true;
      input.minLength = 3;
      input.maxLength = 255;
  }
  input.placeholder= '';
  let label = document.createElement('label');
  label.textContent = labelContent;
  inputContainer.appendChild(input);
  inputContainer.appendChild(label);
  
  return inputContainer;
}

/**
 * Creates a form for task creation : the form is submitted to the URL
 * <action>.
 * 
 * @param action the URL the form will be submitted to.
 */
function createNewTaskForm(action : string) : HTMLFormElement {
  let form = document.createElement('form');
  form.action = action;
  form.method = 'POST';
  form.style.margin = "0px";

  let nameInputContainer = createInput('text', 'Nom', 'name');

  let descInputContainer = document.createElement('div');
  descInputContainer.classList.add('textarea-container');
  descInputContainer.classList.add('form-element-bigger-container');
  let descInput = document.createElement('textarea');
  descInput.name = 'description';
  descInput.required = true;
  descInput.minLength = 3;
  descInput.maxLength = 500;
  descInput.placeholder = 'Description';
  descInputContainer.appendChild(descInput);

  let dateInputContainer = createInput('date', 'Date limite (optionnelle)', 'limitDate');

  let submit = document.createElement('button');
  submit.textContent = 'Ajouter une tâche';

  form.appendChild(nameInputContainer);
  form.appendChild(descInputContainer);
  form.appendChild(dateInputContainer);
  form.appendChild(submit);
  return form;
}

/**
 * Creates a popup for task creation under the column that has the id
 * <id>.
 * 
 * @param id The id of the column we create the task under.
 */
export function createNewTaskPopup(id : number) {
  let form = createNewTaskForm('/task/create_under/' + id);
  createPopup(form);
}

export function createTaskPopup(id: number, name: string, description: string, 
    username: string | null = null, date: string | null = null) {
  const container = document.createElement("div")
  container.classList.add("task-popup");
  container.dataset.taskId = id.toString();

  const nameElement = document.createElement("h2");
  nameElement.textContent = name;
  container.appendChild(nameElement);

  if (username != null) {
    const usernameElement = document.createElement("h3");
    usernameElement.textContent = "Tâche assignée à : " + username;
    container.appendChild(usernameElement);
  }

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;
  container.appendChild(descriptionElement);

  if (date != null) {
    const dateElement = document.createElement("span");
    dateElement.classList.add("limite-date");
    dateElement.textContent = "Date limite : " + (new Date(date)).toLocaleDateString();
    container.appendChild(dateElement);
  }

  const affectationElementToClone = document
    .querySelector(`.js-task-affect[data-task-id="${id}"]`)
  if (affectationElementToClone !== null) {
    const affectationElement = affectationElementToClone.cloneNode(true);
    bindAffects(affectationElement as Element);
    container.appendChild(affectationElement);
  }

  createPopup(container, "Fermer");
}
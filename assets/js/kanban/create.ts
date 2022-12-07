/**
 * Adds a new li element to the ul element of the form for dynamic columns addition.
 * It also adds a button to delete this new li element on a click.
 * 
 */
function addInputToForm() : void {
  const collectionHolder : HTMLUListElement = document.querySelector('form .columns') as HTMLUListElement;
  const lastChild : HTMLLIElement = collectionHolder.querySelector('.js-last-column');
  const item : HTMLLIElement = document.createElement('li');
  const inputContainer: HTMLDivElement = document.createElement("div");
  inputContainer.classList.add("input-container");
  inputContainer.classList.add("js-input-container");
  inputContainer.classList.add("added-column");
  item.appendChild(inputContainer);

  // Copies the HTML content of the ul element, replacing __name__
  // by the dataset index field
  inputContainer.innerHTML = collectionHolder
    .dataset
    .prototype
    .replace(
      /__name__/g,
      collectionHolder.dataset.index
    );
    
  // Retrieves the input child of the li element created
  var input : HTMLInputElement = item.querySelector("input") as HTMLInputElement;
  
  input.setAttribute('placeholder', 'Nouvelle colonne');
  
  collectionHolder.insertBefore(item, lastChild);
  collectionHolder.dataset.index += 1;

  addInputDeleteBtn(item);
}

/**
 * Inserts a button as a child of item.
 * It is used to delete its parent (item) on click.
 * 
 * @param item The parent of the button to insert.
 */
const addInputDeleteBtn = (item: Element) => {
  const removeBtn : HTMLButtonElement  = document.createElement('button');
  removeBtn.classList.add("delete-column");
  var text : Text = document.createTextNode('Supprimer');
  removeBtn.appendChild(text);

  item.querySelector(".js-input-container").append(removeBtn);

  removeBtn.addEventListener('click', (e : MouseEvent) => {
    e.preventDefault();
    item.remove();
  });
}

// Adding click event listener for the column adding button
const btn = document.querySelector('.js-add-item');
if (btn != null) {
  btn.addEventListener("click", addInputToForm);
}

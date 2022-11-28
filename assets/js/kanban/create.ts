/**
 * Adds a new li element to the ul element of the form for dynamic columns addition.
 * It also adds a button to delete this new li element on a click.
 * 
 */
function addInputToForm() : void {
  const collectionHolder : HTMLUListElement = document.querySelector('form ul') as HTMLUListElement;
  const lastChild : HTMLLIElement = collectionHolder.querySelector('li:last-child');
  const item : HTMLLIElement = document.createElement('li');

  // Copies the HTML content of the ul element, replacing __name__
  // by the dataset index field
  item.innerHTML = collectionHolder
    .dataset
    .prototype
    .replace(
      /__name__/g,
      collectionHolder.dataset.index
    );
    
  // Retrieves the input child of the li element created
  var input : HTMLInputElement = item.childNodes[0] as HTMLInputElement;
  
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
  var text : Text = document.createTextNode('Supprimer');
  removeBtn.appendChild(text);

  item.append(removeBtn);

  removeBtn.addEventListener('click', (e : MouseEvent) => {
    e.preventDefault();
    item.remove();
  });
}

// Adding click event listener for the column adding button
document.querySelector('button#add-item').addEventListener("click", addInputToForm);




const addFormToCollection = (e) => {
  const collectionHolder = document.querySelector('#columns');
  const lastChild = document.querySelector('#last_col');
  const item = document.createElement('li');

  item.innerHTML = collectionHolder
    .dataset
    .prototype
    .replace(
      /__name__/g,
      collectionHolder.dataset.index
    );

  item.childNodes[0].placeholder = 'Nouvelle colonne';
  item.setAttribute('class', 'd-flex');

  collectionHolder.insertBefore(item, lastChild);
  collectionHolder.dataset.index++;

  addTagFormDeleteLink(item);
};

const addTagFormDeleteLink = (item) => {
  const removeBtn = document.createElement('button');
  var text = document.createTextNode('Supprimer');
  removeBtn.appendChild(text);
  removeBtn.setAttribute('class', 'btn btn-danger align-self-end');
  

  item.append(removeBtn);

  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    item.remove();
  });
}

document.querySelectorAll('.add-item').forEach(btn => {
  btn.addEventListener("click", addFormToCollection);
});



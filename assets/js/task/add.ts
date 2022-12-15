import { createNewTaskPopup } from '../popupHandler';

document.querySelectorAll('.add-task button').forEach((button : HTMLButtonElement) => {
    button.addEventListener('click', () => {
        createNewTaskPopup(+button.dataset.colId);
    })
})
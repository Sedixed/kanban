import { createTaskPopup } from "../popupHandler";

document.querySelectorAll(".js-task").forEach((task: HTMLDivElement) => {
  task.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      return;
    }
    createTaskPopup(
      +task.dataset.taskId,
      task.dataset.taskName, 
      task.dataset.taskDescription,
      task.dataset.taskUser ?? null,
      task.dataset.taskDate ?? null
    );
  })
})
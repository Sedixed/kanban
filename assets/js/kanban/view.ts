import { Kanban } from "./Kanban";

// Initialise un object Kanban qui permettra la gestion de celui-ci.
Kanban.initFromTemplate(
  document.querySelector("table.kanban"), 
  document.querySelectorAll(".js-members li")
);
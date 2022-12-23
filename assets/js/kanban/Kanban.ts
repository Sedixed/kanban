import { createTaskPopup } from "../popupHandler";
import { sendTaskAffectRequest } from "../task/ajax";

class KanbanMember {
  
  constructor(
    public id: number,
    public username: string,
    public isOwner: boolean,
    public isCurrent: boolean
  ) { }

}

/**
 * Représente une tâche d'un kanban.
 */
class KanbanTask {

  constructor(
    public id: number,
    public name: string, 
    public description: string, 
    public limitDate: Date | null, 
    public assignUsername: string | null,
    public column: KanbanColumn
  ) { }

}

/**
 * Représente une colonne d'un kanban.
 */
class KanbanColumn {

  tasks: KanbanTask[];

  constructor(
    public name: string, 
    public offset: number, 
    public kanban: Kanban
  ) {
    this.tasks = [];
  }

  /**
   * Ajoute la tâche dont les informations sont données dans les paramètres à
   * la colonne.
   * 
   * @param   name           Le nom de la tâche.
   * @param   description    La description de la tâche.
   * @param   limitDate      La date limite de la tâche.
   * @param   assignUsername Le nom d'utilisateur de la personne assignée à la
   *                         tâche.             
   * @returns                La tâche ajoutée.
   */
  public addTask(
    id: number, name: string, description: string, limitDate: Date | null, 
    assignUsername: string | null
  ): KanbanTask {
    const task = new KanbanTask(
      id, name, description, limitDate, assignUsername, this
    );
    this.tasks.push(task);
    
    return task;
  }

  /**
   * Renvoie la tâche associée à l'ID donné.
   * 
   * @param taskId L'ID de la tâche souhaitée.
   * @returns      La tâche associée ou null si non trouvée.
   */
  public getTaskById(taskId: number): KanbanTask | null {
    let task = null;
    this.tasks.forEach((t: KanbanTask) => {
      if (t.id == taskId) task = t;
    })

    return task;
  }
  
}

/**
 * Classe maitresse d'un kanban. Elle se chargera d'effectuer des actions sur le
 * kanban et de le modifier en conséquence.
 */
class Kanban {
  
  private _template: HTMLTableElement;
  private _columns: KanbanColumn[] = [];
  private _members: KanbanMember[] = [];
  
  private _currentPopup: HTMLDivElement | null = null; 

  /** 
   * Initialise un Kanban depuis le template donné (Sous forme de tableau HTML) 
   * et le retourne. 
   * 
   * @param   table   L'élement tableau représentant le kanban.
   * @param   members Les membres du kanban sous forme de liste.
   * @returns         L'objet Kanban associé au tableau HTML donné.
   */
  public static initFromTemplate(
    table: HTMLTableElement, members: NodeListOf<HTMLLIElement>
  ): Kanban {
    if (table == null || members == null) {
      return; 
    }

    const kanban = new Kanban();
    kanban._template = table;
    members.forEach((member: HTMLLIElement) => {
      kanban._members.push(new KanbanMember(
        +member.dataset.id,
        member.innerText, 
        member.dataset.isOwner === "1",
        member.dataset.isCurrent === "1"
      ));
    });

    // Initialise les données grâce au template

    // Colonnes
    table.querySelectorAll("th").forEach((column, i) => {
      // Les colonnes seront données dans l'ordre
      // Voir : https://www.w3.org/TR/selectors-api/ (Partie 6)
      kanban.addColumn(column.innerText, i);
    });

    // Tâches
    table.querySelectorAll(".js-task").forEach((task: HTMLTableCellElement) => {
      const taskData = kanban.getColumnByOffset(+task.dataset.columnOffset)
        .addTask(
          +task.dataset.taskId,
          task.dataset.taskName,
          task.dataset.taskDescription,
          task.dataset.taskDate ? new Date(task.dataset.taskDate) : null,
          task.dataset.taskUser ?? null,
        );

      kanban.bindTaskEvents(task, taskData);
    });

    return kanban;
  }

  public openTaskPopup(taskData: KanbanTask) {
    // Ouvre la popup
    this._currentPopup = createTaskPopup(taskData);

    // Ajoute les évènements d'affectation
    const accept : Element = this._currentPopup.querySelector('.js-accept');
    const affect : Element = this._currentPopup.querySelector('.js-affect');
    if (accept != null) {
      accept.addEventListener('click', (evt) => {
        sendTaskAffectRequest(evt, 'accept', this.handleAffectResponse.bind(this))
      });
    }
    if (affect != null) {
      affect.addEventListener('click', (evt) => {
        sendTaskAffectRequest(evt, 'affect', this.handleAffectResponse.bind(this))
      });
    }
  }

  /**
   * Ajoute une colonne vide au kanban.
   * 
   * @param name   Le nom de la colonne.
   * @param offset L'index de la colonne.
   */
  private addColumn(name: string, offset: number) {
    this._columns.push(new KanbanColumn(name, offset, this));
  }

  /**
   * Retourne la colonne ayant l'offset demandé.
   * 
   * @param   offset L'offset de la colonne souhaitée.
   * @returns        La colonne trouvée.
   */
  private getColumnByOffset(offset: number): KanbanColumn {
    if (offset < 0 || offset >= this._columns.length) {
      throw "Invalid kanban column offset";
    }
    const column = this._columns.filter((column: KanbanColumn) => {
      return column.offset === offset;
    })[0];

    return column;
  }

  /**
   * Renvoie la tâche associée à l'ID demandé. 
   * 
   * @param id L'ID de la tâche souhaitée. 
   * @returns  La tâche associée.
   */
  private getTaskById(id: number): KanbanTask {
    let task = null;
    this._columns.forEach((column: KanbanColumn) => {
      const t = column.getTaskById(id);
      if (t !== null) {
        task = t;
      }
    });

    if (task === null) {
      throw "ID de tâche invalide";
    }

    return task;
  }

  /**
   * Ajoute les évènements d'ouverture de popup à une tâche.
   * 
   * @param taskElement L'élément représentant la tâche où ajouter l'évènement.
   * @param taskData    Les données de la tâche sous forme la de KanbanTask.
   */
  private bindTaskEvents(
    taskElement: HTMLTableCellElement, taskData: KanbanTask
  ) {
    taskElement.addEventListener("click", (e) => {
      // Les flèches de changement de colonne sont des liens, on évite donc
      // d'ouvrir la popup lors d'un clic sur celles-ci
      if (e.target instanceof HTMLAnchorElement) {
        return;
      }
      this.openTaskPopup(taskData);
    })
  }

  /**
   * Rafraichit les données de la popup courante.
   * 
   * @param task La tâche associée à la popup.
   */
  private refreshPopup(task: KanbanTask) {
    const popupTitle = this._currentPopup.querySelector("h2");
    const affectTitle = document.createElement("h3");
    affectTitle.textContent = "Tâche affectée à : " + task.assignUsername;
    popupTitle.after(affectTitle);
    this._currentPopup.querySelector(".task-actions").remove();
  }

  /**
   * Traite la réponse d'affectation / acceptation d'une tâche :
   * - Rafraichit l'objet
   * - Rafraichit la popup
   * 
   * @param taskId L'ID de la tâche affectée / acceptée. 
   * @param res    La réponse AJAX. 
   */
  private handleAffectResponse(taskId: number, res: any) {
    // Refresh the kanban object
    const task = this.getTaskById(taskId);
    task.assignUsername = res.name;

    // Refresh the popup
    this.refreshPopup(task);
  }

  /**
   * Getters / Setters 
   */

  public getTemplate(): HTMLTableElement {
    return this._template;
  }

  public getColumns(): KanbanColumn[] {
    return this._columns;
  }

  public getMembers(): KanbanMember[] {
    return this._members;
  }

}

export { KanbanMember, KanbanTask, KanbanColumn, Kanban };
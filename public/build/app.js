(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./index.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/index.js ***!
  \*******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/app.ts":
/*!***********************!*\
  !*** ./assets/app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// any CSS you import will output into a single css file (app.css in this case)
__webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
__webpack_require__(/*! ./styles/form/stylesheet.css */ "./assets/styles/form/stylesheet.css");
__webpack_require__(/*! ./styles/header/stylesheet.css */ "./assets/styles/header/stylesheet.css");
__webpack_require__(/*! ./styles/home/stylesheet.css */ "./assets/styles/home/stylesheet.css");
__webpack_require__(/*! ./styles/kanban/list.css */ "./assets/styles/kanban/list.css");
__webpack_require__(/*! ./styles/kanban/create.css */ "./assets/styles/kanban/create.css");
__webpack_require__(/*! ./styles/kanban/view.css */ "./assets/styles/kanban/view.css");
__webpack_require__(/*! ./styles/task/list.css */ "./assets/styles/task/list.css");
__webpack_require__(/*! ./styles/invitation/stylesheet.css */ "./assets/styles/invitation/stylesheet.css");
// start the Stimulus application
__webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
// import typescript files
__webpack_require__(/*! ./js/sortHandler.ts */ "./assets/js/sortHandler.ts");
__webpack_require__(/*! ./js/popupHandler.ts */ "./assets/js/popupHandler.ts");
__webpack_require__(/*! ./js/ajax.ts */ "./assets/js/ajax.ts");
__webpack_require__(/*! ./js/kanban/Kanban.ts */ "./assets/js/kanban/Kanban.ts");
__webpack_require__(/*! ./js/kanban/create.ts */ "./assets/js/kanban/create.ts");
__webpack_require__(/*! ./js/kanban/list.ts */ "./assets/js/kanban/list.ts");
__webpack_require__(/*! ./js/kanban/view.ts */ "./assets/js/kanban/view.ts");
__webpack_require__(/*! ./js/invitation/ajax.ts */ "./assets/js/invitation/ajax.ts");
__webpack_require__(/*! ./js/task/ajax.ts */ "./assets/js/task/ajax.ts");
__webpack_require__(/*! ./js/task/list.ts */ "./assets/js/task/list.ts");
__webpack_require__(/*! ./js/task/add.ts */ "./assets/js/task/add.ts");

/***/ }),

/***/ "./assets/js/ajax.ts":
/*!***************************!*\
  !*** ./assets/js/ajax.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.createXhrObject = void 0;
/**
 * creates a XML HTTP Request object
 * if supported.
 *
 * @return XML HTTP Request object if supported,
 *   null otherwise.
 */
function createXhrObject() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject) {
    var names = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var i in names) {
      try {
        return new ActiveXObject(names[i]);
      } catch (e) {}
    }
  }
  return null; // not supported
}

exports.createXhrObject = createXhrObject;

/***/ }),

/***/ "./assets/js/invitation/ajax.ts":
/*!**************************************!*\
  !*** ./assets/js/invitation/ajax.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
exports.__esModule = true;
var ajax_1 = __webpack_require__(/*! ../ajax */ "./assets/js/ajax.ts");
// Selection of every element having the 'invitation' class
var invitations = document.querySelectorAll('.js-invitation');
// Creation of a XML HTTP Request
var xhr = (0, ajax_1.createXhrObject)();
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
/**
 * Sends an asynchronous request to the URL /invitation/<action>
 * with the id of the invitation handled.
 *
 * @param event  The event that triggered the call to the function.
 * @param action The action to perform ("accept" | "reject").
 */
function sendRequest(event, action) {
  // Type specification required as the Element type does not have a dataset property.
  var target = event.currentTarget;
  var invId = target.dataset.invitationId;
  xhr.onreadystatechange = function () {
    handleResponse(invId);
  };
  xhr.open("POST", "/invitation/" + action, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  var data = {
    id: invId
  };
  xhr.send(JSON.stringify(data));
}
// Adding click event listeners for every button dedicated to invitation handling
for (var i = 0; i < invitations.length; ++i) {
  var accept = invitations[i].querySelector('.js-accept');
  var reject = invitations[i].querySelector('.js-reject');
  accept.addEventListener('click', function (evt) {
    return sendRequest(evt, 'accept');
  });
  reject.addEventListener('click', function (evt) {
    return sendRequest(evt, 'reject');
  });
}

/***/ }),

/***/ "./assets/js/kanban/Kanban.ts":
/*!************************************!*\
  !*** ./assets/js/kanban/Kanban.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
exports.__esModule = true;
exports.Kanban = exports.KanbanColumn = exports.KanbanTask = exports.KanbanMember = void 0;
var popupHandler_1 = __webpack_require__(/*! ../popupHandler */ "./assets/js/popupHandler.ts");
var ajax_1 = __webpack_require__(/*! ../task/ajax */ "./assets/js/task/ajax.ts");
var KanbanMember = /** @class */function () {
  function KanbanMember(id, username, isOwner, isCurrent) {
    this.id = id;
    this.username = username;
    this.isOwner = isOwner;
    this.isCurrent = isCurrent;
  }
  return KanbanMember;
}();
exports.KanbanMember = KanbanMember;
/**
 * Représente une tâche d'un kanban.
 */
var KanbanTask = /** @class */function () {
  function KanbanTask(id, name, description, limitDate, assignUsername, column) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.limitDate = limitDate;
    this.assignUsername = assignUsername;
    this.column = column;
  }
  return KanbanTask;
}();
exports.KanbanTask = KanbanTask;
/**
 * Représente une colonne d'un kanban.
 */
var KanbanColumn = /** @class */function () {
  function KanbanColumn(name, offset, kanban) {
    this.name = name;
    this.offset = offset;
    this.kanban = kanban;
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
  KanbanColumn.prototype.addTask = function (id, name, description, limitDate, assignUsername) {
    var task = new KanbanTask(id, name, description, limitDate, assignUsername, this);
    this.tasks.push(task);
    return task;
  };
  /**
   * Renvoie la tâche associée à l'ID donné.
   *
   * @param taskId L'ID de la tâche souhaitée.
   * @returns      La tâche associée ou null si non trouvée.
   */
  KanbanColumn.prototype.getTaskById = function (taskId) {
    var task = null;
    this.tasks.forEach(function (t) {
      if (t.id == taskId) task = t;
    });
    return task;
  };
  return KanbanColumn;
}();
exports.KanbanColumn = KanbanColumn;
/**
 * Classe maitresse d'un kanban. Elle se chargera d'effectuer des actions sur le
 * kanban et de le modifier en conséquence.
 */
var Kanban = /** @class */function () {
  function Kanban() {
    this._columns = [];
    this._members = [];
    this._currentPopup = null;
  }
  /**
   * Initialise un Kanban depuis le template donné (Sous forme de tableau HTML)
   * et le retourne.
   *
   * @param   table   L'élement tableau représentant le kanban.
   * @param   members Les membres du kanban sous forme de liste.
   * @returns         L'objet Kanban associé au tableau HTML donné.
   */
  Kanban.initFromTemplate = function (table, members) {
    if (table == null || members == null) {
      return;
    }
    var kanban = new Kanban();
    kanban._template = table;
    members.forEach(function (member) {
      kanban._members.push(new KanbanMember(+member.dataset.id, member.innerText, member.dataset.isOwner === "1", member.dataset.isCurrent === "1"));
    });
    // Initialise les données grâce au template
    // Colonnes
    table.querySelectorAll("th").forEach(function (column, i) {
      // Les colonnes seront données dans l'ordre
      // Voir : https://www.w3.org/TR/selectors-api/ (Partie 6)
      kanban.addColumn(column.innerText, i);
    });
    // Tâches
    table.querySelectorAll(".js-task").forEach(function (task) {
      var _a;
      var taskData = kanban.getColumnByOffset(+task.dataset.columnOffset).addTask(+task.dataset.taskId, task.dataset.taskName, task.dataset.taskDescription, task.dataset.taskDate ? new Date(task.dataset.taskDate) : null, (_a = task.dataset.taskUser) !== null && _a !== void 0 ? _a : null);
      kanban.bindTaskEvents(task, taskData);
    });
    return kanban;
  };
  Kanban.prototype.openTaskPopup = function (taskData) {
    var _this = this;
    // Ouvre la popup
    this._currentPopup = (0, popupHandler_1.createTaskPopup)(taskData);
    // Ajoute les évènements d'affectation
    var accept = this._currentPopup.querySelector('.js-accept');
    var affect = this._currentPopup.querySelector('.js-affect');
    if (accept != null) {
      accept.addEventListener('click', function (evt) {
        (0, ajax_1.sendTaskAffectRequest)(evt, 'accept', _this.handleAffectResponse.bind(_this));
      });
    }
    if (affect != null) {
      affect.addEventListener('click', function (evt) {
        (0, ajax_1.sendTaskAffectRequest)(evt, 'affect', _this.handleAffectResponse.bind(_this));
      });
    }
  };
  /**
   * Ajoute une colonne vide au kanban.
   *
   * @param name   Le nom de la colonne.
   * @param offset L'index de la colonne.
   */
  Kanban.prototype.addColumn = function (name, offset) {
    this._columns.push(new KanbanColumn(name, offset, this));
  };
  /**
   * Retourne la colonne ayant l'offset demandé.
   *
   * @param   offset L'offset de la colonne souhaitée.
   * @returns        La colonne trouvée.
   */
  Kanban.prototype.getColumnByOffset = function (offset) {
    if (offset < 0 || offset >= this._columns.length) {
      throw "Invalid kanban column offset";
    }
    var column = this._columns.filter(function (column) {
      return column.offset === offset;
    })[0];
    return column;
  };
  /**
   * Renvoie la tâche associée à l'ID demandé.
   *
   * @param id L'ID de la tâche souhaitée.
   * @returns  La tâche associée.
   */
  Kanban.prototype.getTaskById = function (id) {
    var task = null;
    this._columns.forEach(function (column) {
      var t = column.getTaskById(id);
      if (t !== null) {
        task = t;
      }
    });
    if (task === null) {
      throw "ID de tâche invalide";
    }
    return task;
  };
  /**
   * Ajoute les évènements d'ouverture de popup à une tâche.
   *
   * @param taskElement L'élément représentant la tâche où ajouter l'évènement.
   * @param taskData    Les données de la tâche sous forme la de KanbanTask.
   */
  Kanban.prototype.bindTaskEvents = function (taskElement, taskData) {
    var _this = this;
    taskElement.addEventListener("click", function (e) {
      // Les flèches de changement de colonne sont des liens, on évite donc
      // d'ouvrir la popup lors d'un clic sur celles-ci
      if (e.target instanceof HTMLAnchorElement) {
        return;
      }
      _this.openTaskPopup(taskData);
    });
  };
  /**
   * Rafraichit les données de la popup courante.
   *
   * @param task La tâche associée à la popup.
   */
  Kanban.prototype.refreshPopup = function (task) {
    var popupTitle = this._currentPopup.querySelector("h2");
    var affectTitle = document.createElement("h3");
    affectTitle.textContent = "Tâche affectée à : " + task.assignUsername;
    popupTitle.after(affectTitle);
    this._currentPopup.querySelector(".task-actions").remove();
  };
  /**
   * Traite la réponse d'affectation / acceptation d'une tâche :
   * - Rafraichit l'objet
   * - Rafraichit la popup
   *
   * @param taskId L'ID de la tâche affectée / acceptée.
   * @param res    La réponse AJAX.
   */
  Kanban.prototype.handleAffectResponse = function (taskId, res) {
    // Refresh the kanban object
    var task = this.getTaskById(taskId);
    task.assignUsername = res.name;
    // Refresh the popup
    this.refreshPopup(task);
  };
  /**
   * Getters / Setters
   */
  Kanban.prototype.getTemplate = function () {
    return this._template;
  };
  Kanban.prototype.getColumns = function () {
    return this._columns;
  };
  Kanban.prototype.getMembers = function () {
    return this._members;
  };
  return Kanban;
}();
exports.Kanban = Kanban;

/***/ }),

/***/ "./assets/js/kanban/create.ts":
/*!************************************!*\
  !*** ./assets/js/kanban/create.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/**
 * Adds a new li element to the ul element of the form for dynamic columns addition.
 * It also adds a button to delete this new li element on a click.
 *
 */
function addInputToForm() {
  var collectionHolder = document.querySelector('form .columns');
  var lastChild = collectionHolder.querySelector('.js-last-column');
  var item = document.createElement('li');
  var inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  inputContainer.classList.add("js-input-container");
  inputContainer.classList.add("added-column");
  item.appendChild(inputContainer);
  // Copies the HTML content of the ul element, replacing __name__
  // by the dataset index field
  inputContainer.innerHTML = collectionHolder.dataset.prototype.replace(/__name__/g, collectionHolder.dataset.index);
  // Retrieves the input child of the li element created
  var input = item.querySelector("input");
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
var addInputDeleteBtn = function addInputDeleteBtn(item) {
  var removeBtn = document.createElement('button');
  removeBtn.classList.add("delete-column");
  var text = document.createTextNode('Supprimer');
  removeBtn.appendChild(text);
  item.querySelector(".js-input-container").append(removeBtn);
  removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    item.remove();
  });
};
// Adding click event listener for the column adding button
var btn = document.querySelector('.js-add-item');
if (btn != null) {
  btn.addEventListener("click", addInputToForm);
}

/***/ }),

/***/ "./assets/js/kanban/list.ts":
/*!**********************************!*\
  !*** ./assets/js/kanban/list.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
exports.__esModule = true;
var sortHandler_1 = __webpack_require__(/*! ../sortHandler */ "./assets/js/sortHandler.ts");
var sort_options = document.querySelectorAll('.js-sort-options');
// Retrieving all kanbans owned by the user
var user_kanbans = document.querySelectorAll(".js-kanbans-created .kanban");
var user_kanbans_arr = Array.prototype.slice.call(user_kanbans, 0);
// Retrieving all kanbans where the user is invited
var invited_kanbans = document.querySelectorAll(".js-kanbans-invited .kanban");
var invited_kanbans_arr = Array.prototype.slice.call(invited_kanbans, 0);
// Binding events for every sorting button
if (sort_options.length > 0) {
  if (user_kanbans.length > 0) {
    (0, sortHandler_1.bind_events)(sort_options[0], user_kanbans[0].parentElement, user_kanbans_arr);
  }
  if (invited_kanbans.length > 0) {
    (0, sortHandler_1.bind_events)(sort_options[1], invited_kanbans[0].parentElement, invited_kanbans_arr);
  }
}

/***/ }),

/***/ "./assets/js/kanban/view.ts":
/*!**********************************!*\
  !*** ./assets/js/kanban/view.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
var Kanban_1 = __webpack_require__(/*! ./Kanban */ "./assets/js/kanban/Kanban.ts");
// Initialise un object Kanban qui permettra la gestion de celui-ci.
Kanban_1.Kanban.initFromTemplate(document.querySelector("table.kanban"), document.querySelectorAll(".js-members li"));

/***/ }),

/***/ "./assets/js/popupHandler.ts":
/*!***********************************!*\
  !*** ./assets/js/popupHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
exports.__esModule = true;
exports.createTaskPopup = exports.createNewTaskPopup = void 0;
/**
 * Creates a popup container with the content <child>,
 * ignoring the page flow.
 *
 * @param   child The content of the popup.
 * @returns       The popup created.
 */
function createPopup(child, closeMessage) {
  if (closeMessage === void 0) {
    closeMessage = "Annuler";
  }
  var background = document.createElement("div");
  background.classList.add("js-popup-background");
  background.classList.add("popup-background");
  document.body.appendChild(background);
  var popup = document.createElement('div');
  popup.classList.add('popup');
  var relativeContainer = document.createElement('div');
  relativeContainer.classList.add('popup-relative');
  popup.appendChild(relativeContainer);
  var exit = document.createElement('button');
  exit.classList.add('popup-exit');
  exit.addEventListener('click', function () {
    popup.remove();
    background.remove();
  });
  var exitText = document.createTextNode(closeMessage);
  exit.append(exitText);
  relativeContainer.append(child);
  relativeContainer.append(exit);
  document.body.append(popup);
  return popup;
}
/**
 * Creates an input container named <name> for a <type> input with
 * the label <labelContent>.
 *
 * @param type         Type of input.
 * @param labelContent Text content of the input label.
 * @param name         The name of the input.
 */
function createInput(type, labelContent, name) {
  var inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');
  inputContainer.classList.add('form-element-bigger-container');
  var input = document.createElement('input');
  input.name = name;
  input.type = type;
  if (type === 'text') {
    input.required = true;
    input.minLength = 3;
    input.maxLength = 255;
  }
  input.placeholder = '';
  var label = document.createElement('label');
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
function createNewTaskForm(action) {
  var form = document.createElement('form');
  form.action = action;
  form.method = 'POST';
  form.style.margin = "0px";
  var nameInputContainer = createInput('text', 'Nom', 'name');
  var descInputContainer = document.createElement('div');
  descInputContainer.classList.add('textarea-container');
  descInputContainer.classList.add('form-element-bigger-container');
  var descInput = document.createElement('textarea');
  descInput.name = 'description';
  descInput.required = true;
  descInput.minLength = 3;
  descInput.maxLength = 500;
  descInput.placeholder = 'Description';
  descInputContainer.appendChild(descInput);
  var dateInputContainer = createInput('date', 'Date limite (optionnelle)', 'limitDate');
  var submit = document.createElement('button');
  submit.textContent = 'Ajouter une tâche';
  form.appendChild(nameInputContainer);
  form.appendChild(descInputContainer);
  form.appendChild(dateInputContainer);
  form.appendChild(submit);
  return form;
}
/**
 * Converts Markdown text to HTML text.
 * @param mdText The markdown text to convert.
 * @returns      The converted to HTML text.
 */
function formatMarkdown(mdText) {
  var htmlText = mdText.replace(/(\*\*)(.*?)(\*\*)/gim, '<span class="bold">$2</span>') // bold
  .replace(/(\*)(.*?)(\*)/gim, '<span class="italic">$2</span>') // italic
  .replace(/(__)(.*?)(__)/gim, '<span class="underline">$2</span>') // underlined
  .replace(/(~~)(.*?)(~~)/gim, '<span class="deleted">$2</span>'); // deleted
  return htmlText.trim();
}
/**
 * Creates a popup for task creation under the column that has the id
 * <id>.
 *
 * @param id The id of the column we create the task under.
 */
function createNewTaskPopup(id) {
  var form = createNewTaskForm('/task/create_under/' + id);
  createPopup(form);
}
exports.createNewTaskPopup = createNewTaskPopup;
/**
 * Create a popup for task display.
 *
 * @param   task The kanban task to display.
 * @returns      The popup container.
 */
function createTaskPopup(task) {
  var container = document.createElement("div");
  container.classList.add("task-popup");
  // Task data
  var nameElement = document.createElement("h2");
  nameElement.textContent = task.name;
  container.appendChild(nameElement);
  if (task.limitDate != null) {
    var dateElement = document.createElement("span");
    dateElement.classList.add("limite-date");
    dateElement.textContent = "Date limite : " + task.limitDate.toLocaleDateString();
    container.appendChild(dateElement);
  }
  if (task.assignUsername != null) {
    var usernameElement = document.createElement("h3");
    usernameElement.textContent = "Tâche assignée à : " + task.assignUsername;
    container.appendChild(usernameElement);
  }
  var descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = formatMarkdown(task.description);
  container.appendChild(descriptionElement);
  // Task actions
  if (task.assignUsername === null && task.column.offset < task.column.kanban.getColumns().length - 1) {
    var taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("task-actions");
    var taskAcceptButton = document.createElement("button");
    taskAcceptButton.classList.add("js-accept");
    taskAcceptButton.innerText = "Accepter";
    taskAcceptButton.dataset.taskId = task.id.toString();
    taskActionsElement.appendChild(taskAcceptButton);
    // Check if the current user is the kanban's owner
    var owner = task.column.kanban.getMembers().filter(function (member) {
      return member.isOwner;
    })[0];
    if (owner.isCurrent && task.column.kanban.getMembers().length > 1) {
      var affectContainerElement = document.createElement("div");
      affectContainerElement.classList.add("affect-container");
      var affectSelectElement_1 = document.createElement("select");
      affectSelectElement_1.name = "user";
      task.column.kanban.getMembers().forEach(function (member) {
        if (member.isOwner) {
          return;
        }
        var optionElement = document.createElement("option");
        optionElement.value = member.id.toString();
        optionElement.innerText = member.username;
        affectSelectElement_1.appendChild(optionElement);
      });
      affectContainerElement.appendChild(affectSelectElement_1);
      var affectButtonElement = document.createElement("button");
      affectButtonElement.classList.add("js-affect");
      affectButtonElement.classList.add("affect-btn");
      affectButtonElement.dataset.taskId = task.id.toString();
      affectButtonElement.innerText = "Affecter";
      affectContainerElement.appendChild(affectButtonElement);
      taskActionsElement.appendChild(affectContainerElement);
    }
    container.appendChild(taskActionsElement);
  }
  return createPopup(container, "Fermer");
}
exports.createTaskPopup = createTaskPopup;

/***/ }),

/***/ "./assets/js/sortHandler.ts":
/*!**********************************!*\
  !*** ./assets/js/sortHandler.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
exports.__esModule = true;
exports.bind_events = void 0;
/**
 * Sorts HTML div elements in ascending order using a string key
 * from the div childs.
 *
 * @param div1 First HTML div element to compare.
 * @param div2 Second HTML div element to compare.
 * @returns A negative value if the first key is lower than the second,
 *          a positive one if it is higher than the second, or
 *          0 if they are equals.
 */
var alpha_sort = function alpha_sort(div1, div2) {
  var name1 = div1.querySelector(".js-alpha-key").textContent;
  var name2 = div2.querySelector(".js-alpha-key").textContent;
  return name1.localeCompare(name2);
};
/**
 * Sorts HTML div elements in descending order using a string key
 * from the div childs.
 *
 * @param div1 First HTML div element to compare.
 * @param div2 Second HTML div element to compare.
 * @returns A positive value if the first key is lower than the second,
 *          a negative one if it is higher than the second, or
 *          0 if they are equals.
 */
var alpha_sort_dec = function alpha_sort_dec(div1, div2) {
  var name1 = div1.querySelector(".js-alpha-dec-key").textContent;
  var name2 = div2.querySelector(".js-alpha-dec-key").textContent;
  return name2.localeCompare(name1);
};
/**
 * Sorts HTML div elements in ascending order using a date key
 * from the div childs.
 *
 * @param div1 First HTML div element to compare.
 * @param div2 Second HTML div element to compare.
 * @returns A negative value if the first key is lower than the second,
 *          a positive one if it is higher than the second, or
 *          0 if they are equals.
 */
var date_sort = function date_sort(div1, div2) {
  var dateElem1 = div1.querySelector(".js-date-key");
  var dateElem2 = div2.querySelector(".js-date-key");
  if (dateElem1 == null) {
    return 1;
  }
  if (dateElem2 == null) {
    return -1;
  }
  var dateParts1 = dateElem1.textContent.split("/");
  var dateParts2 = dateElem2.textContent.split("/");
  var date1 = new Date(+dateParts1[2], +dateParts1[1] - 1, +dateParts1[0]);
  var date2 = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);
  return date1.getTime() - date2.getTime();
};
/**
 * Sorts HTML div elements in descending order using a date key
 * from the div childs.
 *
 * @param div1 First HTML div element to compare.
 * @param div2 Second HTML div element to compare.
 * @returns A positive value if the first key is lower than the second,
 *          a negative one if it is higher than the second, or
 *          0 if they are equals.
 */
var date_sort_dec = function date_sort_dec(div1, div2) {
  var dateElem1 = div1.querySelector(".js-date-dec-key");
  var dateElem2 = div2.querySelector(".js-date-dec-key");
  if (dateElem1 == null) {
    return 1;
  }
  if (dateElem2 == null) {
    return -1;
  }
  var dateParts1 = dateElem1.textContent.split("/");
  var dateParts2 = dateElem2.textContent.split("/");
  var date1 = new Date(+dateParts1[2], +dateParts1[1] - 1, +dateParts1[0]);
  var date2 = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]);
  return date2.getTime() - date1.getTime();
};
/**
 * Hide all tasks that don't belong to the kanban that has the id kanbanId.
 *
 * @param elements The tasks.
 * @param kanbanId The kanban id.
 */
var kanban_sort = function kanban_sort(elements, kanbanId) {
  elements.forEach(function (element) {
    if (+element.dataset.kanbanId !== kanbanId) {
      element.classList.add("invisible");
    } else {
      element.classList.remove("invisible");
    }
  });
};
/**
 * Shows all the tasks.
 *
 * @param elements The tasks.
 */
var kanban_unsort = function kanban_unsort(elements) {
  elements.forEach(function (element) {
    element.classList.remove("invisible");
  });
};
/**
 * Deletes the content of <parent> and replaces it with the elements of
 * <sortedElements>.
 *
 * @param parent The container where the function appends the elements.
 * @param sortedElements The elements to append in the container.
 */
var refresh = function refresh(parent, sortedElements) {
  for (var i = 0; i < parent.children.length; i++) {
    parent.children[i].remove();
  }
  for (var i = 0; i < sortedElements.length; ++i) {
    parent.appendChild(sortedElements[i]);
  }
};
/**
 * Binds the appropriate sorting method to every sort button found.
 *
 * @param buttonsParent Buttons container.
 * @param elementsParent Container of elements to sort.
 * @param unsortedElements Elements to sort.
 */
function bind_events(buttonsParent, elementsParent, elements) {
  var alpha = buttonsParent.querySelector('.js-alpha');
  var alpha_dec = buttonsParent.querySelector('.js-alpha-dec');
  var date = buttonsParent.querySelector('.js-date');
  var date_dec = buttonsParent.querySelector('.js-date-dec');
  var kanban = buttonsParent.querySelector('.kanban-sort');
  if (alpha != null) {
    alpha.addEventListener('click', function () {
      elements.sort(alpha_sort);
      refresh(elementsParent, elements);
    });
  }
  if (alpha_dec != null) {
    alpha_dec.addEventListener('click', function () {
      elements.sort(alpha_sort_dec);
      refresh(elementsParent, elements);
    });
  }
  if (date != null) {
    date.addEventListener('click', function () {
      elements.sort(date_sort);
      refresh(elementsParent, elements);
    });
  }
  if (date_dec != null) {
    date_dec.addEventListener('click', function () {
      elements.sort(date_sort_dec);
      refresh(elementsParent, elements);
    });
  }
  if (kanban != null && elements instanceof Array) {
    kanban.addEventListener("change", function (e) {
      var kanbanId = +e.target.value;
      if (kanbanId < 0) {
        kanban_unsort(elements);
        return;
      }
      kanban_sort(elements, kanbanId);
    });
  }
}
exports.bind_events = bind_events;

/***/ }),

/***/ "./assets/js/task/add.ts":
/*!*******************************!*\
  !*** ./assets/js/task/add.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
exports.__esModule = true;
var popupHandler_1 = __webpack_require__(/*! ../popupHandler */ "./assets/js/popupHandler.ts");
document.querySelectorAll('.add-task button').forEach(function (button) {
  button.addEventListener('click', function () {
    (0, popupHandler_1.createNewTaskPopup)(+button.dataset.colId);
  });
});

/***/ }),

/***/ "./assets/js/task/ajax.ts":
/*!********************************!*\
  !*** ./assets/js/task/ajax.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
exports.__esModule = true;
exports.sendTaskAffectRequest = void 0;
var ajax_1 = __webpack_require__(/*! ../ajax */ "./assets/js/ajax.ts");
// Creation of a XML HTTP Request
var xhr = (0, ajax_1.createXhrObject)();
/**
 * Handles the response receives after sending an asynchronous request to the
 * URL /task/[accept | affect].
 * If the HTTP status code is 200, updates the task affectation paragraph and
 * deletes the HTML div element that has the class "affect-container" and a
 * dataset task-id field with the following syntax :
 *
 * data-task-id="<taskId>"
 *
 * Otherwise, if an error occurs, it will display the error next to the
 * HTML div element.
 *
 * @param taskId Identifier of the task handled.
 */
function handleResponse(taskId, callback) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      callback(+taskId, JSON.parse(xhr.responseText));
    } else {
      var error = document.querySelector('.failure-flash');
      if (error != null) {
        error.remove();
      }
      var div = document.createElement('div');
      div.setAttribute('class', 'failure-flash');
      var text = document.createTextNode(xhr.getResponseHeader('X-Error-Message'));
      div.appendChild(text);
      document.querySelector(".kanban-title").after(div);
    }
  }
}
/**
 * Sends an asynchronous request to the URL /task/<action>
 * with the id of the task affected. If the task is affected
 * by the owner to another user, the user's id is also sent.
 *
 * @param event  The event that triggered the call to the function.
 * @param action The action to perform ("accept" | "affect").
 */
function sendTaskAffectRequest(event, action, callback) {
  // Type specification required as the Element type does not have a dataset property.
  var target = event.currentTarget;
  var taskId = target.dataset.taskId;
  xhr.onreadystatechange = function () {
    handleResponse(taskId, callback);
  };
  xhr.open("POST", "/task/" + action, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  var data = {
    taskId: taskId
  };
  // Add the userId if required (for task affectation)
  if (action === 'affect') {
    var select = target.parentNode.querySelector('select');
    data['userId'] = select.value;
  }
  xhr.send(JSON.stringify(data));
}
exports.sendTaskAffectRequest = sendTaskAffectRequest;

/***/ }),

/***/ "./assets/js/task/list.ts":
/*!********************************!*\
  !*** ./assets/js/task/list.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
exports.__esModule = true;
var sortHandler_1 = __webpack_require__(/*! ../sortHandler */ "./assets/js/sortHandler.ts");
var sort_options = document.querySelectorAll('.js-sort-options');
// Retrieving all tasks
var tasks = document.querySelectorAll(".tasks .task");
var tasks_arr = Array.prototype.slice.call(tasks, 0);
// Binding events for every sorting button
if (sort_options.length > 0) {
  if (tasks_arr.length > 0) {
    (0, sortHandler_1.bind_events)(sort_options[0], tasks_arr[0].parentElement, tasks_arr);
  }
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/form/stylesheet.css":
/*!*******************************************!*\
  !*** ./assets/styles/form/stylesheet.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/stylesheet.css":
/*!*********************************************!*\
  !*** ./assets/styles/header/stylesheet.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/home/stylesheet.css":
/*!*******************************************!*\
  !*** ./assets/styles/home/stylesheet.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/invitation/stylesheet.css":
/*!*************************************************!*\
  !*** ./assets/styles/invitation/stylesheet.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/kanban/create.css":
/*!*****************************************!*\
  !*** ./assets/styles/kanban/create.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/kanban/list.css":
/*!***************************************!*\
  !*** ./assets/styles/kanban/list.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/kanban/view.css":
/*!***************************************!*\
  !*** ./assets/styles/kanban/view.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/task/list.css":
/*!*************************************!*\
  !*** ./assets/styles/task/list.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-f1ceea"], () => (__webpack_exec__("./assets/app.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxRjtBQUNKOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ludml0YXRpb24vYWpheC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMva2FuYmFuL0thbmJhbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMva2FuYmFuL2NyZWF0ZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMva2FuYmFuL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2thbmJhbi92aWV3LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wb3B1cEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NvcnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXNrL2FkZC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFzay9hamF4LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90YXNrL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvZm9ybS9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hvbWUvc3R5bGVzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbnZpdGF0aW9uL3N0eWxlc2hlZXQuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMva2FuYmFuL2NyZWF0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9rYW5iYW4vbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9rYW5iYW4vdmlldy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy90YXNrL2xpc3QuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2luZGV4LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKFwiLi9zdHlsZXMvYXBwLmNzc1wiKTtcclxucmVxdWlyZShcIi4vc3R5bGVzL2Zvcm0vc3R5bGVzaGVldC5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9oZWFkZXIvc3R5bGVzaGVldC5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9ob21lL3N0eWxlc2hlZXQuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9zdHlsZXMva2FuYmFuL2xpc3QuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9zdHlsZXMva2FuYmFuL2NyZWF0ZS5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9rYW5iYW4vdmlldy5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy90YXNrL2xpc3QuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9zdHlsZXMvaW52aXRhdGlvbi9zdHlsZXNoZWV0LmNzc1wiKTtcclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbnJlcXVpcmUoXCIuL2Jvb3RzdHJhcC5qc1wiKTtcclxuLy8gaW1wb3J0IHR5cGVzY3JpcHQgZmlsZXNcclxucmVxdWlyZShcIi4vanMvc29ydEhhbmRsZXIudHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL3BvcHVwSGFuZGxlci50c1wiKTtcclxucmVxdWlyZShcIi4vanMvYWpheC50c1wiKTtcclxucmVxdWlyZShcIi4vanMva2FuYmFuL0thbmJhbi50c1wiKTtcclxucmVxdWlyZShcIi4vanMva2FuYmFuL2NyZWF0ZS50c1wiKTtcclxucmVxdWlyZShcIi4vanMva2FuYmFuL2xpc3QudHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2thbmJhbi92aWV3LnRzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9pbnZpdGF0aW9uL2FqYXgudHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL3Rhc2svYWpheC50c1wiKTtcclxucmVxdWlyZShcIi4vanMvdGFzay9saXN0LnRzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy90YXNrL2FkZC50c1wiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuY3JlYXRlWGhyT2JqZWN0ID0gdm9pZCAwO1xyXG4vKipcclxuICogY3JlYXRlcyBhIFhNTCBIVFRQIFJlcXVlc3Qgb2JqZWN0XHJcbiAqIGlmIHN1cHBvcnRlZC5cclxuICpcclxuICogQHJldHVybiBYTUwgSFRUUCBSZXF1ZXN0IG9iamVjdCBpZiBzdXBwb3J0ZWQsXHJcbiAqICAgbnVsbCBvdGhlcndpc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVYaHJPYmplY3QoKSB7XHJcbiAgICBpZiAod2luZG93LlhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIG5hbWVzID0gW1xyXG4gICAgICAgICAgICBcIk1zeG1sMi5YTUxIVFRQLjYuMFwiLFxyXG4gICAgICAgICAgICBcIk1zeG1sMi5YTUxIVFRQLjMuMFwiLFxyXG4gICAgICAgICAgICBcIk1zeG1sMi5YTUxIVFRQXCIsXHJcbiAgICAgICAgICAgIFwiTWljcm9zb2Z0LlhNTEhUVFBcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KG5hbWVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7IC8vIG5vdCBzdXBwb3J0ZWRcclxufVxyXG5leHBvcnRzLmNyZWF0ZVhock9iamVjdCA9IGNyZWF0ZVhock9iamVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBhamF4XzEgPSByZXF1aXJlKFwiLi4vYWpheFwiKTtcclxuLy8gU2VsZWN0aW9uIG9mIGV2ZXJ5IGVsZW1lbnQgaGF2aW5nIHRoZSAnaW52aXRhdGlvbicgY2xhc3NcclxudmFyIGludml0YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWludml0YXRpb24nKTtcclxuLy8gQ3JlYXRpb24gb2YgYSBYTUwgSFRUUCBSZXF1ZXN0XHJcbnZhciB4aHIgPSAoMCwgYWpheF8xLmNyZWF0ZVhock9iamVjdCkoKTtcclxuLyoqXHJcbiAqIEhhbmRsZXMgdGhlIHJlc3BvbnNlIHJlY2VpdmVzIGFmdGVyIHNlbmRpbmcgYW4gYXN5bmNocm9ub3VzIHJlcXVlc3QgdG8gdGhlXHJcbiAqIFVSTCAvaW52aXRhdGlvbi9bYWNjZXB0IHwgcmVqZWN0XS5cclxuICogSWYgdGhlIEhUVFAgc3RhdHVzIGNvZGUgaXMgMjAwLCBkZWxldGVzIHRoZSBIVE1MIGRpdiBlbGVtZW50IHRoYXQgaGFzIGFuXHJcbiAqIGRhdGFzZXQgaW52aXRhdGlvbi1pZCBmaWVsZCB3aXRoIHRoZSBmb2xsb3dpbmcgc3ludGF4IDpcclxuICpcclxuICogZGF0YS1pbnZpdGF0aW9uLWlkPVwiPGlkPlwiXHJcbiAqXHJcbiAqIE90aGVyd2lzZSwgaWYgYW4gZXJyb3Igb2NjdXJzLCBpdCB3aWxsIGRpc3BsYXkgdGhlIGVycm9yIG5leHQgdG8gdGhlXHJcbiAqIEhUTUwgZGl2IGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCBJZGVudGlmaWVyIG9mIHRoZSBpbnZpdGF0aW9uIGhhbmRsZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZShpZCkge1xyXG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWludml0YXRpb24taWQ9J1wiICsgaWQgKyBcIiddXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaWx1cmUtZmxhc2gnKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFpbHVyZS1mbGFzaCcpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1FcnJvci1NZXNzYWdlJykpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuYWZ0ZXIoZGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFNlbmRzIGFuIGFzeW5jaHJvbm91cyByZXF1ZXN0IHRvIHRoZSBVUkwgL2ludml0YXRpb24vPGFjdGlvbj5cclxuICogd2l0aCB0aGUgaWQgb2YgdGhlIGludml0YXRpb24gaGFuZGxlZC5cclxuICpcclxuICogQHBhcmFtIGV2ZW50ICBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGNhbGwgdG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYWN0aW9uIFRoZSBhY3Rpb24gdG8gcGVyZm9ybSAoXCJhY2NlcHRcIiB8IFwicmVqZWN0XCIpLlxyXG4gKi9cclxuZnVuY3Rpb24gc2VuZFJlcXVlc3QoZXZlbnQsIGFjdGlvbikge1xyXG4gICAgLy8gVHlwZSBzcGVjaWZpY2F0aW9uIHJlcXVpcmVkIGFzIHRoZSBFbGVtZW50IHR5cGUgZG9lcyBub3QgaGF2ZSBhIGRhdGFzZXQgcHJvcGVydHkuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIHZhciBpbnZJZCA9IHRhcmdldC5kYXRhc2V0Lmludml0YXRpb25JZDtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGhhbmRsZVJlc3BvbnNlKGludklkKTsgfTtcclxuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi9pbnZpdGF0aW9uL1wiICsgYWN0aW9uLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XHJcbiAgICB2YXIgZGF0YSA9IHsgaWQ6IGludklkIH07XHJcbiAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuLy8gQWRkaW5nIGNsaWNrIGV2ZW50IGxpc3RlbmVycyBmb3IgZXZlcnkgYnV0dG9uIGRlZGljYXRlZCB0byBpbnZpdGF0aW9uIGhhbmRsaW5nXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgIHZhciBhY2NlcHQgPSBpbnZpdGF0aW9uc1tpXS5xdWVyeVNlbGVjdG9yKCcuanMtYWNjZXB0Jyk7XHJcbiAgICB2YXIgcmVqZWN0ID0gaW52aXRhdGlvbnNbaV0ucXVlcnlTZWxlY3RvcignLmpzLXJlamVjdCcpO1xyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gc2VuZFJlcXVlc3QoZXZ0LCAnYWNjZXB0Jyk7IH0pO1xyXG4gICAgcmVqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gc2VuZFJlcXVlc3QoZXZ0LCAncmVqZWN0Jyk7IH0pO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkthbmJhbiA9IGV4cG9ydHMuS2FuYmFuQ29sdW1uID0gZXhwb3J0cy5LYW5iYW5UYXNrID0gZXhwb3J0cy5LYW5iYW5NZW1iZXIgPSB2b2lkIDA7XHJcbnZhciBwb3B1cEhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi9wb3B1cEhhbmRsZXJcIik7XHJcbnZhciBhamF4XzEgPSByZXF1aXJlKFwiLi4vdGFzay9hamF4XCIpO1xyXG52YXIgS2FuYmFuTWVtYmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2FuYmFuTWVtYmVyKGlkLCB1c2VybmFtZSwgaXNPd25lciwgaXNDdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmlzT3duZXIgPSBpc093bmVyO1xyXG4gICAgICAgIHRoaXMuaXNDdXJyZW50ID0gaXNDdXJyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEthbmJhbk1lbWJlcjtcclxufSgpKTtcclxuZXhwb3J0cy5LYW5iYW5NZW1iZXIgPSBLYW5iYW5NZW1iZXI7XHJcbi8qKlxyXG4gKiBSZXByw6lzZW50ZSB1bmUgdMOiY2hlIGQndW4ga2FuYmFuLlxyXG4gKi9cclxudmFyIEthbmJhblRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLYW5iYW5UYXNrKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgbGltaXREYXRlLCBhc3NpZ25Vc2VybmFtZSwgY29sdW1uKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMubGltaXREYXRlID0gbGltaXREYXRlO1xyXG4gICAgICAgIHRoaXMuYXNzaWduVXNlcm5hbWUgPSBhc3NpZ25Vc2VybmFtZTtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgIH1cclxuICAgIHJldHVybiBLYW5iYW5UYXNrO1xyXG59KCkpO1xyXG5leHBvcnRzLkthbmJhblRhc2sgPSBLYW5iYW5UYXNrO1xyXG4vKipcclxuICogUmVwcsOpc2VudGUgdW5lIGNvbG9ubmUgZCd1biBrYW5iYW4uXHJcbiAqL1xyXG52YXIgS2FuYmFuQ29sdW1uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2FuYmFuQ29sdW1uKG5hbWUsIG9mZnNldCwga2FuYmFuKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICB0aGlzLmthbmJhbiA9IGthbmJhbjtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFqb3V0ZSBsYSB0w6JjaGUgZG9udCBsZXMgaW5mb3JtYXRpb25zIHNvbnQgZG9ubsOpZXMgZGFucyBsZXMgcGFyYW3DqHRyZXMgw6BcclxuICAgICAqIGxhIGNvbG9ubmUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAgbmFtZSAgICAgICAgICAgTGUgbm9tIGRlIGxhIHTDomNoZS5cclxuICAgICAqIEBwYXJhbSAgIGRlc2NyaXB0aW9uICAgIExhIGRlc2NyaXB0aW9uIGRlIGxhIHTDomNoZS5cclxuICAgICAqIEBwYXJhbSAgIGxpbWl0RGF0ZSAgICAgIExhIGRhdGUgbGltaXRlIGRlIGxhIHTDomNoZS5cclxuICAgICAqIEBwYXJhbSAgIGFzc2lnblVzZXJuYW1lIExlIG5vbSBkJ3V0aWxpc2F0ZXVyIGRlIGxhIHBlcnNvbm5lIGFzc2lnbsOpZSDDoCBsYVxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgdMOiY2hlLlxyXG4gICAgICogQHJldHVybnMgICAgICAgICAgICAgICAgTGEgdMOiY2hlIGFqb3V0w6llLlxyXG4gICAgICovXHJcbiAgICBLYW5iYW5Db2x1bW4ucHJvdG90eXBlLmFkZFRhc2sgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBsaW1pdERhdGUsIGFzc2lnblVzZXJuYW1lKSB7XHJcbiAgICAgICAgdmFyIHRhc2sgPSBuZXcgS2FuYmFuVGFzayhpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGxpbWl0RGF0ZSwgYXNzaWduVXNlcm5hbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbnZvaWUgbGEgdMOiY2hlIGFzc29jacOpZSDDoCBsJ0lEIGRvbm7DqS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGFza0lkIEwnSUQgZGUgbGEgdMOiY2hlIHNvdWhhaXTDqWUuXHJcbiAgICAgKiBAcmV0dXJucyAgICAgIExhIHTDomNoZSBhc3NvY2nDqWUgb3UgbnVsbCBzaSBub24gdHJvdXbDqWUuXHJcbiAgICAgKi9cclxuICAgIEthbmJhbkNvbHVtbi5wcm90b3R5cGUuZ2V0VGFza0J5SWQgPSBmdW5jdGlvbiAodGFza0lkKSB7XHJcbiAgICAgICAgdmFyIHRhc2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICBpZiAodC5pZCA9PSB0YXNrSWQpXHJcbiAgICAgICAgICAgICAgICB0YXNrID0gdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH07XHJcbiAgICByZXR1cm4gS2FuYmFuQ29sdW1uO1xyXG59KCkpO1xyXG5leHBvcnRzLkthbmJhbkNvbHVtbiA9IEthbmJhbkNvbHVtbjtcclxuLyoqXHJcbiAqIENsYXNzZSBtYWl0cmVzc2UgZCd1biBrYW5iYW4uIEVsbGUgc2UgY2hhcmdlcmEgZCdlZmZlY3R1ZXIgZGVzIGFjdGlvbnMgc3VyIGxlXHJcbiAqIGthbmJhbiBldCBkZSBsZSBtb2RpZmllciBlbiBjb25zw6lxdWVuY2UuXHJcbiAqL1xyXG52YXIgS2FuYmFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2FuYmFuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9tZW1iZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvcHVwID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB1biBLYW5iYW4gZGVwdWlzIGxlIHRlbXBsYXRlIGRvbm7DqSAoU291cyBmb3JtZSBkZSB0YWJsZWF1IEhUTUwpXHJcbiAgICAgKiBldCBsZSByZXRvdXJuZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gICB0YWJsZSAgIEwnw6lsZW1lbnQgdGFibGVhdSByZXByw6lzZW50YW50IGxlIGthbmJhbi5cclxuICAgICAqIEBwYXJhbSAgIG1lbWJlcnMgTGVzIG1lbWJyZXMgZHUga2FuYmFuIHNvdXMgZm9ybWUgZGUgbGlzdGUuXHJcbiAgICAgKiBAcmV0dXJucyAgICAgICAgIEwnb2JqZXQgS2FuYmFuIGFzc29jacOpIGF1IHRhYmxlYXUgSFRNTCBkb25uw6kuXHJcbiAgICAgKi9cclxuICAgIEthbmJhbi5pbml0RnJvbVRlbXBsYXRlID0gZnVuY3Rpb24gKHRhYmxlLCBtZW1iZXJzKSB7XHJcbiAgICAgICAgaWYgKHRhYmxlID09IG51bGwgfHwgbWVtYmVycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBLYW5iYW4oKTtcclxuICAgICAgICBrYW5iYW4uX3RlbXBsYXRlID0gdGFibGU7XHJcbiAgICAgICAgbWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChtZW1iZXIpIHtcclxuICAgICAgICAgICAga2FuYmFuLl9tZW1iZXJzLnB1c2gobmV3IEthbmJhbk1lbWJlcigrbWVtYmVyLmRhdGFzZXQuaWQsIG1lbWJlci5pbm5lclRleHQsIG1lbWJlci5kYXRhc2V0LmlzT3duZXIgPT09IFwiMVwiLCBtZW1iZXIuZGF0YXNldC5pc0N1cnJlbnQgPT09IFwiMVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBsZXMgZG9ubsOpZXMgZ3LDomNlIGF1IHRlbXBsYXRlXHJcbiAgICAgICAgLy8gQ29sb25uZXNcclxuICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uLCBpKSB7XHJcbiAgICAgICAgICAgIC8vIExlcyBjb2xvbm5lcyBzZXJvbnQgZG9ubsOpZXMgZGFucyBsJ29yZHJlXHJcbiAgICAgICAgICAgIC8vIFZvaXIgOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLWFwaS8gKFBhcnRpZSA2KVxyXG4gICAgICAgICAgICBrYW5iYW4uYWRkQ29sdW1uKGNvbHVtbi5pbm5lclRleHQsIGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFTDomNoZXNcclxuICAgICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXRhc2tcIikuZm9yRWFjaChmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciB0YXNrRGF0YSA9IGthbmJhbi5nZXRDb2x1bW5CeU9mZnNldCgrdGFzay5kYXRhc2V0LmNvbHVtbk9mZnNldClcclxuICAgICAgICAgICAgICAgIC5hZGRUYXNrKCt0YXNrLmRhdGFzZXQudGFza0lkLCB0YXNrLmRhdGFzZXQudGFza05hbWUsIHRhc2suZGF0YXNldC50YXNrRGVzY3JpcHRpb24sIHRhc2suZGF0YXNldC50YXNrRGF0ZSA/IG5ldyBEYXRlKHRhc2suZGF0YXNldC50YXNrRGF0ZSkgOiBudWxsLCAoX2EgPSB0YXNrLmRhdGFzZXQudGFza1VzZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGwpO1xyXG4gICAgICAgICAgICBrYW5iYW4uYmluZFRhc2tFdmVudHModGFzaywgdGFza0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBrYW5iYW47XHJcbiAgICB9O1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5vcGVuVGFza1BvcHVwID0gZnVuY3Rpb24gKHRhc2tEYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBPdXZyZSBsYSBwb3B1cFxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQb3B1cCA9ICgwLCBwb3B1cEhhbmRsZXJfMS5jcmVhdGVUYXNrUG9wdXApKHRhc2tEYXRhKTtcclxuICAgICAgICAvLyBBam91dGUgbGVzIMOpdsOobmVtZW50cyBkJ2FmZmVjdGF0aW9uXHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IHRoaXMuX2N1cnJlbnRQb3B1cC5xdWVyeVNlbGVjdG9yKCcuanMtYWNjZXB0Jyk7XHJcbiAgICAgICAgdmFyIGFmZmVjdCA9IHRoaXMuX2N1cnJlbnRQb3B1cC5xdWVyeVNlbGVjdG9yKCcuanMtYWZmZWN0Jyk7XHJcbiAgICAgICAgaWYgKGFjY2VwdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgICAgICgwLCBhamF4XzEuc2VuZFRhc2tBZmZlY3RSZXF1ZXN0KShldnQsICdhY2NlcHQnLCBfdGhpcy5oYW5kbGVBZmZlY3RSZXNwb25zZS5iaW5kKF90aGlzKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWZmZWN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYWZmZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgKDAsIGFqYXhfMS5zZW5kVGFza0FmZmVjdFJlcXVlc3QpKGV2dCwgJ2FmZmVjdCcsIF90aGlzLmhhbmRsZUFmZmVjdFJlc3BvbnNlLmJpbmQoX3RoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWpvdXRlIHVuZSBjb2xvbm5lIHZpZGUgYXUga2FuYmFuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lICAgTGUgbm9tIGRlIGxhIGNvbG9ubmUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IEwnaW5kZXggZGUgbGEgY29sb25uZS5cclxuICAgICAqL1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5hZGRDb2x1bW4gPSBmdW5jdGlvbiAobmFtZSwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKG5ldyBLYW5iYW5Db2x1bW4obmFtZSwgb2Zmc2V0LCB0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRvdXJuZSBsYSBjb2xvbm5lIGF5YW50IGwnb2Zmc2V0IGRlbWFuZMOpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgIG9mZnNldCBMJ29mZnNldCBkZSBsYSBjb2xvbm5lIHNvdWhhaXTDqWUuXHJcbiAgICAgKiBAcmV0dXJucyAgICAgICAgTGEgY29sb25uZSB0cm91dsOpZS5cclxuICAgICAqL1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5nZXRDb2x1bW5CeU9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcclxuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPj0gdGhpcy5fY29sdW1ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIGthbmJhbiBjb2x1bW4gb2Zmc2V0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLl9jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4ub2Zmc2V0ID09PSBvZmZzZXQ7XHJcbiAgICAgICAgfSlbMF07XHJcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbnZvaWUgbGEgdMOiY2hlIGFzc29jacOpZSDDoCBsJ0lEIGRlbWFuZMOpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZCBMJ0lEIGRlIGxhIHTDomNoZSBzb3VoYWl0w6llLlxyXG4gICAgICogQHJldHVybnMgIExhIHTDomNoZSBhc3NvY2nDqWUuXHJcbiAgICAgKi9cclxuICAgIEthbmJhbi5wcm90b3R5cGUuZ2V0VGFza0J5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgdGFzayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBjb2x1bW4uZ2V0VGFza0J5SWQoaWQpO1xyXG4gICAgICAgICAgICBpZiAodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFzayA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGFzayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIklEIGRlIHTDomNoZSBpbnZhbGlkZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFqb3V0ZSBsZXMgw6l2w6huZW1lbnRzIGQnb3V2ZXJ0dXJlIGRlIHBvcHVwIMOgIHVuZSB0w6JjaGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhc2tFbGVtZW50IEwnw6lsw6ltZW50IHJlcHLDqXNlbnRhbnQgbGEgdMOiY2hlIG/DuSBham91dGVyIGwnw6l2w6huZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gdGFza0RhdGEgICAgTGVzIGRvbm7DqWVzIGRlIGxhIHTDomNoZSBzb3VzIGZvcm1lIGxhIGRlIEthbmJhblRhc2suXHJcbiAgICAgKi9cclxuICAgIEthbmJhbi5wcm90b3R5cGUuYmluZFRhc2tFdmVudHMgPSBmdW5jdGlvbiAodGFza0VsZW1lbnQsIHRhc2tEYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0YXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gTGVzIGZsw6hjaGVzIGRlIGNoYW5nZW1lbnQgZGUgY29sb25uZSBzb250IGRlcyBsaWVucywgb24gw6l2aXRlIGRvbmNcclxuICAgICAgICAgICAgLy8gZCdvdXZyaXIgbGEgcG9wdXAgbG9ycyBkJ3VuIGNsaWMgc3VyIGNlbGxlcy1jaVxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLm9wZW5UYXNrUG9wdXAodGFza0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmFmcmFpY2hpdCBsZXMgZG9ubsOpZXMgZGUgbGEgcG9wdXAgY291cmFudGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhc2sgTGEgdMOiY2hlIGFzc29jacOpZSDDoCBsYSBwb3B1cC5cclxuICAgICAqL1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5yZWZyZXNoUG9wdXAgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHZhciBwb3B1cFRpdGxlID0gdGhpcy5fY3VycmVudFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcclxuICAgICAgICB2YXIgYWZmZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgYWZmZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlTDomNoZSBhZmZlY3TDqWUgw6AgOiBcIiArIHRhc2suYXNzaWduVXNlcm5hbWU7XHJcbiAgICAgICAgcG9wdXBUaXRsZS5hZnRlcihhZmZlY3RUaXRsZSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1hY3Rpb25zXCIpLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVHJhaXRlIGxhIHLDqXBvbnNlIGQnYWZmZWN0YXRpb24gLyBhY2NlcHRhdGlvbiBkJ3VuZSB0w6JjaGUgOlxyXG4gICAgICogLSBSYWZyYWljaGl0IGwnb2JqZXRcclxuICAgICAqIC0gUmFmcmFpY2hpdCBsYSBwb3B1cFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YXNrSWQgTCdJRCBkZSBsYSB0w6JjaGUgYWZmZWN0w6llIC8gYWNjZXB0w6llLlxyXG4gICAgICogQHBhcmFtIHJlcyAgICBMYSByw6lwb25zZSBBSkFYLlxyXG4gICAgICovXHJcbiAgICBLYW5iYW4ucHJvdG90eXBlLmhhbmRsZUFmZmVjdFJlc3BvbnNlID0gZnVuY3Rpb24gKHRhc2tJZCwgcmVzKSB7XHJcbiAgICAgICAgLy8gUmVmcmVzaCB0aGUga2FuYmFuIG9iamVjdFxyXG4gICAgICAgIHZhciB0YXNrID0gdGhpcy5nZXRUYXNrQnlJZCh0YXNrSWQpO1xyXG4gICAgICAgIHRhc2suYXNzaWduVXNlcm5hbWUgPSByZXMubmFtZTtcclxuICAgICAgICAvLyBSZWZyZXNoIHRoZSBwb3B1cFxyXG4gICAgICAgIHRoaXMucmVmcmVzaFBvcHVwKHRhc2spO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVycyAvIFNldHRlcnNcclxuICAgICAqL1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XHJcbiAgICB9O1xyXG4gICAgS2FuYmFuLnByb3RvdHlwZS5nZXRDb2x1bW5zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xyXG4gICAgfTtcclxuICAgIEthbmJhbi5wcm90b3R5cGUuZ2V0TWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVtYmVycztcclxuICAgIH07XHJcbiAgICByZXR1cm4gS2FuYmFuO1xyXG59KCkpO1xyXG5leHBvcnRzLkthbmJhbiA9IEthbmJhbjtcclxuIiwiLyoqXHJcbiAqIEFkZHMgYSBuZXcgbGkgZWxlbWVudCB0byB0aGUgdWwgZWxlbWVudCBvZiB0aGUgZm9ybSBmb3IgZHluYW1pYyBjb2x1bW5zIGFkZGl0aW9uLlxyXG4gKiBJdCBhbHNvIGFkZHMgYSBidXR0b24gdG8gZGVsZXRlIHRoaXMgbmV3IGxpIGVsZW1lbnQgb24gYSBjbGljay5cclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGFkZElucHV0VG9Gb3JtKCkge1xyXG4gICAgdmFyIGNvbGxlY3Rpb25Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC5jb2x1bW5zJyk7XHJcbiAgICB2YXIgbGFzdENoaWxkID0gY29sbGVjdGlvbkhvbGRlci5xdWVyeVNlbGVjdG9yKCcuanMtbGFzdC1jb2x1bW4nKTtcclxuICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xyXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImpzLWlucHV0LWNvbnRhaW5lclwiKTtcclxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGRlZC1jb2x1bW5cIik7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcclxuICAgIC8vIENvcGllcyB0aGUgSFRNTCBjb250ZW50IG9mIHRoZSB1bCBlbGVtZW50LCByZXBsYWNpbmcgX19uYW1lX19cclxuICAgIC8vIGJ5IHRoZSBkYXRhc2V0IGluZGV4IGZpZWxkXHJcbiAgICBpbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBjb2xsZWN0aW9uSG9sZGVyXHJcbiAgICAgICAgLmRhdGFzZXRcclxuICAgICAgICAucHJvdG90eXBlXHJcbiAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2csIGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5pbmRleCk7XHJcbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGlucHV0IGNoaWxkIG9mIHRoZSBsaSBlbGVtZW50IGNyZWF0ZWRcclxuICAgIHZhciBpbnB1dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOb3V2ZWxsZSBjb2xvbm5lJyk7XHJcbiAgICBjb2xsZWN0aW9uSG9sZGVyLmluc2VydEJlZm9yZShpdGVtLCBsYXN0Q2hpbGQpO1xyXG4gICAgY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LmluZGV4ICs9IDE7XHJcbiAgICBhZGRJbnB1dERlbGV0ZUJ0bihpdGVtKTtcclxufVxyXG4vKipcclxuICogSW5zZXJ0cyBhIGJ1dHRvbiBhcyBhIGNoaWxkIG9mIGl0ZW0uXHJcbiAqIEl0IGlzIHVzZWQgdG8gZGVsZXRlIGl0cyBwYXJlbnQgKGl0ZW0pIG9uIGNsaWNrLlxyXG4gKlxyXG4gKiBAcGFyYW0gaXRlbSBUaGUgcGFyZW50IG9mIHRoZSBidXR0b24gdG8gaW5zZXJ0LlxyXG4gKi9cclxudmFyIGFkZElucHV0RGVsZXRlQnRuID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHZhciByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNvbHVtblwiKTtcclxuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1N1cHByaW1lcicpO1xyXG4gICAgcmVtb3ZlQnRuLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWlucHV0LWNvbnRhaW5lclwiKS5hcHBlbmQocmVtb3ZlQnRuKTtcclxuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxufTtcclxuLy8gQWRkaW5nIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgY29sdW1uIGFkZGluZyBidXR0b25cclxudmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hZGQtaXRlbScpO1xyXG5pZiAoYnRuICE9IG51bGwpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkSW5wdXRUb0Zvcm0pO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgc29ydEhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi9zb3J0SGFuZGxlclwiKTtcclxudmFyIHNvcnRfb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zb3J0LW9wdGlvbnMnKTtcclxuLy8gUmV0cmlldmluZyBhbGwga2FuYmFucyBvd25lZCBieSB0aGUgdXNlclxyXG52YXIgdXNlcl9rYW5iYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1rYW5iYW5zLWNyZWF0ZWQgLmthbmJhblwiKTtcclxudmFyIHVzZXJfa2FuYmFuc19hcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh1c2VyX2thbmJhbnMsIDApO1xyXG4vLyBSZXRyaWV2aW5nIGFsbCBrYW5iYW5zIHdoZXJlIHRoZSB1c2VyIGlzIGludml0ZWRcclxudmFyIGludml0ZWRfa2FuYmFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMta2FuYmFucy1pbnZpdGVkIC5rYW5iYW5cIik7XHJcbnZhciBpbnZpdGVkX2thbmJhbnNfYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaW52aXRlZF9rYW5iYW5zLCAwKTtcclxuLy8gQmluZGluZyBldmVudHMgZm9yIGV2ZXJ5IHNvcnRpbmcgYnV0dG9uXHJcbmlmIChzb3J0X29wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKHVzZXJfa2FuYmFucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgKDAsIHNvcnRIYW5kbGVyXzEuYmluZF9ldmVudHMpKHNvcnRfb3B0aW9uc1swXSwgdXNlcl9rYW5iYW5zWzBdLnBhcmVudEVsZW1lbnQsIHVzZXJfa2FuYmFuc19hcnIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGludml0ZWRfa2FuYmFucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgKDAsIHNvcnRIYW5kbGVyXzEuYmluZF9ldmVudHMpKHNvcnRfb3B0aW9uc1sxXSwgaW52aXRlZF9rYW5iYW5zWzBdLnBhcmVudEVsZW1lbnQsIGludml0ZWRfa2FuYmFuc19hcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgS2FuYmFuXzEgPSByZXF1aXJlKFwiLi9LYW5iYW5cIik7XHJcbi8vIEluaXRpYWxpc2UgdW4gb2JqZWN0IEthbmJhbiBxdWkgcGVybWV0dHJhIGxhIGdlc3Rpb24gZGUgY2VsdWktY2kuXHJcbkthbmJhbl8xLkthbmJhbi5pbml0RnJvbVRlbXBsYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZS5rYW5iYW5cIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtbWVtYmVycyBsaVwiKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLmNyZWF0ZVRhc2tQb3B1cCA9IGV4cG9ydHMuY3JlYXRlTmV3VGFza1BvcHVwID0gdm9pZCAwO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHBvcHVwIGNvbnRhaW5lciB3aXRoIHRoZSBjb250ZW50IDxjaGlsZD4sXHJcbiAqIGlnbm9yaW5nIHRoZSBwYWdlIGZsb3cuXHJcbiAqXHJcbiAqIEBwYXJhbSAgIGNoaWxkIFRoZSBjb250ZW50IG9mIHRoZSBwb3B1cC5cclxuICogQHJldHVybnMgICAgICAgVGhlIHBvcHVwIGNyZWF0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQb3B1cChjaGlsZCwgY2xvc2VNZXNzYWdlKSB7XHJcbiAgICBpZiAoY2xvc2VNZXNzYWdlID09PSB2b2lkIDApIHsgY2xvc2VNZXNzYWdlID0gXCJBbm51bGVyXCI7IH1cclxuICAgIHZhciBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImpzLXBvcHVwLWJhY2tncm91bmRcIik7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1iYWNrZ3JvdW5kXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcclxuICAgIHZhciByZWxhdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVsYXRpdmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAtcmVsYXRpdmUnKTtcclxuICAgIHBvcHVwLmFwcGVuZENoaWxkKHJlbGF0aXZlQ29udGFpbmVyKTtcclxuICAgIHZhciBleGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBleGl0LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWV4aXQnKTtcclxuICAgIGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcG9wdXAucmVtb3ZlKCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGV4aXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2xvc2VNZXNzYWdlKTtcclxuICAgIGV4aXQuYXBwZW5kKGV4aXRUZXh0KTtcclxuICAgIHJlbGF0aXZlQ29udGFpbmVyLmFwcGVuZChjaGlsZCk7XHJcbiAgICByZWxhdGl2ZUNvbnRhaW5lci5hcHBlbmQoZXhpdCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3B1cCk7XHJcbiAgICByZXR1cm4gcG9wdXA7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gaW5wdXQgY29udGFpbmVyIG5hbWVkIDxuYW1lPiBmb3IgYSA8dHlwZT4gaW5wdXQgd2l0aFxyXG4gKiB0aGUgbGFiZWwgPGxhYmVsQ29udGVudD4uXHJcbiAqXHJcbiAqIEBwYXJhbSB0eXBlICAgICAgICAgVHlwZSBvZiBpbnB1dC5cclxuICogQHBhcmFtIGxhYmVsQ29udGVudCBUZXh0IGNvbnRlbnQgb2YgdGhlIGlucHV0IGxhYmVsLlxyXG4gKiBAcGFyYW0gbmFtZSAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSBpbnB1dC5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIGxhYmVsQ29udGVudCwgbmFtZSkge1xyXG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1iaWdnZXItY29udGFpbmVyJyk7XHJcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQubmFtZSA9IG5hbWU7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuICAgIGlmICh0eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gMztcclxuICAgICAgICBpbnB1dC5tYXhMZW5ndGggPSAyNTU7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxDb250ZW50O1xyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgZm9ybSBmb3IgdGFzayBjcmVhdGlvbiA6IHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCB0byB0aGUgVVJMXHJcbiAqIDxhY3Rpb24+LlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aW9uIHRoZSBVUkwgdGhlIGZvcm0gd2lsbCBiZSBzdWJtaXR0ZWQgdG8uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRm9ybShhY3Rpb24pIHtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcclxuICAgIGZvcm0uc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgIHZhciBuYW1lSW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dCgndGV4dCcsICdOb20nLCAnbmFtZScpO1xyXG4gICAgdmFyIGRlc2NJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY0lucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhLWNvbnRhaW5lcicpO1xyXG4gICAgZGVzY0lucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudC1iaWdnZXItY29udGFpbmVyJyk7XHJcbiAgICB2YXIgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NJbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBkZXNjSW5wdXQubWluTGVuZ3RoID0gMztcclxuICAgIGRlc2NJbnB1dC5tYXhMZW5ndGggPSA1MDA7XHJcbiAgICBkZXNjSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY0lucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XHJcbiAgICB2YXIgZGF0ZUlucHV0Q29udGFpbmVyID0gY3JlYXRlSW5wdXQoJ2RhdGUnLCAnRGF0ZSBsaW1pdGUgKG9wdGlvbm5lbGxlKScsICdsaW1pdERhdGUnKTtcclxuICAgIHZhciBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBam91dGVyIHVuZSB0w6JjaGUnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXRDb250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXRDb250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXRDb250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuLyoqXHJcbiAqIENvbnZlcnRzIE1hcmtkb3duIHRleHQgdG8gSFRNTCB0ZXh0LlxyXG4gKiBAcGFyYW0gbWRUZXh0IFRoZSBtYXJrZG93biB0ZXh0IHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zICAgICAgVGhlIGNvbnZlcnRlZCB0byBIVE1MIHRleHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRNYXJrZG93bihtZFRleHQpIHtcclxuICAgIHZhciBodG1sVGV4dCA9IG1kVGV4dFxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFwqXFwqKSguKj8pKFxcKlxcKikvZ2ltLCAnPHNwYW4gY2xhc3M9XCJib2xkXCI+JDI8L3NwYW4+JykgLy8gYm9sZFxyXG4gICAgICAgIC5yZXBsYWNlKC8oXFwqKSguKj8pKFxcKikvZ2ltLCAnPHNwYW4gY2xhc3M9XCJpdGFsaWNcIj4kMjwvc3Bhbj4nKSAvLyBpdGFsaWNcclxuICAgICAgICAucmVwbGFjZSgvKF9fKSguKj8pKF9fKS9naW0sICc8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPiQyPC9zcGFuPicpIC8vIHVuZGVybGluZWRcclxuICAgICAgICAucmVwbGFjZSgvKH5+KSguKj8pKH5+KS9naW0sICc8c3BhbiBjbGFzcz1cImRlbGV0ZWRcIj4kMjwvc3Bhbj4nKTsgLy8gZGVsZXRlZFxyXG4gICAgcmV0dXJuIGh0bWxUZXh0LnRyaW0oKTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBvcHVwIGZvciB0YXNrIGNyZWF0aW9uIHVuZGVyIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGlkXHJcbiAqIDxpZD4uXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIGNvbHVtbiB3ZSBjcmVhdGUgdGhlIHRhc2sgdW5kZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrUG9wdXAoaWQpIHtcclxuICAgIHZhciBmb3JtID0gY3JlYXRlTmV3VGFza0Zvcm0oJy90YXNrL2NyZWF0ZV91bmRlci8nICsgaWQpO1xyXG4gICAgY3JlYXRlUG9wdXAoZm9ybSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVOZXdUYXNrUG9wdXAgPSBjcmVhdGVOZXdUYXNrUG9wdXA7XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwb3B1cCBmb3IgdGFzayBkaXNwbGF5LlxyXG4gKlxyXG4gKiBAcGFyYW0gICB0YXNrIFRoZSBrYW5iYW4gdGFzayB0byBkaXNwbGF5LlxyXG4gKiBAcmV0dXJucyAgICAgIFRoZSBwb3B1cCBjb250YWluZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUYXNrUG9wdXAodGFzaykge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stcG9wdXBcIik7XHJcbiAgICAvLyBUYXNrIGRhdGFcclxuICAgIHZhciBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcclxuICAgIGlmICh0YXNrLmxpbWl0RGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbWl0ZS1kYXRlXCIpO1xyXG4gICAgICAgIGRhdGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJEYXRlIGxpbWl0ZSA6IFwiICsgdGFzay5saW1pdERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0YXNrLmFzc2lnblVzZXJuYW1lICE9IG51bGwpIHtcclxuICAgICAgICB2YXIgdXNlcm5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIHVzZXJuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IFwiVMOiY2hlIGFzc2lnbsOpZSDDoCA6IFwiICsgdGFzay5hc3NpZ25Vc2VybmFtZTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodXNlcm5hbWVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHZhciBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBmb3JtYXRNYXJrZG93bih0YXNrLmRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xyXG4gICAgLy8gVGFzayBhY3Rpb25zXHJcbiAgICBpZiAodGFzay5hc3NpZ25Vc2VybmFtZSA9PT0gbnVsbFxyXG4gICAgICAgICYmIHRhc2suY29sdW1uLm9mZnNldCA8IHRhc2suY29sdW1uLmthbmJhbi5nZXRDb2x1bW5zKCkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHZhciB0YXNrQWN0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tBY3Rpb25zRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1hY3Rpb25zXCIpO1xyXG4gICAgICAgIHZhciB0YXNrQWNjZXB0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0YXNrQWNjZXB0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJqcy1hY2NlcHRcIik7XHJcbiAgICAgICAgdGFza0FjY2VwdEJ1dHRvbi5pbm5lclRleHQgPSBcIkFjY2VwdGVyXCI7XHJcbiAgICAgICAgdGFza0FjY2VwdEJ1dHRvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB0YXNrQWN0aW9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0FjY2VwdEJ1dHRvbik7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyB0aGUga2FuYmFuJ3Mgb3duZXJcclxuICAgICAgICB2YXIgb3duZXIgPSB0YXNrLmNvbHVtbi5rYW5iYW4uZ2V0TWVtYmVycygpLmZpbHRlcihmdW5jdGlvbiAobWVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXIuaXNPd25lcjtcclxuICAgICAgICB9KVswXTtcclxuICAgICAgICBpZiAob3duZXIuaXNDdXJyZW50ICYmIHRhc2suY29sdW1uLmthbmJhbi5nZXRNZW1iZXJzKCkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgYWZmZWN0Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGFmZmVjdENvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFmZmVjdC1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBhZmZlY3RTZWxlY3RFbGVtZW50XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICBhZmZlY3RTZWxlY3RFbGVtZW50XzEubmFtZSA9IFwidXNlclwiO1xyXG4gICAgICAgICAgICB0YXNrLmNvbHVtbi5rYW5iYW4uZ2V0TWVtYmVycygpLmZvckVhY2goZnVuY3Rpb24gKG1lbWJlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbWJlci5pc093bmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG1lbWJlci5pZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBtZW1iZXIudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICBhZmZlY3RTZWxlY3RFbGVtZW50XzEuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZmZlY3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGFmZmVjdFNlbGVjdEVsZW1lbnRfMSk7XHJcbiAgICAgICAgICAgIHZhciBhZmZlY3RCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYWZmZWN0QnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwianMtYWZmZWN0XCIpO1xyXG4gICAgICAgICAgICBhZmZlY3RCdXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhZmZlY3QtYnRuXCIpO1xyXG4gICAgICAgICAgICBhZmZlY3RCdXR0b25FbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhZmZlY3RCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiQWZmZWN0ZXJcIjtcclxuICAgICAgICAgICAgYWZmZWN0Q29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChhZmZlY3RCdXR0b25FbGVtZW50KTtcclxuICAgICAgICAgICAgdGFza0FjdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKGFmZmVjdENvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0FjdGlvbnNFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVQb3B1cChjb250YWluZXIsIFwiRmVybWVyXCIpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlVGFza1BvcHVwID0gY3JlYXRlVGFza1BvcHVwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5iaW5kX2V2ZW50cyA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIFNvcnRzIEhUTUwgZGl2IGVsZW1lbnRzIGluIGFzY2VuZGluZyBvcmRlciB1c2luZyBhIHN0cmluZyBrZXlcclxuICogZnJvbSB0aGUgZGl2IGNoaWxkcy5cclxuICpcclxuICogQHBhcmFtIGRpdjEgRmlyc3QgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0gZGl2MiBTZWNvbmQgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJucyBBIG5lZ2F0aXZlIHZhbHVlIGlmIHRoZSBmaXJzdCBrZXkgaXMgbG93ZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiAgICAgICAgICBhIHBvc2l0aXZlIG9uZSBpZiBpdCBpcyBoaWdoZXIgdGhhbiB0aGUgc2Vjb25kLCBvclxyXG4gKiAgICAgICAgICAwIGlmIHRoZXkgYXJlIGVxdWFscy5cclxuICovXHJcbnZhciBhbHBoYV9zb3J0ID0gZnVuY3Rpb24gKGRpdjEsIGRpdjIpIHtcclxuICAgIHZhciBuYW1lMSA9IGRpdjEucXVlcnlTZWxlY3RvcihcIi5qcy1hbHBoYS1rZXlcIikudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgbmFtZTIgPSBkaXYyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWxwaGEta2V5XCIpLnRleHRDb250ZW50O1xyXG4gICAgcmV0dXJuIG5hbWUxLmxvY2FsZUNvbXBhcmUobmFtZTIpO1xyXG59O1xyXG4vKipcclxuICogU29ydHMgSFRNTCBkaXYgZWxlbWVudHMgaW4gZGVzY2VuZGluZyBvcmRlciB1c2luZyBhIHN0cmluZyBrZXlcclxuICogZnJvbSB0aGUgZGl2IGNoaWxkcy5cclxuICpcclxuICogQHBhcmFtIGRpdjEgRmlyc3QgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0gZGl2MiBTZWNvbmQgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJucyBBIHBvc2l0aXZlIHZhbHVlIGlmIHRoZSBmaXJzdCBrZXkgaXMgbG93ZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiAgICAgICAgICBhIG5lZ2F0aXZlIG9uZSBpZiBpdCBpcyBoaWdoZXIgdGhhbiB0aGUgc2Vjb25kLCBvclxyXG4gKiAgICAgICAgICAwIGlmIHRoZXkgYXJlIGVxdWFscy5cclxuICovXHJcbnZhciBhbHBoYV9zb3J0X2RlYyA9IGZ1bmN0aW9uIChkaXYxLCBkaXYyKSB7XHJcbiAgICB2YXIgbmFtZTEgPSBkaXYxLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWxwaGEtZGVjLWtleVwiKS50ZXh0Q29udGVudDtcclxuICAgIHZhciBuYW1lMiA9IGRpdjIucXVlcnlTZWxlY3RvcihcIi5qcy1hbHBoYS1kZWMta2V5XCIpLnRleHRDb250ZW50O1xyXG4gICAgcmV0dXJuIG5hbWUyLmxvY2FsZUNvbXBhcmUobmFtZTEpO1xyXG59O1xyXG4vKipcclxuICogU29ydHMgSFRNTCBkaXYgZWxlbWVudHMgaW4gYXNjZW5kaW5nIG9yZGVyIHVzaW5nIGEgZGF0ZSBrZXlcclxuICogZnJvbSB0aGUgZGl2IGNoaWxkcy5cclxuICpcclxuICogQHBhcmFtIGRpdjEgRmlyc3QgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0gZGl2MiBTZWNvbmQgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJucyBBIG5lZ2F0aXZlIHZhbHVlIGlmIHRoZSBmaXJzdCBrZXkgaXMgbG93ZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiAgICAgICAgICBhIHBvc2l0aXZlIG9uZSBpZiBpdCBpcyBoaWdoZXIgdGhhbiB0aGUgc2Vjb25kLCBvclxyXG4gKiAgICAgICAgICAwIGlmIHRoZXkgYXJlIGVxdWFscy5cclxuICovXHJcbnZhciBkYXRlX3NvcnQgPSBmdW5jdGlvbiAoZGl2MSwgZGl2Mikge1xyXG4gICAgdmFyIGRhdGVFbGVtMSA9IGRpdjEucXVlcnlTZWxlY3RvcihcIi5qcy1kYXRlLWtleVwiKTtcclxuICAgIHZhciBkYXRlRWxlbTIgPSBkaXYyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF0ZS1rZXlcIik7XHJcbiAgICBpZiAoZGF0ZUVsZW0xID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlRWxlbTIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHZhciBkYXRlUGFydHMxID0gZGF0ZUVsZW0xLnRleHRDb250ZW50LnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBkYXRlUGFydHMyID0gZGF0ZUVsZW0yLnRleHRDb250ZW50LnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBkYXRlMSA9IG5ldyBEYXRlKCtkYXRlUGFydHMxWzJdLCArZGF0ZVBhcnRzMVsxXSAtIDEsICtkYXRlUGFydHMxWzBdKTtcclxuICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKCtkYXRlUGFydHMyWzJdLCArZGF0ZVBhcnRzMlsxXSAtIDEsICtkYXRlUGFydHMyWzBdKTtcclxuICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XHJcbn07XHJcbi8qKlxyXG4gKiBTb3J0cyBIVE1MIGRpdiBlbGVtZW50cyBpbiBkZXNjZW5kaW5nIG9yZGVyIHVzaW5nIGEgZGF0ZSBrZXlcclxuICogZnJvbSB0aGUgZGl2IGNoaWxkcy5cclxuICpcclxuICogQHBhcmFtIGRpdjEgRmlyc3QgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0gZGl2MiBTZWNvbmQgSFRNTCBkaXYgZWxlbWVudCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJucyBBIHBvc2l0aXZlIHZhbHVlIGlmIHRoZSBmaXJzdCBrZXkgaXMgbG93ZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiAgICAgICAgICBhIG5lZ2F0aXZlIG9uZSBpZiBpdCBpcyBoaWdoZXIgdGhhbiB0aGUgc2Vjb25kLCBvclxyXG4gKiAgICAgICAgICAwIGlmIHRoZXkgYXJlIGVxdWFscy5cclxuICovXHJcbnZhciBkYXRlX3NvcnRfZGVjID0gZnVuY3Rpb24gKGRpdjEsIGRpdjIpIHtcclxuICAgIHZhciBkYXRlRWxlbTEgPSBkaXYxLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGF0ZS1kZWMta2V5XCIpO1xyXG4gICAgdmFyIGRhdGVFbGVtMiA9IGRpdjIucXVlcnlTZWxlY3RvcihcIi5qcy1kYXRlLWRlYy1rZXlcIik7XHJcbiAgICBpZiAoZGF0ZUVsZW0xID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlRWxlbTIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIHZhciBkYXRlUGFydHMxID0gZGF0ZUVsZW0xLnRleHRDb250ZW50LnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBkYXRlUGFydHMyID0gZGF0ZUVsZW0yLnRleHRDb250ZW50LnNwbGl0KFwiL1wiKTtcclxuICAgIHZhciBkYXRlMSA9IG5ldyBEYXRlKCtkYXRlUGFydHMxWzJdLCArZGF0ZVBhcnRzMVsxXSAtIDEsICtkYXRlUGFydHMxWzBdKTtcclxuICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKCtkYXRlUGFydHMyWzJdLCArZGF0ZVBhcnRzMlsxXSAtIDEsICtkYXRlUGFydHMyWzBdKTtcclxuICAgIHJldHVybiBkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCk7XHJcbn07XHJcbi8qKlxyXG4gKiBIaWRlIGFsbCB0YXNrcyB0aGF0IGRvbid0IGJlbG9uZyB0byB0aGUga2FuYmFuIHRoYXQgaGFzIHRoZSBpZCBrYW5iYW5JZC5cclxuICpcclxuICogQHBhcmFtIGVsZW1lbnRzIFRoZSB0YXNrcy5cclxuICogQHBhcmFtIGthbmJhbklkIFRoZSBrYW5iYW4gaWQuXHJcbiAqL1xyXG52YXIga2FuYmFuX3NvcnQgPSBmdW5jdGlvbiAoZWxlbWVudHMsIGthbmJhbklkKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCtlbGVtZW50LmRhdGFzZXQua2FuYmFuSWQgIT09IGthbmJhbklkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuLyoqXHJcbiAqIFNob3dzIGFsbCB0aGUgdGFza3MuXHJcbiAqXHJcbiAqIEBwYXJhbSBlbGVtZW50cyBUaGUgdGFza3MuXHJcbiAqL1xyXG52YXIga2FuYmFuX3Vuc29ydCA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG59O1xyXG4vKipcclxuICogRGVsZXRlcyB0aGUgY29udGVudCBvZiA8cGFyZW50PiBhbmQgcmVwbGFjZXMgaXQgd2l0aCB0aGUgZWxlbWVudHMgb2ZcclxuICogPHNvcnRlZEVsZW1lbnRzPi5cclxuICpcclxuICogQHBhcmFtIHBhcmVudCBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSBmdW5jdGlvbiBhcHBlbmRzIHRoZSBlbGVtZW50cy5cclxuICogQHBhcmFtIHNvcnRlZEVsZW1lbnRzIFRoZSBlbGVtZW50cyB0byBhcHBlbmQgaW4gdGhlIGNvbnRhaW5lci5cclxuICovXHJcbnZhciByZWZyZXNoID0gZnVuY3Rpb24gKHBhcmVudCwgc29ydGVkRWxlbWVudHMpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0ZWRFbGVtZW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChzb3J0ZWRFbGVtZW50c1tpXSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBCaW5kcyB0aGUgYXBwcm9wcmlhdGUgc29ydGluZyBtZXRob2QgdG8gZXZlcnkgc29ydCBidXR0b24gZm91bmQuXHJcbiAqXHJcbiAqIEBwYXJhbSBidXR0b25zUGFyZW50IEJ1dHRvbnMgY29udGFpbmVyLlxyXG4gKiBAcGFyYW0gZWxlbWVudHNQYXJlbnQgQ29udGFpbmVyIG9mIGVsZW1lbnRzIHRvIHNvcnQuXHJcbiAqIEBwYXJhbSB1bnNvcnRlZEVsZW1lbnRzIEVsZW1lbnRzIHRvIHNvcnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5kX2V2ZW50cyhidXR0b25zUGFyZW50LCBlbGVtZW50c1BhcmVudCwgZWxlbWVudHMpIHtcclxuICAgIHZhciBhbHBoYSA9IGJ1dHRvbnNQYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLWFscGhhJyk7XHJcbiAgICB2YXIgYWxwaGFfZGVjID0gYnV0dG9uc1BhcmVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWxwaGEtZGVjJyk7XHJcbiAgICB2YXIgZGF0ZSA9IGJ1dHRvbnNQYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLWRhdGUnKTtcclxuICAgIHZhciBkYXRlX2RlYyA9IGJ1dHRvbnNQYXJlbnQucXVlcnlTZWxlY3RvcignLmpzLWRhdGUtZGVjJyk7XHJcbiAgICB2YXIga2FuYmFuID0gYnV0dG9uc1BhcmVudC5xdWVyeVNlbGVjdG9yKCcua2FuYmFuLXNvcnQnKTtcclxuICAgIGlmIChhbHBoYSAhPSBudWxsKSB7XHJcbiAgICAgICAgYWxwaGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnNvcnQoYWxwaGFfc29ydCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goZWxlbWVudHNQYXJlbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChhbHBoYV9kZWMgIT0gbnVsbCkge1xyXG4gICAgICAgIGFscGhhX2RlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuc29ydChhbHBoYV9zb3J0X2RlYyk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goZWxlbWVudHNQYXJlbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlICE9IG51bGwpIHtcclxuICAgICAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5zb3J0KGRhdGVfc29ydCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goZWxlbWVudHNQYXJlbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChkYXRlX2RlYyAhPSBudWxsKSB7XHJcbiAgICAgICAgZGF0ZV9kZWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnNvcnQoZGF0ZV9zb3J0X2RlYyk7XHJcbiAgICAgICAgICAgIHJlZnJlc2goZWxlbWVudHNQYXJlbnQsIGVsZW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChrYW5iYW4gIT0gbnVsbCAmJiBlbGVtZW50cyBpbnN0YW5jZW9mIChBcnJheSkpIHtcclxuICAgICAgICBrYW5iYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIga2FuYmFuSWQgPSArZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChrYW5iYW5JZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGthbmJhbl91bnNvcnQoZWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGthbmJhbl9zb3J0KGVsZW1lbnRzLCBrYW5iYW5JZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5iaW5kX2V2ZW50cyA9IGJpbmRfZXZlbnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHBvcHVwSGFuZGxlcl8xID0gcmVxdWlyZShcIi4uL3BvcHVwSGFuZGxlclwiKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10YXNrIGJ1dHRvbicpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICgwLCBwb3B1cEhhbmRsZXJfMS5jcmVhdGVOZXdUYXNrUG9wdXApKCtidXR0b24uZGF0YXNldC5jb2xJZCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLnNlbmRUYXNrQWZmZWN0UmVxdWVzdCA9IHZvaWQgMDtcclxudmFyIGFqYXhfMSA9IHJlcXVpcmUoXCIuLi9hamF4XCIpO1xyXG4vLyBDcmVhdGlvbiBvZiBhIFhNTCBIVFRQIFJlcXVlc3RcclxudmFyIHhociA9ICgwLCBhamF4XzEuY3JlYXRlWGhyT2JqZWN0KSgpO1xyXG4vKipcclxuICogSGFuZGxlcyB0aGUgcmVzcG9uc2UgcmVjZWl2ZXMgYWZ0ZXIgc2VuZGluZyBhbiBhc3luY2hyb25vdXMgcmVxdWVzdCB0byB0aGVcclxuICogVVJMIC90YXNrL1thY2NlcHQgfCBhZmZlY3RdLlxyXG4gKiBJZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyAyMDAsIHVwZGF0ZXMgdGhlIHRhc2sgYWZmZWN0YXRpb24gcGFyYWdyYXBoIGFuZFxyXG4gKiBkZWxldGVzIHRoZSBIVE1MIGRpdiBlbGVtZW50IHRoYXQgaGFzIHRoZSBjbGFzcyBcImFmZmVjdC1jb250YWluZXJcIiBhbmQgYVxyXG4gKiBkYXRhc2V0IHRhc2staWQgZmllbGQgd2l0aCB0aGUgZm9sbG93aW5nIHN5bnRheCA6XHJcbiAqXHJcbiAqIGRhdGEtdGFzay1pZD1cIjx0YXNrSWQ+XCJcclxuICpcclxuICogT3RoZXJ3aXNlLCBpZiBhbiBlcnJvciBvY2N1cnMsIGl0IHdpbGwgZGlzcGxheSB0aGUgZXJyb3IgbmV4dCB0byB0aGVcclxuICogSFRNTCBkaXYgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHRhc2tJZCBJZGVudGlmaWVyIG9mIHRoZSB0YXNrIGhhbmRsZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZSh0YXNrSWQsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygrdGFza0lkLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWlsdXJlLWZsYXNoJyk7XHJcbiAgICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhaWx1cmUtZmxhc2gnKTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtRXJyb3ItTWVzc2FnZScpKTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmthbmJhbi10aXRsZVwiKS5hZnRlcihkaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogU2VuZHMgYW4gYXN5bmNocm9ub3VzIHJlcXVlc3QgdG8gdGhlIFVSTCAvdGFzay88YWN0aW9uPlxyXG4gKiB3aXRoIHRoZSBpZCBvZiB0aGUgdGFzayBhZmZlY3RlZC4gSWYgdGhlIHRhc2sgaXMgYWZmZWN0ZWRcclxuICogYnkgdGhlIG93bmVyIHRvIGFub3RoZXIgdXNlciwgdGhlIHVzZXIncyBpZCBpcyBhbHNvIHNlbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSBldmVudCAgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBjYWxsIHRvIHRoZSBmdW5jdGlvbi5cclxuICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIHRvIHBlcmZvcm0gKFwiYWNjZXB0XCIgfCBcImFmZmVjdFwiKS5cclxuICovXHJcbmZ1bmN0aW9uIHNlbmRUYXNrQWZmZWN0UmVxdWVzdChldmVudCwgYWN0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgLy8gVHlwZSBzcGVjaWZpY2F0aW9uIHJlcXVpcmVkIGFzIHRoZSBFbGVtZW50IHR5cGUgZG9lcyBub3QgaGF2ZSBhIGRhdGFzZXQgcHJvcGVydHkuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIHZhciB0YXNrSWQgPSB0YXJnZXQuZGF0YXNldC50YXNrSWQ7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGhhbmRsZVJlc3BvbnNlKHRhc2tJZCwgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIi90YXNrL1wiICsgYWN0aW9uLCB0cnVlKTtcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XHJcbiAgICB2YXIgZGF0YSA9IHsgdGFza0lkOiB0YXNrSWQgfTtcclxuICAgIC8vIEFkZCB0aGUgdXNlcklkIGlmIHJlcXVpcmVkIChmb3IgdGFzayBhZmZlY3RhdGlvbilcclxuICAgIGlmIChhY3Rpb24gPT09ICdhZmZlY3QnKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdCA9IHRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGRhdGFbJ3VzZXJJZCddID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcbmV4cG9ydHMuc2VuZFRhc2tBZmZlY3RSZXF1ZXN0ID0gc2VuZFRhc2tBZmZlY3RSZXF1ZXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHNvcnRIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vc29ydEhhbmRsZXJcIik7XHJcbnZhciBzb3J0X29wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc29ydC1vcHRpb25zJyk7XHJcbi8vIFJldHJpZXZpbmcgYWxsIHRhc2tzXHJcbnZhciB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza3MgLnRhc2tcIik7XHJcbnZhciB0YXNrc19hcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXNrcywgMCk7XHJcbi8vIEJpbmRpbmcgZXZlbnRzIGZvciBldmVyeSBzb3J0aW5nIGJ1dHRvblxyXG5pZiAoc29ydF9vcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGlmICh0YXNrc19hcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICgwLCBzb3J0SGFuZGxlcl8xLmJpbmRfZXZlbnRzKShzb3J0X29wdGlvbnNbMF0sIHRhc2tzX2FyclswXS5wYXJlbnRFbGVtZW50LCB0YXNrc19hcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImNyZWF0ZVhock9iamVjdCIsIndpbmRvdyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsIm5hbWVzIiwiaSIsImUiLCJhamF4XzEiLCJpbnZpdGF0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInhociIsImhhbmRsZVJlc3BvbnNlIiwiaWQiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImVycm9yIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiYXBwZW5kQ2hpbGQiLCJhZnRlciIsInNlbmRSZXF1ZXN0IiwiZXZlbnQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW52SWQiLCJkYXRhc2V0IiwiaW52aXRhdGlvbklkIiwib25yZWFkeXN0YXRlY2hhbmdlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJkYXRhIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJhY2NlcHQiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiS2FuYmFuIiwiS2FuYmFuQ29sdW1uIiwiS2FuYmFuVGFzayIsIkthbmJhbk1lbWJlciIsInBvcHVwSGFuZGxlcl8xIiwidXNlcm5hbWUiLCJpc093bmVyIiwiaXNDdXJyZW50IiwibmFtZSIsImRlc2NyaXB0aW9uIiwibGltaXREYXRlIiwiYXNzaWduVXNlcm5hbWUiLCJjb2x1bW4iLCJvZmZzZXQiLCJrYW5iYW4iLCJ0YXNrcyIsInByb3RvdHlwZSIsImFkZFRhc2siLCJ0YXNrIiwicHVzaCIsImdldFRhc2tCeUlkIiwidGFza0lkIiwiZm9yRWFjaCIsInQiLCJfY29sdW1ucyIsIl9tZW1iZXJzIiwiX2N1cnJlbnRQb3B1cCIsImluaXRGcm9tVGVtcGxhdGUiLCJ0YWJsZSIsIm1lbWJlcnMiLCJfdGVtcGxhdGUiLCJtZW1iZXIiLCJpbm5lclRleHQiLCJhZGRDb2x1bW4iLCJfYSIsInRhc2tEYXRhIiwiZ2V0Q29sdW1uQnlPZmZzZXQiLCJjb2x1bW5PZmZzZXQiLCJ0YXNrTmFtZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwiRGF0ZSIsInRhc2tVc2VyIiwiYmluZFRhc2tFdmVudHMiLCJvcGVuVGFza1BvcHVwIiwiX3RoaXMiLCJjcmVhdGVUYXNrUG9wdXAiLCJhZmZlY3QiLCJzZW5kVGFza0FmZmVjdFJlcXVlc3QiLCJoYW5kbGVBZmZlY3RSZXNwb25zZSIsImJpbmQiLCJmaWx0ZXIiLCJ0YXNrRWxlbWVudCIsIkhUTUxBbmNob3JFbGVtZW50IiwicmVmcmVzaFBvcHVwIiwicG9wdXBUaXRsZSIsImFmZmVjdFRpdGxlIiwidGV4dENvbnRlbnQiLCJyZXMiLCJnZXRUZW1wbGF0ZSIsImdldENvbHVtbnMiLCJnZXRNZW1iZXJzIiwiYWRkSW5wdXRUb0Zvcm0iLCJjb2xsZWN0aW9uSG9sZGVyIiwibGFzdENoaWxkIiwiaXRlbSIsImlucHV0Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsImluZGV4IiwiaW5wdXQiLCJpbnNlcnRCZWZvcmUiLCJhZGRJbnB1dERlbGV0ZUJ0biIsInJlbW92ZUJ0biIsImFwcGVuZCIsInByZXZlbnREZWZhdWx0IiwiYnRuIiwic29ydEhhbmRsZXJfMSIsInNvcnRfb3B0aW9ucyIsInVzZXJfa2FuYmFucyIsInVzZXJfa2FuYmFuc19hcnIiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsImludml0ZWRfa2FuYmFucyIsImludml0ZWRfa2FuYmFuc19hcnIiLCJiaW5kX2V2ZW50cyIsInBhcmVudEVsZW1lbnQiLCJLYW5iYW5fMSIsImNyZWF0ZU5ld1Rhc2tQb3B1cCIsImNyZWF0ZVBvcHVwIiwiY2hpbGQiLCJjbG9zZU1lc3NhZ2UiLCJiYWNrZ3JvdW5kIiwiYm9keSIsInBvcHVwIiwicmVsYXRpdmVDb250YWluZXIiLCJleGl0IiwiZXhpdFRleHQiLCJjcmVhdGVJbnB1dCIsInR5cGUiLCJsYWJlbENvbnRlbnQiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJjcmVhdGVOZXdUYXNrRm9ybSIsImZvcm0iLCJtZXRob2QiLCJzdHlsZSIsIm1hcmdpbiIsIm5hbWVJbnB1dENvbnRhaW5lciIsImRlc2NJbnB1dENvbnRhaW5lciIsImRlc2NJbnB1dCIsImRhdGVJbnB1dENvbnRhaW5lciIsInN1Ym1pdCIsImZvcm1hdE1hcmtkb3duIiwibWRUZXh0IiwiaHRtbFRleHQiLCJ0cmltIiwiY29udGFpbmVyIiwibmFtZUVsZW1lbnQiLCJkYXRlRWxlbWVudCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVzZXJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsInRhc2tBY3Rpb25zRWxlbWVudCIsInRhc2tBY2NlcHRCdXR0b24iLCJ0b1N0cmluZyIsIm93bmVyIiwiYWZmZWN0Q29udGFpbmVyRWxlbWVudCIsImFmZmVjdFNlbGVjdEVsZW1lbnRfMSIsIm9wdGlvbkVsZW1lbnQiLCJ2YWx1ZSIsImFmZmVjdEJ1dHRvbkVsZW1lbnQiLCJhbHBoYV9zb3J0IiwiZGl2MSIsImRpdjIiLCJuYW1lMSIsIm5hbWUyIiwibG9jYWxlQ29tcGFyZSIsImFscGhhX3NvcnRfZGVjIiwiZGF0ZV9zb3J0IiwiZGF0ZUVsZW0xIiwiZGF0ZUVsZW0yIiwiZGF0ZVBhcnRzMSIsInNwbGl0IiwiZGF0ZVBhcnRzMiIsImRhdGUxIiwiZGF0ZTIiLCJnZXRUaW1lIiwiZGF0ZV9zb3J0X2RlYyIsImthbmJhbl9zb3J0IiwiZWxlbWVudHMiLCJrYW5iYW5JZCIsImVsZW1lbnQiLCJrYW5iYW5fdW5zb3J0IiwicmVmcmVzaCIsInBhcmVudCIsInNvcnRlZEVsZW1lbnRzIiwiY2hpbGRyZW4iLCJidXR0b25zUGFyZW50IiwiZWxlbWVudHNQYXJlbnQiLCJhbHBoYSIsImFscGhhX2RlYyIsImRhdGUiLCJkYXRlX2RlYyIsInNvcnQiLCJidXR0b24iLCJjb2xJZCIsImNhbGxiYWNrIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZWxlY3QiLCJwYXJlbnROb2RlIiwidGFza3NfYXJyIl0sInNvdXJjZVJvb3QiOiIifQ==
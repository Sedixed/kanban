import { bind_events } from '../sortHandler';

const sort_options : NodeListOf<Element> = document.querySelectorAll('.js-sort-options');

// Retrieving all kanbans owned by the user
const user_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-created .kanban");
const user_kanbans_arr : Array<Element> = Array.prototype.slice.call(user_kanbans, 0);

// Retrieving all kanbans where the user is invited
const invited_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-invited .kanban");
const invited_kanbans_arr : Array<Element> = Array.prototype.slice.call(invited_kanbans, 0);

// Binding events for every sorting button
if (sort_options.length > 0) {
  if (user_kanbans.length > 0) {
    bind_events(sort_options[0], user_kanbans[0].parentElement, user_kanbans_arr);
  }
  if (invited_kanbans.length > 0) {
    bind_events(sort_options[1], invited_kanbans[0].parentElement, invited_kanbans_arr);
  }    
}


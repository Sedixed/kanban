import { bind_events } from '../sortHandler';

const sort_options : NodeListOf<Element> = document.querySelectorAll('.js-sort-options');

const user_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-created .kanban");
const user_kanbans_arr : Array<Element> = Array.prototype.slice.call(user_kanbans, 0);

const invited_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-invited .kanban");
const invited_kanbans_arr : Array<Element> = Array.prototype.slice.call(invited_kanbans, 0);

if (sort_options.length > 0) {
    if (user_kanbans.length > 0) {
        bind_events(sort_options[0], user_kanbans[0].parentElement, user_kanbans_arr);
    }
    if (invited_kanbans.length > 0) {
        bind_events(sort_options[1], invited_kanbans[0].parentElement, invited_kanbans_arr);
    }    
}


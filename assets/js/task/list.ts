import { bind_events } from '../sortHandler';

const sort_options : NodeListOf<Element> = document.querySelectorAll('.js-sort-options');

// Retrieving all tasks
const tasks : NodeListOf<HTMLDivElement> = document.querySelectorAll(".tasks .task");
const tasks_arr : Array<Element> = Array.prototype.slice.call(tasks, 0);

// Binding events for every sorting button
if (sort_options.length > 0) {
    if (tasks_arr.length > 0) {
        bind_events(sort_options[0], tasks_arr[0].parentElement, tasks_arr);
    }
}


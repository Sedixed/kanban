const sort_options : NodeListOf<Element> = document.querySelectorAll('.js-sort-options');

const user_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-created .kanban");
const user_kanbans_arr : Array<Element> = Array.prototype.slice.call(user_kanbans, 0);

const invited_kanbans : NodeListOf<HTMLDivElement> = document.querySelectorAll(".js-kanbans-invited .kanban");
const invited_kanbans_arr : Array<Element> = Array.prototype.slice.call(invited_kanbans, 0);

const alpha_sort = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    var name1 = div1.querySelector("h2").textContent;
    var name2 = div2.querySelector("h2").textContent;
    return name1.localeCompare(name2);
};

const alpha_sort_dec = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    var name1 = div1.querySelector("h2").textContent;
    var name2 = div2.querySelector("h2").textContent;
    return name2.localeCompare(name1);
};

const refresh = function(parent : HTMLElement, sortedKanbans : Array<Element>) {
    for (var i = 0; i < parent.children.length; i++) {
        parent.children[i].remove();
    }

    for (var i = 0; i < sortedKanbans.length; ++i) {
        parent.appendChild(sortedKanbans[i]);
    }

}

function bind_events(buttonsParent : Element, kanbansParent : HTMLElement, unsortedKanbans : Array<Element>) {
    const alpha : Element = buttonsParent.querySelector('.js-alpha');
    const alpha_dec : Element = buttonsParent.querySelector('.js-alpha-dec');

    if (alpha != null) {
        alpha.addEventListener('click', (evt) => {
            unsortedKanbans.sort(alpha_sort);
            refresh(kanbansParent, unsortedKanbans);
        });
    }

    if (alpha_dec != null) {
        alpha_dec.addEventListener('click', (evt) => {
            unsortedKanbans.sort(alpha_sort_dec);
            refresh(kanbansParent, unsortedKanbans);
        });
    }
}

if (sort_options.length > 0) {
    if (user_kanbans.length > 0) {
        bind_events(sort_options[0], user_kanbans[0].parentElement, user_kanbans_arr);
    }
    if (invited_kanbans.length > 0) {
        bind_events(sort_options[1], invited_kanbans[0].parentElement, invited_kanbans_arr);
    }    
}


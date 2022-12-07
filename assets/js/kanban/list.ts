const sort_options : NodeListOf<Element> = document.querySelectorAll('.js-sort-options');

const user_kanbans : NodeListOf<Element> = document.querySelectorAll(".js-kanbans-created .kanban");
const user_kanbans_arr : Array<Element> = Array.prototype.slice.call(user_kanbans, 0);

const invited_kanbans : NodeListOf<Element> = document.querySelectorAll(".js-kanbans-invited .kanban");
const invited_kanbans_arr : Array<Element> = Array.prototype.slice.call(invited_kanbans, 0);


const alpha_sort = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    var name1 = div1.getElementsByTagName("div")[0].childNodes[0].nodeValue;
    var name2 = div2.getElementsByTagName("div")[0].childNodes[0].nodeValue;
    return name1.localeCompare(name2);
};

const alpha_sort_dec = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    var name1 = div1.getElementsByTagName("div")[0].childNodes[0].nodeValue;
    var name2 = div2.getElementsByTagName("div")[0].childNodes[0].nodeValue;
    return name2.localeCompare(name1);
};

function bind_events(parent : Element, array : Array<Element>) {
    console.log(parent);
    const alpha : Element = parent.querySelector('.js-alpha');
    const alpha_dec : Element = parent.querySelector('.js-alpha-dec');
    console.log(alpha);
    if (alpha != null) {
        alpha.addEventListener('click', (evt) => array.sort(alpha_sort));
    }

    if (alpha_dec != null) {
        alpha_dec.addEventListener('click', (evt) => {console.log(invited_kanbans_arr);array.sort(alpha_sort_dec); console.log(invited_kanbans_arr); });
    }
}

if (sort_options != null) {
    bind_events(sort_options[0], user_kanbans_arr);
    bind_events(sort_options[1], invited_kanbans_arr);
}



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
const alpha_sort = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    const name1 = div1.querySelector(".js-alpha-key").textContent;
    const name2 = div2.querySelector(".js-alpha-key").textContent;
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
const alpha_sort_dec = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    const name1 = div1.querySelector(".js-alpha-dec-key").textContent;
    const name2 = div2.querySelector(".js-alpha-dec-key").textContent;
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
const date_sort = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    const dateElem1 = div1.querySelector(".js-date-key");
    const dateElem2 = div2.querySelector(".js-date-key");

    if (dateElem1 == null) {
        return 1;
    }
    if (dateElem2 == null) {
        return -1;
    }

    const dateParts1 = dateElem1.textContent.split("/");
    const dateParts2 = dateElem2.textContent.split("/");

    const date1 = new Date(+dateParts1[2], +dateParts1[1] - 1, +dateParts1[0]); 
    const date2 = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]); 

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
const date_sort_dec = function(div1 : HTMLDivElement, div2 : HTMLDivElement) {
    const dateElem1 = div1.querySelector(".js-date-dec-key");
    const dateElem2 = div2.querySelector(".js-date-dec-key");

    if (dateElem1 == null) {
        return 1;
    }
    if (dateElem2 == null) {
        return -1;
    }
    
    const dateParts1 = dateElem1.textContent.split("/");
    const dateParts2 = dateElem2.textContent.split("/");

    const date1 = new Date(+dateParts1[2], +dateParts1[1] - 1, +dateParts1[0]); 
    const date2 = new Date(+dateParts2[2], +dateParts2[1] - 1, +dateParts2[0]); 

    return date2.getTime() - date1.getTime();
};

/**
 * Deletes the content of <parent> and replaces it with the elements of
 * <sortedElements>.
 * 
 * @param parent The container where the function appends the elements.
 * @param sortedElements The elements to append in the container.
 */
const refresh = function(parent : HTMLElement, sortedElements : Array<Element>) {
    for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].remove();
    }
    for (let i = 0; i < sortedElements.length; ++i) {
        parent.appendChild(sortedElements[i]);
    }
}

/**
 * Binds the appropriate sorting method to every sort button found.
 * 
 * @param buttonsParent Buttons container.
 * @param elementsParent Container of elements to sort.
 * @param unsortedElements Elements to sort.
 */
export function bind_events(buttonsParent : Element, elementsParent : HTMLElement, unsortedElements : Array<Element>) {
    const alpha : Element = buttonsParent.querySelector('.js-alpha');
    const alpha_dec : Element = buttonsParent.querySelector('.js-alpha-dec');
    const date : Element = buttonsParent.querySelector('.js-date');
    const date_dec : Element = buttonsParent.querySelector('.js-date-dec');

    if (alpha != null) {
        alpha.addEventListener('click', (evt) => {
            unsortedElements.sort(alpha_sort);
            refresh(elementsParent, unsortedElements);
        });
    }

    if (alpha_dec != null) {
        alpha_dec.addEventListener('click', (evt) => {
            unsortedElements.sort(alpha_sort_dec);
            refresh(elementsParent, unsortedElements);
        });
    }

    if (date != null) {
        date.addEventListener('click', (evt) => {
            unsortedElements.sort(date_sort);
            refresh(elementsParent, unsortedElements);
        });
    }

    if (date_dec != null) {
        date_dec.addEventListener('click', (evt) => {
            unsortedElements.sort(date_sort_dec);
            refresh(elementsParent, unsortedElements);
        });
    }
}
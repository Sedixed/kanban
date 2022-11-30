/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import './styles/header/stylesheet.css'
import './styles/home/stylesheet.css'
import './styles/form/stylesheet.css'
import './styles/kanban/stylesheet.css';

// start the Stimulus application
import './bootstrap.js';

// import typescript files
import './js/script.ts';

import './js/kanban/create.ts';

import './js/invitation/ajax.ts';

import './js/task/ajax.ts';
import './mobile-menu.js';
import scroll from './smoothScroll.js';

const menu = document.querySelectorAll('.menu-link, .js-item');
menu.forEach(element => element.addEventListener('click', scroll));

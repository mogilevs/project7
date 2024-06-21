import "./mobile-menu.js"
import scroll from './smoothScroll.js'

const menu = document.querySelectorAll('.menu-link');
menu.forEach(element => element.addEventListener('click', scroll));
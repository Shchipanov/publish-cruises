const navBack = document.querySelector('[data-nav-background]');
let navMain = document.querySelector('[data-menu="main-nav"]');
const navLinks = document.querySelectorAll('[data-nav-link]');

import {removeScroll} from './no-scroll';
import {hideTile} from './hide-title';

function closedMenu() {
  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMain.classList.remove('main-nav--opened');
        removeScroll();
        hideTile();
      });
    });
  } else {
    return;
  }

  if (navBack) {
    navBack.addEventListener('click', (evt) => {
      evt.preventDefault();
      navMain.classList.remove('main-nav--opened');
      removeScroll();
      hideTile();
    });
  } else {
    return;
  }
}

export {closedMenu};

import {removeScroll} from './no-scroll';
import {hideTile} from './hide-title';

let navMain = document.querySelector('[data-menu="main-nav"]');
let navToggle = document.querySelector('[data-menu="btn"]');


navMain.classList.remove('main-nav--not-js');

const getMenu = function () {
  if (!navMain) {
    return;
  } else {
    if (!navToggle) {
      navMain.classList.add('main-nav--not-js');
      return;
    }
    navToggle.addEventListener('click', function () {
      navMain.classList.toggle('main-nav--opened');
      hideTile();
      removeScroll();
    });
  }
};

export {getMenu};

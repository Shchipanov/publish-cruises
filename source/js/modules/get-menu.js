let navMain = document.querySelector('[data-menu="main-nav"]');
let navToggle = document.querySelector('[data-menu="btn"]');

navMain.classList.remove('main-nav--not-js');

const getMenu = function () {
  if (!navMain) {
    return;
  } else {
    navToggle.addEventListener('click', function () {
      navMain.classList.toggle('main-nav--opened');
    });
  }
};

export {getMenu};

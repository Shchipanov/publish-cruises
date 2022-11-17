let headerTile = document.querySelector('[data-header-title]');

function hideTile() {
  if (headerTile) {
    headerTile.classList.toggle('main-header__title--opened');
  } else {
    return;
  }
}

export {hideTile};

let bodyScroll = document.querySelector('[data-body-scroll]');

function removeScroll() {
  if (bodyScroll) {
    bodyScroll.classList.toggle('page--no-scroll');
  } else {
    return;
  }
}

export {removeScroll};

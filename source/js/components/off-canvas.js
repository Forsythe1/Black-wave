function offCanvasToggle() {
  document.getElementById('off-canvas').classList.toggle('off-canvas--open');
}

document.addEventListener('click', (event) => {
  if (event.target.dataset.toggle === 'off-canvas') {
    event.preventDefault();
    offCanvasToggle();
  }
  // возможность совместить переключение off-canvas и встроенную функ-сть
  if (event.target.dataset.toggleNative === 'off-canvas') {
    offCanvasToggle();
  }
});

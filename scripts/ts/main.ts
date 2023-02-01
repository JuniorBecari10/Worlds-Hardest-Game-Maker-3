function init(): void {
  
}

function tick(): void {
  
}

function render(): void {
  g.ctx?.drawImage(bg, 0, 0, bg.width * 2, bg.height * 2);
}

function loop(): void {
  tick();
  render();
  
  window.requestAnimationFrame(loop);
}
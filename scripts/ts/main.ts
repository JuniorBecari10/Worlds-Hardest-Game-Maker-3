
document.addEventListener("keydown", (event: KeyboardEvent) => {
  keysPressed.add(event.keyCode);
});

document.addEventListener("keyup", (event: KeyboardEvent) => {
  keysPressed.delete(event.keyCode);
});

function init(): void {
  
}

function tick(): void {
  console.log(keysPressed.size);
}

function render(): void {
  
}

function loop(): void {
  tick();
  render();
  
  window.requestAnimationFrame(loop);
}
document.addEventListener("keydown", (e: KeyboardEvent) => {
  keysPressed.add(e.keyCode);
});

document.addEventListener("keyup", (e: KeyboardEvent) => {
  keysPressed.delete(e.keyCode);
});

document.addEventListener("mousemove", (e: MouseEvent) => {
  mousePos = { x: e.clientX, y: e.clientY };
});

document.addEventListener("mousedown", (e: MouseEvent) => {
  switch (e.which) {
    case 1:
      mousePressed = "left";
      break;
    case 2:
      mousePressed = "middle";
      break;
    case 3:
      mousePressed = "right";
      break;
    default:
      console.error("cannot get which mouse button has been pressed.");
  }
});

document.addEventListener("mouseup", (e: MouseEvent) => {
  mousePressed = "none";
});

// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// ---



// ---

function init(): void {
  
}

function tick(): void {
  
}

function render(): void {
  
}

function loop(): void {
  tick();
  render();
  
  window.requestAnimationFrame(loop);
}
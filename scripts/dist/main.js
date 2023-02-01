"use strict";
document.addEventListener("keydown", (event) => {
    keysPressed.add(event.keyCode);
});
document.addEventListener("keyup", (event) => {
    keysPressed.delete(event.keyCode);
});
function init() {
}
function tick() {
    console.log(keysPressed.size);
}
function render() {
}
function loop() {
    tick();
    render();
    window.requestAnimationFrame(loop);
}

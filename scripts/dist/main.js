"use strict";
document.addEventListener("keydown", (e) => {
    keysPressed.add(e.keyCode);
});
document.addEventListener("keyup", (e) => {
    keysPressed.delete(e.keyCode);
});
document.addEventListener("mousemove", (e) => {
    mousePos = { x: e.clientX, y: e.clientY };
});
document.addEventListener("mousedown", (e) => {
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
document.addEventListener("mouseup", (e) => {
    mousePressed = "none";
});
// disable right click
document.addEventListener("contextmenu", e => e.preventDefault());
// ---
// ---
function init() {
}
function tick() {
}
function render() {
}
function loop() {
    tick();
    render();
    window.requestAnimationFrame(loop);
}

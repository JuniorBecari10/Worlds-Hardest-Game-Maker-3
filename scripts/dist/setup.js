"use strict";
var keysPressed = new Set();
var mousePos = { x: 0, y: 0 };
var mousePressed = "none";
// ---
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
function isKeyPressed(keyCode) {
    return keysPressed.has(keyCode);
}
function anyKeyPressed() {
    return keysPressed.size > 0;
}
function isMousePressed() {
    return mousePressed != "none";
}

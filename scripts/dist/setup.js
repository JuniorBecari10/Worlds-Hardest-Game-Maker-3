"use strict";
var keysPressed = new Set();
var mousePos = { x: 0, y: 0 };
var mousePressed = "none";
function isKeyPressed(keyCode) {
    return keysPressed.has(keyCode);
}
function anyKeyPressed() {
    return keysPressed.size > 0;
}
function isMousePressed() {
    return mousePressed != "none";
}

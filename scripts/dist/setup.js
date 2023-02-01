"use strict";
var keysPressed = new Set();
function isKeyPressed(keyCode) {
    return keysPressed.has(keyCode);
}
function anyKeyPressed() {
    return keysPressed.size > 0;
}

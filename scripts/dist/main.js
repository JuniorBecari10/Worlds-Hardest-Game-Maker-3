"use strict";
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

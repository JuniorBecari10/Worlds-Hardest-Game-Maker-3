"use strict";
function init() {
}
function tick() {
}
function render() {
    var _a;
    (_a = g.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(bg, 0, 0, bg.width * 2, bg.height * 2);
}
function loop() {
    tick();
    render();
    window.requestAnimationFrame(loop);
}

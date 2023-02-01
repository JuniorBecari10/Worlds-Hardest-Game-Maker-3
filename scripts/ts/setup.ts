type MouseButton = "left" | "right" | "middle" | "none";

var keysPressed: Set<number> = new Set();
var mousePos: Point = {x: 0, y: 0};
var mousePressed: MouseButton = "none";

function isKeyPressed(keyCode: number): boolean {
  return keysPressed.has(keyCode);
}

function anyKeyPressed(): boolean {
  return keysPressed.size > 0;
}

function isMousePressed(): boolean {
  return mousePressed != "none";
}
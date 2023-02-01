var keysPressed: Set<number> = new Set();

function isKeyPressed(keyCode: number): boolean {
  return keysPressed.has(keyCode);
}

function anyKeyPressed(): boolean {
  return keysPressed.size > 0;
}
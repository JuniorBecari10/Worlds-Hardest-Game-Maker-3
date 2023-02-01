const bg = loadImage("bg");

function loadImage(id: string): HTMLImageElement {
  return document.getElementById(id) as HTMLImageElement;
}
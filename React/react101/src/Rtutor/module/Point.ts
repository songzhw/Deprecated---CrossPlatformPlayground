export class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

import Shape from "./Shape.js";

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    return this._sideLength ** 2;
  }
}

export default Square;

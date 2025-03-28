class Shape {
  constructor(name, sides, sideLength) {
    this._name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return this._sides * this._sideLength;
  }

  set sides(quantity) {
    if (typeof quantity !== "number" || quantity < 3) {
      throw new Error("Value of sides must be a number greater than 2.");
    }
    this._sides = quantity;
  }

  set sideLength(centimeters) {
    if (typeof centimeters !== "number" || centimeters < 1) {
      throw new Error("Value of length must be a number greater than 1.");
    }
    this._sideLength = centimeters;
  }
}

export default Shape;

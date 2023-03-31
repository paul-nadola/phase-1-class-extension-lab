// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && b + c > a && c + a > b;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        const [a] = this.sides;
        return a * a;
      }
      return null;
    }
  }
  
//Ólafur Ásdísarson
//4.2.2018
//Verkefni 3-3 FORR3JS05DU
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.radius * Math.PI;
  }
}

const circle = new Circle(10);

console.log(circle.area); 

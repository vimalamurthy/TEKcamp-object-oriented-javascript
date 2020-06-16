//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is
//called "purpose", and stores a string.  This string should clearly explain why classes are used in Object
//Oriented Programming.  The first method is called explain().  This method should print the contents stored
//in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print
//out the various parts that are essential to building a class.  Instantiate the class, and invoke the method
//so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    return this.purpose;
  }
  pieces() {
    return `Class name, Attributes, Property, Constructor, Methods`;
  }
}
const str = `A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).`;
const class1 = new WhyClass(str);
class1.explain();
class1.pieces();
console.log(class1.explain());
console.log(class1.pieces());

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your 
excursion.  To jog your memory, some different types of wildlife that you observed are found in the following 
URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use 
other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature 
should have 3 unique characteristics, and 2 unique actions that it can do. */

class Animal {
  constructor(name, type, habitat) {
    this.name = name;
    this.type = type;
    this.habitat = habitat;
  }
  behavior(group, pack) {
    return group
      ? `${this.name} lives in groups of ${pack}`
      : `${this.name} doesnt live in groups`;
  }
  endangered(isEndangered) {
    return isEndangered
      ? `${this.name} is an endangered species`
      : `${this.name} is a not an endangered species`;
  }
  printDetails() {
    return `${this.name} is  ${this.type} and lives in ${this.habitat} `;
  }
}

const jaguar = new Animal('Jaguar', 'an animal', 'land');
console.log(jaguar.printDetails());
console.log(jaguar.behavior(false, 0));
console.log(jaguar.endangered(true));

const dolphin = new Animal('River Dolphin', 'an aquatic animal', 'water');
console.log(dolphin.printDetails());
console.log(dolphin.behavior(false, 0));
console.log(dolphin.endangered(false));

const capybara = new Animal('Capybara', 'a rodent', 'land');
console.log(capybara.printDetails());
console.log(capybara.behavior(true, 100));
console.log(capybara.endangered(false));

const armadillo = new Animal('Armadillo', 'an animal', 'land');
console.log(armadillo.printDetails());
console.log(armadillo.behavior(false, 0));
console.log(armadillo.endangered(true));

const marmoset = new Animal('Marmoset', 'an animal', 'land');
console.log(marmoset.printDetails());
console.log(marmoset.behavior(true, 6));
console.log(marmoset.endangered(false));

const macaw = new Animal('Hyacinth Macaw', 'a bird', 'land');
console.log(macaw.printDetails());
console.log(macaw.behavior(true, 100));
console.log(macaw.endangered(true));

/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate 
the object literals */

class Shape {
  constructor(name, sides, base, height) {
    this.name = name;
    this.sides = sides;
    this.base = base;
    this.height = height;
  }
  calcArea() {
    switch (this.name) {
      case 'triangle':
        return `Area of ${this.name} is ${0.5 * this.base * this.height}`;
      case 'rectangle':
        return `Area of ${this.name} is ${this.base * this.height}`;
      case 'circle':
        return `Area of ${this.name} is ${(Math.PI * this.base ** 2).toFixed(
          2
        )}`;
      case 'pentagon':
        return `Area of ${this.name} is ${(
          (1 / 4) *
          Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) *
          (this.base * this.base)
        ).toFixed(2)}`;
      case 'hexagon':
        return `Area of ${this.name} is ${(
          (3 * Math.sqrt(3) * this.base * this.base) /
          2
        ).toFixed(2)}`;
      case 'octagon':
        return `Area of ${this.name} is ${(
          2 *
          (1 + Math.sqrt(2)) *
          (this.base * this.base)
        ).toFixed(2)}`;
    }
  }
  calcPerimeter() {
    switch (this.name) {
      case 'triangle':
        return `Perimeter of ${this.name} is ${
          this.base + this.sides[1] + this.sides[2]
        }`;
      case 'rectangle':
        return `Perimeter of ${this.name} is ${2 * (this.base + this.height)}`;
      case 'circle':
        return `Circumference of ${this.name} is ${(
          Math.PI *
          this.base *
          2
        ).toFixed(2)}`;
      case 'pentagon':
        return `Perimeter of ${this.name} is ${this.sides * this.base}`;
      case 'hexagon':
        return `Perimeter of ${this.name} is ${this.sides * this.base}`;
      case 'octagon':
        return `Perimeter of ${this.name} is ${this.sides * this.base}`;
    }
  }
}

const triangle = new Shape('triangle', [4, 7, 7], 4, 6.71);
console.log(triangle.calcArea());
console.log(triangle.calcPerimeter());
const rectangle = new Shape('rectangle', 4, 2, 5);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());
const circle = new Shape('circle', 1, 5, null);
console.log(circle.calcArea());
console.log(circle.calcPerimeter());

//Bonus
//pentagon takes in radius as parameter to calc area
const pentagon = new Shape('pentagon', 5, 8, null);
console.log(pentagon.calcArea());
console.log(pentagon.calcPerimeter());

const hexagon = new Shape('hexagon', 6, 8, null);
console.log(hexagon.calcArea());
console.log(hexagon.calcPerimeter());

const octagon = new Shape('octagon', 8, 8, null);
console.log(octagon.calcArea());
console.log(octagon.calcPerimeter());

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments 
explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if 
you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the 
bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object 
literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, 
we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating 
the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth('earth', 3);
console.log(earth);

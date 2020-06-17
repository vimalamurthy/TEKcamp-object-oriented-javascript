/* 1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated 
with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked 
from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. 
In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 
2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age
*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error('Abstract class cannot be instantited');
    }
  }
  move() {
    throw new Error('Abstract method cannot be invoked..');
  }
  act() {
    throw new Error('Abstract method cannot be invoked..');
  }
}

class Human extends Creature {
  constructor(name, weight) {
    super();
    this.name = name;
    this.weight = weight;
  }
  move() {
    console.log('Humans move by walking');
  }
  act() {
    console.log('Humans can think & act !!!');
  }
  obese() {
    this.weight > 200
      ? console.log(`${this.name} is obese`)
      : console.log(`${this.name} is not obese`);
  }
}

const human = new Human('Vishwas', 150);
human.move();
human.act();
human.obese();

class Bird extends Creature {
  constructor(name, type) {
    super();
    this.name = name;
    this.type = type;
  }
  move() {
    console.log('Birds move by flying...');
  }
  act() {
    console.log('Birds act instinctively..');
  }
  active() {
    console.log(`${this.name}s are ${this.type} birds`);
  }
}
const bird = new Bird('Eagle', 'day');
bird.move();
bird.act();
bird.active();

class Fish extends Creature {
  constructor(name, habitat) {
    super();
    this.name = name;
    this.habitat = habitat;
  }
  move() {
    console.log('Fishes move by swimming..');
  }
  act() {
    console.log('Fishes survive..');
  }
  printHabitat() {
    console.log(`${this.name} lives in ${this.habitat}`);
  }
}

const fish = new Fish('Pink Dolphins', 'Rivers');
fish.move();
fish.act();
fish.printHabitat();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  
For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you 
to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + ' is eating (Parent)');
  }

  sleep() {
    console.log(this.name + ' is sleeping (Parent)');
  }

  code = function () {
    console.log(this.name + ' is coding (Parent)');
  };

  repeat = function () {
    console.log(
      this.name + ' is repeating the above steps, yet another time (Parent)'
    );
  };

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      'Converted the regular functions expressions to arrow functions in the child and changed the arrow functions in parent to regular functions as the prototype of the child has precedence over parent.'
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + ' loves to teach before eating... (Teacher)');
  }

  sleep() {
    console.log(
      this.name + ' sleeps after preparing the lesson plan (Teacher)'
    );
  }

  code = () => {
    console.log(
      this.name + ' codes first, then teaches it the next day. (Teacher)'
    );
  };

  repeat = () => {
    console.log(
      this.name + ' teaches, codes, eats, sleeps, and repeats (Teacher)'
    );
  };
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + ' studies, then eats (Student)');
  }

  sleep() {
    console.log(
      this.name +
        ' studies coding so much, that they dream about it in their sleep (Student)'
    );
  }

  code = () => {
    console.log(
      this.name +
        ' was first overwhelmed by coding, but kept at it, and now has become a coding guru! (Student)'
    );
  };

  repeat = () => {
    console.log(
      this.name +
        ' keeps on studying, coding, eating, and sleeping, and puts it all on repeat.(Student)'
    );
  };
}

const teacher = new Teacher('Dr. Teacher');

teacher.explain();

const student = new Student('Pupil Student');

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:
class Cook {
  prepare = (food1, food2, food3) => {
    console.log('The cook is cooking ' + food1, food2, food3);
  };

  prepare() {
    console.log('The cook is cooking');
  }

  explain = () => {
    console.log(
      'The field was taking precedence over the regular function, hence converted the required fn to arrow fn.'
    );
  };
}

const cook = new Cook();

cook.prepare('turkey', 'salami', 'pizza');

cook.explain();

/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
    Create methods that return the values of these private variables in case other pieces of the code need to access 
    the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties 
    on the classes, without directly manipulating the values themselves. 

    //your code here... */

class Book {
  #author;
  #publisher;

  get author() {
    return `${this.#author}`;
  }
  set writer(str) {
    if (str === '') throw new Error('Empty String..');
    this.#author = str;
  }
  get publisher() {
    return `${this.#publisher}`;
  }
  set publishr(str) {
    if (str === '') throw new Error('Empty String..');
    this.#publisher = str;
  }
}

const newBook = new Book();

newBook.writer = 'Vamsi';
console.log(newBook.author);
newBook.publishr = 'Radhika';
console.log(newBook.publisher);

class Author {
  #name;
  #books;

  get name() {
    return `${this.#name}`;
  }
  set names(str) {
    if (str === '') throw new Error('Empty String..');
    this.#name = str;
  }
  get books() {
    return `${this.#books}`;
  }
  set book(str) {
    if (str === '') throw new Error('Empty String..');
    this.#books = str;
  }
}
const newAuthor = new Author();

newAuthor.names = 'Nive';
console.log(newAuthor.name);
newAuthor.book = 'Sewing 101';
console.log(newAuthor.books);

class Publisher {
  #authors;
  #books;

  get authors() {
    return `${this.#authors}`;
  }
  set writers(str) {
    if (str === '') throw new Error('Empty String..');
    this.#authors = str;
  }
  get books() {
    return `${this.#books}`;
  }
  set books1(str) {
    if (str === '') throw new Error('Empty String..');
    this.#books = str;
  }
}

const newPublisher = new Publisher();

newPublisher.writers = 'Meethu';
console.log(newPublisher.authors);
newPublisher.books1 = 'Pathipagam';
console.log(newPublisher.books);

class Review {
  #rating;
  #user;

  get rating() {
    return `${this.#rating}`;
  }
  set rate(num) {
    if (num === '') throw new Error('Empty String..');
    this.#rating = num;
  }
  get user() {
    return `${this.#user}`;
  }
  set usr(str) {
    if (str === '') throw new Error('Empty String..');
    this.#user = str;
  }
}

const newReview = new Review();

newReview.usr = 'Van';
console.log(newReview.user);
newReview.rate = 10;
console.log(newReview.rating);

/* 2. Create the following classes:
    - Umbrella class.  It should have an organization name.  It should only have a single instance.  Umbrella is the 
        "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that 
        are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek,Inc , Aerotek Aviation etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that 
        inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee 
    instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR 
    Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, 
    considering what the classes are supposed to be representing.

    //your code here...*/

class Umbrella {
  static parentName = 'Allegis Group';
  static headquarters = 'Hanover MD';
  printName() {
    console.log(`${Umbrella.parentName} is the Parent Organization`);
  }
  printHQ() {
    console.log(
      `${Umbrella.parentName} is loacted at ${Umbrella.headquarters}`
    );
  }
}

class Company extends Umbrella {
  constructor(companyName, employeeTotal, businesstype, turnover) {
    super();
    this.companyName = companyName;
    this.employeeTotal = employeeTotal;
    this.businesstype = businesstype;
    this.turnover = turnover;
  }
  printCompanyDetails() {
    console.log(
      `${this.companyName} is part of ${Umbrella.parentName} with around ${this.employeeTotal} employees`
    );
  }
  printProfit() {
    console.log(`${this.companyName} has a turnover of ${this.turnover}`);
  }
}

class Site extends Company {
  constructor(
    companyName,
    employeeTotal,
    businesstype,
    turnover,
    location,
    revenue,
    address
  ) {
    super(companyName, employeeTotal, businesstype, turnover);
    this.location = location;
    this.revenue = revenue;
    this.address = address;
  }
  printSiteDetails() {
    console.log(`Location : ${this.location}`);
  }
  printRevenue() {
    console.log(
      `${this.revenue} is the profit generated at this location : ${this.location} `
    );
  }
}

const site = new Site(
  'TEK Systems',
  1000,
  'IT',
  '25M',
  'Dallas, TX',
  '1M',
  '1212 Harry lane'
);
site.printCompanyDetails();
site.printProfit();
site.printSiteDetails();
site.printRevenue();
const site1 = new Site(
  'Aerotek Aviation',
  200,
  'Aviation',
  '10M',
  'Richardson, TX',
  '1C',
  '555 Roger lane'
);
site1.printCompanyDetails();
site1.printProfit();
site1.printSiteDetails();
site1.printRevenue();
const site2 = new Site(
  'Aerotek, Inc',
  500,
  'Marketing',
  '20M',
  'Chicago, IL',
  '2M',
  '32121 Madison Ave'
);
site2.printCompanyDetails();
site2.printProfit();
site2.printSiteDetails();
site2.printRevenue();

class Employee {
  constructor(name, title, salary, email, birthyear) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.email = email;
    this.birthyear = birthyear;
  }
  printEmployee() {
    console.log(`${this.name} is a ${this.title} and earns ${this.salary}`);
  }
  printSalary() {
    console.log(
      `The monthly pay of ${this.name} is ${(this.salary / 12).toFixed(2)}`
    );
  }
  printAge() {
    const today = new Date();
    const DOB = new Date(this.birthyear);
    const age = today.getFullYear() - DOB.getFullYear();
    console.log(`The age is ${age} `);
  }
}

const employee1 = new Employee(
  'Nive',
  'CEO',
  2000000,
  'nive@email.com',
  '1998'
);
employee1.printEmployee();
employee1.printSalary();
employee1.printAge();
const employee2 = new Employee(
  'Rebecca',
  'Manager',
  200000,
  'rebecca@email.com',
  '1988'
);
employee2.printEmployee();
employee2.printSalary();
employee2.printAge();
const employee3 = new Employee(
  'Serena',
  'Secretary',
  60000,
  'serena@email.com',
  '1978'
);
employee3.printEmployee();
employee3.printSalary();
employee3.printAge();
const employee4 = new Employee(
  'Brian',
  'Engineer',
  100000,
  'brian@email.com',
  '1989'
);
employee4.printEmployee();
employee4.printSalary();
employee4.printAge();
const employee5 = new Employee(
  'Holly',
  'Engineer',
  100000,
  'holly@email.com',
  '1999'
);
employee5.printEmployee();
employee5.printSalary();
employee5.printAge();
const employee6 = new Employee(
  'Madhu',
  'Financial Officer',
  1000000,
  'madhu@mail.com',
  '2000'
);
employee6.printEmployee();
employee6.printSalary();
employee6.printAge();
const employee7 = new Employee(
  'Julie',
  'Janitor',
  30000,
  'julie@gmail.com',
  '1992'
);
employee7.printEmployee();
employee7.printSalary();
employee7.printAge();
const employee8 = new Employee(
  'Barbara',
  'Marketer',
  100000,
  'barb@email.com',
  '1988'
);
employee8.printEmployee();
employee8.printSalary();
employee8.printAge();
const employee9 = new Employee(
  'Maria',
  'HR Personnel',
  120000,
  'maria@gmail.com',
  '1987'
);
employee9.printEmployee();
employee9.printSalary();
employee9.printAge();
const employee10 = new Employee(
  'Vishwas',
  'Lawyer',
  200000,
  'vishwas@mail.com',
  1991
);
employee10.printEmployee();
employee10.printSalary();
employee10.printAge();

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  
This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...

class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello I am ${this.name}. I am ${this.age} year(s) old!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.` ;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
   let description = super.getDescription();
   
   if (this.major) {
    description += `Their major is ${this.major}.`;
   }

   return description; 
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
     
    if (this.hasHomeLocation()) {
      return greeting += `  I am from ${this.homeLocation}.`
    }
  }
}

const me = new Student('Peter Yu', 28, 'Covington');
console.log(me.getDescription());

const other = new Traveler('Peter Yu');
console.log(other.getGreeting());
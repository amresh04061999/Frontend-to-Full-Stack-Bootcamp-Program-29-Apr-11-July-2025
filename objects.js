// Basic Class Definition
class Person {
  // Constructor method - runs when new instance is created
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  // Instance method
  greet() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }
  
  // Method with parameters
  introduce(otherPerson) {
    return `Hi ${otherPerson}, nice to meet you! I'm ${this.name}`;
  }
  
  // Getter method
  get info() {
    return `${this.name} (${this.age}) - ${this.email}`;
  }
  
  // Setter method
  set newAge(age) {
    if (age > 0 && age < 150) {
      this.age = age;
    } else {
      console.log("Invalid age");
    }
  }
  
  // Static method (belongs to class, not instance)
  static species() {
    return "Homo sapiens";
  }
}

// Creating instances (objects) from the class
const person1 = new Person("Alice", 28, "alice@email.com");
const person2 = new Person("Bob", 32, "bob@email.com");

console.log(person1.greet()); // "Hello, I'm Alice and I'm 28 years old"
console.log(person2.introduce("Alice")); // "Hi Alice, nice to meet you! I'm Bob"
console.log(person1.info); // "Alice (28) - alice@email.com"

// Using setter
person1.newAge = 29;
console.log(person1.age); // 29

// Using static method
console.log(Person.species()); // "Homo sapiens"

// Inheritance - extending a class
class Student extends Person {
  constructor(name, age, email, studentId, course) {
    super(name, age, email); // Call parent constructor
    this.studentId = studentId;
    this.course = course;
    this.grades = [];
  }
  
  // Override parent method
  greet() {
    return `${super.greet()}. I'm studying ${this.course}`;
  }
  
  // New method specific to Student
  addGrade(grade) {
    this.grades.push(grade);
  }
  
  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }
  
  get studentInfo() {
    return `Student ID: ${this.studentId}, Course: ${this.course}`;
  }
}

// Creating a student instance
const student1 = new Student("Charlie", 20, "charlie@email.com", "ST001", "Computer Science");

console.log(student1.greet()); // "Hello, I'm Charlie and I'm 20 years old. I'm studying Computer Science"
console.log(student1.studentInfo); // "Student ID: ST001, Course: Computer Science"

student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
console.log(`Average grade: ${student1.getAverageGrade()}`); // "Average grade: 85"

// Private fields and methods (ES2022)
class BankAccount {
  // Private fields (start with #)
  #balance = 0;
  #accountNumber;
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    return "Invalid deposit amount";
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    return "Invalid withdrawal amount or insufficient funds";
  }
  
  // Private method
  #validateTransaction(amount) {
    return amount > 0 && amount <= this.#balance;
  }
  
  // Getter for balance (read-only access to private field)
  get balance() {
    return this.#balance;
  }
  
  get accountInfo() {
    return `Account: ${this.#accountNumber}, Balance: $${this.#balance}`;
  }
}

const account = new BankAccount("ACC123", 1000);
console.log(account.deposit(500)); // "Deposited $500. New balance: $1500"
console.log(account.withdraw(200)); // "Withdrew $200. New balance: $1300"
console.log(account.balance); // 1300
console.log(account.accountInfo); // "Account: ACC123, Balance: $1300"

// console.log(account.#balance); // This would cause an error - private field

// Object methods and properties
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  isRunning: false,
  
  start() {
    this.isRunning = true;
    return "Car started";
  },
  
  stop() {
    this.isRunning = false;
    return "Car stopped";
  },
  
  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
};

console.log(car.getInfo()); // "2023 Toyota Camry"
console.log(car.start()); // "Car started"
console.log(car.isRunning); // true
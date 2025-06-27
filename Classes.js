  // ** CLASSES IN JAVASCRIPT **
// Classes in JavaScript are templates for creating objects with shared properties and methods. They provide a cleaner, more structured way
// to implement object-oriented programming compared to traditional constructor functions.
// Basic Class Concepts
// Class Declaration: Classes are declared using the class keyword, followed by a class name (conventionally PascalCase).
// Constructor: The constructor method is a special method that runs when a new instance is created. It's used to initialize object properties.
// Methods: Functions defined inside a class that can be called on instances of that class.
// Instantiation: Creating new objects from a class using the new keyword.

// ** Key Concepts Explained **
// Basic Structure: Classes encapsulate data (properties) and behavior (methods) together. The constructor initializes new instances with specific values.
// Instance vs Static Methods: Instance methods operate on specific objects, while static methods belong to the class itself and can be called without creating an instance.
// Getters and Setters: Allow controlled access to object properties. Getters retrieve values, setters validate and assign values.
// Inheritance: Child classes can extend parent classes using extends, inheriting properties and methods. The super() function calls the parent constructor.
// Method Overriding: Child classes can provide their own implementation of parent methods while still having access to the original via super.methodName().
// Private Fields: Using # prefix creates truly private properties and methods that cannot be accessed from outside the class.
// Method Chaining: Returning this from methods allows multiple method calls to be chained together.
// Mixins: A way to add functionality to classes without inheritance, useful for sharing behavior across unrelated classes.


// ============================================
// BASIC CLASS EXAMPLE
// ============================================

class Person {
    // Constructor - runs when new instance is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance method
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    
    // Another instance method
    haveBirthday() {
        this.age++;
        return `Happy birthday! I'm now ${this.age}.`;
    }
}

// Creating instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.introduce()); // "Hi, I'm Alice and I'm 25 years old."
console.log(person2.haveBirthday()); // "Happy birthday! I'm now 31."

// ============================================
// INTERMEDIATE CONCEPTS
// ============================================

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
        this._mileage = 0; // Private-like property (convention)
    }
    
    // Getter method
    get mileage() {
        return this._mileage;
    }
    
    // Setter method
    set mileage(value) {
        if (value >= 0) {
            this._mileage = value;
        } else {
            console.log("Mileage cannot be negative");
        }
    }
    
    // Static method - belongs to class, not instances
    static compareYears(car1, car2) {
        return car1.year - car2.year;
    }
    
    start() {
        this.isRunning = true;
        return `${this.brand} ${this.model} is now running.`;
    }
    
    stop() {
        this.isRunning = false;
        return `${this.brand} ${this.model} has stopped.`;
    }
    
    drive(miles) {
        if (this.isRunning) {
            this._mileage += miles;
            return `Drove ${miles} miles. Total mileage: ${this._mileage}`;
        }
        return "Start the car first!";
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2018);

console.log(car1.start()); // "Toyota Camry is now running."
console.log(car1.drive(50)); // "Drove 50 miles. Total mileage: 50"
console.log(car1.mileage); // 50

// Using static method
console.log(Car.compareYears(car1, car2)); // 2 (2020 - 2018)

// ============================================
// INHERITANCE - ADVANCED CONCEPT
// ============================================

// Parent class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.energy = 100;
    }
    
    eat() {
        this.energy += 20;
        return `${this.name} is eating. Energy: ${this.energy}`;
    }
    
    sleep() {
        this.energy += 30;
        return `${this.name} is sleeping. Energy: ${this.energy}`;
    }
    
    makeSound() {
        return `${this.name} makes a sound.`;
    }
}

// Child class extending Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine"); // Call parent constructor
        this.breed = breed;
        this.loyalty = 100;
    }
    
    // Override parent method
    makeSound() {
        return `${this.name} barks: Woof! Woof!`;
    }
    
    // New method specific to Dog
    fetch() {
        this.energy -= 10;
        this.loyalty += 5;
        return `${this.name} fetched the ball! Energy: ${this.energy}, Loyalty: ${this.loyalty}`;
    }
    
    // Method that uses parent method
    playAndRest() {
        const fetchResult = this.fetch();
        const sleepResult = this.sleep();
        return `${fetchResult}\n${sleepResult}`;
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, "Feline");
        this.breed = breed;
        this.independence = 80;
    }
    
    makeSound() {
        return `${this.name} meows: Meow!`;
    }
    
    climb() {
        this.energy -= 15;
        return `${this.name} climbed a tree. Energy: ${this.energy}`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Persian");

console.log(dog.makeSound()); // "Buddy barks: Woof! Woof!"
console.log(cat.makeSound()); // "Whiskers meows: Meow!"
console.log(dog.fetch()); // "Buddy fetched the ball! Energy: 90, Loyalty: 105"

// ============================================
// ADVANCED CONCEPTS
// ============================================

// Private fields (ES2022) - truly private
class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.owner = null;
    }
    
    // Private method
    #validateAmount(amount) {
        return amount > 0 && typeof amount === 'number';
    }
    
    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (this.#validateAmount(amount) && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid amount or insufficient funds";
    }
    
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
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// ============================================
// CLASS WITH COMPLEX FUNCTIONALITY
// ============================================

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    
    addTask(title, priority = 'medium') {
        const task = {
            id: this.nextId++,
            title,
            priority,
            completed: false,
            createdAt: new Date(),
            completedAt: null
        };
        this.tasks.push(task);
        return `Task "${title}" added with ID ${task.id}`;
    }
    
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            task.completedAt = new Date();
            return `Task "${task.title}" marked as completed`;
        }
        return "Task not found";
    }
    
    getTasks(filter = 'all') {
        switch(filter) {
            case 'completed':
                return this.tasks.filter(t => t.completed);
            case 'pending':
                return this.tasks.filter(t => !t.completed);
            case 'high':
                return this.tasks.filter(t => t.priority === 'high');
            default:
                return this.tasks;
        }
    }
    
    getTaskStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        
        return {
            total,
            completed,
            pending,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
    
    // Method chaining example
    addMultipleTasks(taskTitles) {
        taskTitles.forEach(title => this.addTask(title));
        return this; // Return 'this' for chaining
    }
    
    displaySummary() {
        const stats = this.getTaskStats();
        console.log(`Task Summary: ${stats.completed}/${stats.total} completed (${stats.completionRate}%)`);
        return this; // Return 'this' for chaining
    }
}

// Using the TaskManager
const taskManager = new TaskManager();

// Method chaining
taskManager
    .addMultipleTasks(['Learn JavaScript', 'Build a project', 'Review code'])
    .displaySummary(); // Task Summary: 0/3 completed (0%)

console.log(taskManager.addTask('Debug application', 'high'));
console.log(taskManager.completeTask(1));
console.log(taskManager.completeTask(2));

taskManager.displaySummary(); // Task Summary: 2/4 completed (50%)

// ============================================
// MIXIN PATTERN (Advanced)
// ============================================

// Mixin for adding logging capability
const LoggerMixin = {
    log(message) {
        console.log(`[${new Date().toISOString()}] ${this.constructor.name}: ${message}`);
    },
    
    logError(error) {
        console.error(`[${new Date().toISOString()}] ${this.constructor.name} ERROR: ${error}`);
    }
};

// Mixin for adding event capability
const EventMixin = {
    on(event, callback) {
        this._events = this._events || {};
        this._events[event] = this._events[event] || [];
        this._events[event].push(callback);
    },
    
    emit(event, data) {
        this._events = this._events || {};
        if (this._events[event]) {
            this._events[event].forEach(callback => callback(data));
        }
    }
};

// Class using mixins
class SmartDevice {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isOn = false;
    }
    
    turnOn() {
        this.isOn = true;
        this.log(`${this.name} turned on`);
        this.emit('deviceOn', { device: this.name, timestamp: new Date() });
    }
    
    turnOff() {
        this.isOn = false;
        this.log(`${this.name} turned off`);
        this.emit('deviceOff', { device: this.name, timestamp: new Date() });
    }
}

// Apply mixins to the class
Object.assign(SmartDevice.prototype, LoggerMixin, EventMixin);

// Using the mixed class
const smartLight = new SmartDevice("Living Room Light", "Light");

smartLight.on('deviceOn', (data) => {
    console.log(`Event: Device ${data.device} was turned on at ${data.timestamp}`);
});

smartLight.turnOn(); 
// Logs: [timestamp] SmartDevice: Living Room Light turned on
// Event: Device Living Room Light was turned on at [timestamp]
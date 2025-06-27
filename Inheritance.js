

// 2. Inheritance 
// What it is: Creating new classes that inherit properties and methods from existing classes.
// Car Example: SportsCar and Truck both inherit from the base Vehicle class. They get all the basic vehicle functionality (start, stop, getInfo) but can add their own specific features (turbo mode, cargo loading).
// Benefits: Code reusability, establishes relationships between classes, reduces duplication.
// ====================================
// 2. INHERITANCE
// ====================================
// Inheritance: Creating new classes based on existing classes

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }
  
  start() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} started`);
  }
  
  stop() {
    this.isRunning = false;
    console.log(`${this.brand} ${this.model} stopped`);
  }
  
  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

// SportsCar inherits from Vehicle
class SportsCar extends Vehicle {
  constructor(brand, model, year, topSpeed) {
    super(brand, model, year); // Call parent constructor
    this.topSpeed = topSpeed;
    this.turboMode = false;
  }
  
  // Additional method specific to SportsCar
  activateTurbo() {
    this.turboMode = true;
    console.log(`${this.brand} ${this.model} turbo activated! Max speed: ${this.topSpeed}km/h`);
  }
  
  // Override parent method
  start() {
    super.start(); // Call parent method
    console.log("Sports car engine roaring!");
  }
}

// Truck also inherits from Vehicle
class Truck extends Vehicle {
  constructor(brand, model, year, cargoCapacity) {
    super(brand, model, year);
    this.cargoCapacity = cargoCapacity;
  }
  
  loadCargo(weight) {
    if (weight <= this.cargoCapacity) {
      console.log(`Loaded ${weight}kg cargo in ${this.brand} ${this.model}`);
    } else {
      console.log(`Cannot load ${weight}kg - max capacity is ${this.cargoCapacity}kg`);
    }
  }
}

console.log("=== INHERITANCE EXAMPLE ===");
const ferrari = new SportsCar("Ferrari", "F8", 2023, 340);
const truck = new Truck("Ford", "F-150", 2022, 1000);

ferrari.start(); // Uses overridden method
ferrari.activateTurbo(); // SportsCar specific method
truck.loadCargo(800); // Truck specific method
console.log(ferrari.getInfo()); // Inherited method

console.log("\n");

//  Abstraction 
// What it is: Hiding complex implementation details and showing only essential features.
// Car Example: The AbstractCar class defines what methods all cars must have (startEngine, accelerate) without specifying how they work. The CarController provides a simple interface - users don't need to know the complex internal workings.
// Benefits: Simplifies complexity, focuses on what objects do rather than how they do it, and provides clear contracts for implementation.
// Each concept serves a specific purpose in making code more organized, maintainable, and scalable!

// ====================================
// 4. ABSTRACTION
// ====================================
// Abstraction: Hiding complex implementation details, showing only essential features

// Abstract base class concept (JavaScript doesn't have built-in abstract classes)
class AbstractCar {
  constructor(brand, model) {
    if (new.target === AbstractCar) {
      throw new Error("Cannot instantiate abstract class AbstractCar");
    }
    this.brand = brand;
    this.model = model;
  }
  
  // Abstract method - must be implemented by subclasses
  startEngine() {
    throw new Error("startEngine() method must be implemented");
  }
  
  // Abstract method
  accelerate() {
    throw new Error("accelerate() method must be implemented");
  }
  
  // Concrete method available to all subclasses
  getCarInfo() {
    return `${this.brand} ${this.model}`;
  }
}

// Concrete implementation
class PetrolCar extends AbstractCar {
  startEngine() {
    console.log(`${this.getCarInfo()}: Ignition started, engine running on petrol`);
  }
  
  accelerate() {
    console.log(`${this.getCarInfo()}: Accelerating with petrol engine`);
  }
}

class HybridCar extends AbstractCar {
  startEngine() {
    console.log(`${this.getCarInfo()}: Hybrid system activated, switching between electric and petrol`);
  }
  
  accelerate() {
    console.log(`${this.getCarInfo()}: Accelerating with hybrid system optimization`);
  }
}

// High-level interface that hides complex details
class CarController {
  static operateCar(car) {
    // User doesn't need to know the complex internal workings
    console.log(`Operating ${car.getCarInfo()}:`);
    car.startEngine(); // Abstract method implemented differently
    car.accelerate();  // Abstract method implemented differently
  }
}

console.log("=== ABSTRACTION EXAMPLE ===");
const petrolCar = new PetrolCar("Toyota", "Corolla");
const hybridCar = new HybridCar("Toyota", "Prius");

// User only needs to know the high-level interface
CarController.operateCar(petrolCar);
console.log("---");
CarController.operateCar(hybridCar);
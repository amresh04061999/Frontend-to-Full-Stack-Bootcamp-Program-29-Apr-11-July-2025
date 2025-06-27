// 1. Encapsulation 
// What it is: Bundling data (properties) and methods together while hiding internal implementation details.
// Car Example: The Car class hides the engine state and fuel level as private fields. You can't directly access #engine or #fuel from outside the class - you must use the provided methods like startEngine() or getFuelLevel().
// Benefits: Protects data integrity, prevents unauthorized access, and provides controlled interaction.

// ====================================
// 1. ENCAPSULATION
// ====================================
// Encapsulation: Bundling data and methods together, hiding internal details

class Car {
  // Private fields (using # for true privacy)
  #engine;
  #fuel;
  
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.#engine = "off";
    this.#fuel = 100;
  }
  
  // Public methods to interact with private data
  startEngine() {
    if (this.#fuel > 0) {
      this.#engine = "on";
      console.log(`${this.brand} ${this.model} engine started!`);
    } else {
      console.log("Cannot start - no fuel!");
    }
  }
  
  drive(distance) {
    if (this.#engine === "on" && this.#fuel > 0) {
      this.#fuel -= distance * 0.1;
      console.log(`Driving ${distance}km. Fuel remaining: ${this.#fuel.toFixed(1)}%`);
    } else {
      console.log("Cannot drive - engine off or no fuel!");
    }
  }
  
  // Getter method (controlled access to private data)
  getFuelLevel() {
    return this.#fuel;
  }
}

console.log("=== ENCAPSULATION EXAMPLE ===");
const myCar = new Car("Toyota", "Camry");
myCar.startEngine();
myCar.drive(50);
console.log(`Fuel level: ${myCar.getFuelLevel()}%`);
// myCar.#fuel = 200; // This would cause an error - private field!

console.log("\n");
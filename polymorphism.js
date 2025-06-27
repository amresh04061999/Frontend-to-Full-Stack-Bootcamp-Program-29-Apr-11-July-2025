// 3. Polymorphism 
// What it is: Same method name, different implementations. Objects of different types can be treated uniformly.
// Car Example: ElectricCar, GasCar, and SportsCar all have a start() method, but each implements it differently. The startAllVehicles() function can work with any car type without knowing the specific implementation.
// Benefits: Flexibility, extensibility, and uniform interfaces.

// ====================================
// 3. POLYMORPHISM
// ====================================
// Polymorphism: Same interface, different implementations

class ElectricCar extends Vehicle {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }
  
  // Override start method with different implementation
  start() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} silently started (Electric)`);
  }
  
  charge() {
    console.log(`Charging ${this.brand} ${this.model} battery...`);
  }
}

class GasCar extends Vehicle {
  constructor(brand, model, year, fuelCapacity) {
    super(brand, model, year);
    this.fuelCapacity = fuelCapacity;
  }
  
  // Override start method with different implementation
  start() {
    this.isRunning = true;
    console.log(`${this.brand} ${this.model} engine started (Gas)`);
  }
  
  refuel() {
    console.log(`Refueling ${this.brand} ${this.model} with gasoline...`);
  }
}

// Polymorphic function - works with any Vehicle type
function startAllVehicles(vehicles) {
  vehicles.forEach(vehicle => {
    vehicle.start(); // Same method call, different behavior
  });
}

console.log("=== POLYMORPHISM EXAMPLE ===");
const tesla = new ElectricCar("Tesla", "Model 3", 2023, 75);
const honda = new GasCar("Honda", "Civic", 2022, 50);
const bmw = new SportsCar("BMW", "M3", 2023, 280);

// Array of different car types
const allVehicles = [tesla, honda, bmw];

// Same method call, different implementations
startAllVehicles(allVehicles);

console.log("\n");
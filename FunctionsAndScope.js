// JavaScript Functions and Scope - Complete Guide

//  1. Function Declarations

//  Function Declaration Syntax
function functionName(parameters) {
    // function body
    return value; // optional
}

// Example
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"


//  Hoisting with Function Declarations
// Functions are hoisted - can be called before declaration
sayHello(); // Works fine

function sayHello() {
    console.log("Hello!");
}


//  2. Function Expressions

//  Anonymous Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20


//  Named Function Expression
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log(factorial(5)); // 120


//  Hoisting with Function Expressions
// This will throw an error - variables are hoisted but not initialized
console.log(myFunc); // undefined
myFunc(); // TypeError: myFunc is not a function

var myFunc = function() {
    console.log("Hello");
};


//  3. Arrow Functions

//  Basic Arrow Function Syntax
// Single parameter, single expression
const square = x => x * x;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const getRandom = () => Math.random();

// Block body
const processData = (data) => {
    const processed = data.map(x => x * 2);
    return processed.filter(x => x > 10);
};


//  Arrow Functions vs Regular Functions
// 'this' binding difference
const obj = {
    name: "Alice",
    regularFunction: function() {
        console.log(this.name); // "Alice"
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (in browser) or error (in Node.js)
    }
};

// No 'arguments' object in arrow functions
function regular() {
    console.log(arguments); // Arguments object
}

const arrow = () => {
    console.log(arguments); // ReferenceError
};


//  4. Function Parameters

//  Default Parameters
function greet(name = "World", punctuation = "!") {
    return `Hello, ${name}${punctuation}`;
}

console.log(greet()); // "Hello, World!"
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "?")); // "Hello, Bob?"

// Default parameters with expressions
function createUser(name, id = Date.now()) {
    return { name, id };
}


//  Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10)); // 15

// Rest parameters with other parameters
function introduce(firstName, lastName, ...hobbies) {
    console.log(`${firstName} ${lastName} likes: ${hobbies.join(", ")}`);
}

introduce("John", "Doe", "reading", "coding", "hiking");


//  Destructuring Parameters
// Object destructuring
function createProfile({name, age, city = "Unknown"}) {
    return `${name}, ${age} years old, from ${city}`;
}

const user = {name: "Alice", age: 30, city: "New York"};
console.log(createProfile(user));

// Array destructuring
function getFullName([first, last]) {
    return `${first} ${last}`;
}

console.log(getFullName(["John", "Smith"])); // "John Smith"


//  5. Return Statements

//  Basic Return
function add(a, b) {
    return a + b; // Explicit return
}

// Functions without return statement return undefined
function noReturn() {
    console.log("No return");
}
console.log(noReturn()); // undefined


//  Multiple Return Points
function checkAge(age) {
    if (age < 0) return "Invalid age";
    if (age < 18) return "Minor";
    if (age < 65) return "Adult";
    return "Senior";
}


//  Returning Objects and Arrays
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            return `Hello, I'm ${this.name}`;
        }
    };
}

function getCoordinates() {
    return [10, 20]; // Returning array
}

// Destructuring return values
const [x, y] = getCoordinates();


//  6. Global Scope

//  Variables in Global Scope
// Global variables
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "I'm global too";

function accessGlobals() {
    console.log(globalVar); // Accessible
    console.log(globalLet); // Accessible
    console.log(globalConst); // Accessible
}

// Global object properties (in browsers: window, in Node.js: global)
var globalProperty = "Attached to global object";
console.log(window.globalProperty); // In browser


//  Global Scope Pollution
// Avoid global scope pollution
(function() {
    var localVar = "Not polluting global scope";
    // Code here doesn't affect global scope
})();

// Or use modules
const MyModule = {
    privateVar: "Encapsulated",
    publicMethod() {
        return this.privateVar;
    }
};


//  7. Function Scope

//  Basic Function Scope
function outerFunction() {
    var functionScoped = "I'm function scoped";
    let alsoFunctionScoped = "Me too";
    
    function innerFunction() {
        console.log(functionScoped); // Accessible
        console.log(alsoFunctionScoped); // Accessible
    }
    
    innerFunction();
}

// console.log(functionScoped); // ReferenceError


//  Variable Hoisting in Function Scope
function hoistingExample() {
    console.log(hoistedVar); // undefined (not ReferenceError)
    console.log(hoistedLet); // ReferenceError (temporal dead zone)
    
    var hoistedVar = "I'm hoisted";
    let hoistedLet = "I'm not hoisted the same way";
}


//  8. Block Scope

//  let and const Block Scope
{
    let blockScoped = "I'm block scoped";
    const alsoBlockScoped = "Me too";
    var functionScoped = "I'm not block scoped";
}

// console.log(blockScoped); // ReferenceError
// console.log(alsoBlockScoped); // ReferenceError
console.log(functionScoped); // Accessible


//  Block Scope in Loops
// Problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// Solution with let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 200); // Prints 0, 1, 2
}

// Block scope in if statements
if (true) {
    let blockVar = "Block scoped";
    const anotherBlockVar = "Also block scoped";
}
// console.log(blockVar); // ReferenceError


//  9. Lexical Scope

//  Understanding Lexical Scope
const globalVar = "global";

function outerFunction() {
    const outerVar = "outer";
    
    function innerFunction() {
        const innerVar = "inner";
        console.log(globalVar); // "global" - from global scope
        console.log(outerVar);  // "outer" - from outer function scope
        console.log(innerVar);  // "inner" - from current scope
    }
    
    innerFunction();
}

outerFunction();


//  Lexical Scope Chain
function level1() {
    const level1Var = "Level 1";
    
    function level2() {
        const level2Var = "Level 2";
        
        function level3() {
            const level3Var = "Level 3";
            console.log(level1Var); // Accessible through scope chain
            console.log(level2Var); // Accessible
            console.log(level3Var); // Accessible
        }
        
        level3();
    }
    
    level2();
}


//  10. Closures

//  Basic Closure
function outerFunction(x) {
    // This is the outer function's scope
    
    function innerFunction(y) {
        // This inner function has access to x
        return x + y;
    }
    
    return innerFunction; // Return the inner function (closure)
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 - closure remembers x = 5


//  Practical Closure Examples
// Counter using closure
function createCounter() {
    let count = 0;
    
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2

// Private variables with closures
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }
            return "Insufficient funds";
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120


 Closure in Loops
// Problem: All functions share the same variable
var functions = [];
for (var i = 0; i < 3; i++) {
    functions[i] = function() {
        return i; // All return 3
    };
}

// Solution 1: Use IIFE
var functions2 = [];
for (var i = 0; i < 3; i++) {
    functions2[i] = (function(index) {
        return function() {
            return index;
        };
    })(i);
}

// Solution 2: Use let
var functions3 = [];
for (let i = 0; i < 3; i++) {
    functions3[i] = function() {
        return i; // Each closure captures its own i
    };
}


//  11. Hoisting

//  Variable Hoisting
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = "I'm hoisted";

// What actually happens:
// var hoistedVar; // Declaration is hoisted
// console.log(hoistedVar); // undefined
// hoistedVar = "I'm hoisted"; // Assignment stays in place


//  let and const Hoisting (Temporal Dead Zone)
console.log(letVar); // ReferenceError
console.log(constVar); // ReferenceError

let letVar = "Let variable";
const constVar = "Const variable";

// Temporal Dead Zone example
function temporalDeadZone() {
    console.log(typeof myLet); // ReferenceError (not "undefined")
    
    let myLet = "Hello";
}


//  Function Hoisting
// Function declarations are fully hoisted
console.log(hoistedFunction()); // "I'm hoisted!"

function hoistedFunction() {
    return "I'm hoisted!";
}

// Function expressions are not hoisted
console.log(notHoisted); // undefined
console.log(notHoisted()); // TypeError

var notHoisted = function() {
    return "I'm not hoisted";
};


//  12. this Keyword

//  Global Context
console.log(this); // Window object in browser, global in Node.js

function globalFunction() {
    console.log(this); // Window object (non-strict) or undefined (strict)
}


//  Object Method Context
const person12 = {
    name: "Alice",
    greet: function() {
        console.log(this.name); // "Alice"
    },
    arrowGreet: () => {
        console.log(this.name); // undefined (arrow functions don't have their own 'this')
    }
};

person.greet(); // "Alice"
person.arrowGreet(); // undefined


//  Explicit Binding (call, apply, bind)
function introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
}

const person1 = { name: "Alice", age: 30 };
const person2 = { name: "Bob", age: 25 };

// call
introduce.call(person1); // "Hi, I'm Alice and I'm 30 years old"
introduce.call(person2); // "Hi, I'm Bob and I'm 25 years old"

// apply
function fullIntro(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

fullIntro.apply(person1, ["Hello", "!"]); // "Hello, I'm Alice!"

// bind
const boundIntro = introduce.bind(person1);
boundIntro(); // "Hi, I'm Alice and I'm 30 years old"


//  Constructor Context
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, I'm ${this.name}`);
    };
}

const alice = new Person("Alice", 30);
alice.greet(); // "Hello, I'm Alice"


//  Event Handler Context
// In browser environment
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(this); // The button element
});

button.addEventListener('click', () => {
    console.log(this); // Window object (arrow function)
});


//  13. call, apply, and bind

//  call() Method
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

// Using call
const result = greet.call(person, "Hello", "!");
console.log(result); // "Hello, Alice!"

// Borrowing methods
const obj1 = { name: "Object 1" };
const obj2 = { 
    name: "Object 2",
    getName: function() {
        return this.name;
    }
};

console.log(obj2.getName.call(obj1)); // "Object 1"


//  apply() Method
function sum(a, b, c) {
    console.log(`Sum for ${this.name}: ${a + b + c}`);
}

const calculator = { name: "Calculator" };
const numbers1 = [1, 2, 3];

sum.apply(calculator, numbers1); // "Sum for Calculator: 6"

// Finding max in array
const numbers2 = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers2);
console.log(max); // 7


//  bind() Method
function multiply(a, b) {
    return `${this.name} result: ${a * b}`;
}

const mathTool = { name: "Math Tool" };

// Create bound function
const boundMultiply = multiply.bind(mathTool);
console.log(boundMultiply(3, 4)); // "Math Tool result: 12"

// Partial application with bind
const multiplyByTwo = multiply.bind(mathTool, 2);
console.log(multiplyByTwo(5)); // "Math Tool result: 10"

// Common use case: Event handlers
class ButtonHandler {
    constructor(name) {
        this.name = name;
        this.clickCount = 0;
    }
    
    handleClick() {
        this.clickCount++;
        console.log(`${this.name} clicked ${this.clickCount} times`);
    }
    
    attachToButton(button) {
        // Without bind, 'this' would refer to the button
        button.addEventListener('click', this.handleClick.bind(this));
    }
}


//  14. Immediately Invoked Function Expressions (IIFE)

//  Basic IIFE Syntax
// Function expression wrapped in parentheses and immediately invoked
(function() {
    console.log("IIFE executed!");
})();

// Alternative syntax
(function() {
    console.log("Alternative IIFE syntax!");
}());

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE!");
})();


//  IIFE with Parameters
(function(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
})("Alice", 30);

// Passing global objects
(function($, window, document) {
    // Use $ instead of jQuery
    // Protects against $ being undefined
})( window.jQuery, window, document);


//  IIFE for Module Pattern
const MyModule1 = (function() {
    // Private variables and functions
    let privateVar = 0;
    
    function privateFunction() {
        return "This is private";
    }
    
    // Public API
    return {
        publicMethod() {
            privateVar++;
            return `Public method called ${privateVar} times`;
        },
        
        getPrivateVar() {
            return privateVar;
        }
    };
})();

console.log(MyModule.publicMethod()); // "Public method called 1 times"
console.log(MyModule.getPrivateVar()); // 1
// console.log(MyModule.privateVar); // undefined


//  IIFE to Avoid Global Pollution
// Without IIFE - pollutes global scope
var helper1 = function() { /* ... */ };
var helper2 = function() { /* ... */ };
var mainFunction = function() { /* ... */ };

// With IIFE - clean global scope
(function() {
    var helper1 = function() { /* ... */ };
    var helper2 = function() { /* ... */ };
    
    // Only expose what's necessary
    window.MyLibrary = function() {
        // Main functionality
    };
})();


//  15. Recursive Functions

//  Basic Recursion
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


//  Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55

// Optimized with memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}


//  Tree Traversal
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] }
            ]
        }
    ]
};

function traverseTree(node) {
    console.log(node.value);
    
    for (let child of node.children) {
        traverseTree(child); // Recursive call
    }
}

traverseTree(tree); // 1, 2, 4, 5, 3, 6


//  Tail Recursion Optimization
// Not tail recursive (operation after recursive call)
function factorialNormal(n) {
    if (n <= 1) return 1;
    return n * factorialNormal(n - 1); // Multiplication happens after return
}

// Tail recursive (recursive call is the last operation)
function factorialTail(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator); // No operation after recursive call
}

console.log(factorialTail(5)); // 120


//  16. Higher-Order Functions

//  Functions that Accept Functions
function calculate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(add, 5, 3)); // 8
console.log(calculate(multiply, 5, 3)); // 15

// Array methods are higher-order functions
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, x) => acc + x, 0); // 15


//  Functions that Return Functions
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double1 = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double1(5)); // 10
console.log(triple(5)); // 15

// Currying
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function addThree(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(addThree);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6


//  Function Composition
const compose = (f, g) => (x) => f(g(x));

const addOne = x => x + 1;
const double = x => x * 2;

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(3)); // 8 (3 + 1 = 4, 4 * 2 = 8)

// Multiple function composition
const pipe = (...functions) => (value) => 
    functions.reduce((acc, func) => func(acc), value);

const addOneThenDoubleeThenSquare = pipe(
    x => x + 1,
    x => x * 2,
    x => x * x
);

console.log(addOneThenDoubleeThenSquare(2)); // 36 ((2+1)*2)² = 6² = 36


//  17. Callback Functions

//  Basic Callbacks
function processData(data, callback) {
    const processed = data.toUpperCase();
    callback(processed);
}

function handleResult(result) {
    console.log(`Result: ${result}`);
}

processData("hello world", handleResult); // "Result: HELLO WORLD"

// Anonymous callback
processData("javascript", function(result) {
    console.log(`Processed: ${result}`);
}); // "Processed: JAVASCRIPT"


//  Asynchronous Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Received:", data);
});

// Error handling with callbacks
function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5 ? null : new Error("Fetch failed");
        const data = error ? null : { id: 1, name: "Bob" };
        callback(error, data);
    }, 1000);
}

fetchDataWithError(function(error, data) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Success:", data);
    }
});


//  Callback Hell and Solutions
// Callback hell example
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getFinalData(c, function(d) {
                // Finally do something with d
                console.log(d);
            });
        });
    });
});

// Solution: Named functions
function handleFinalData(d) {
    console.log(d);
}

function handleEvenMoreData(c) {
    getFinalData(c, handleFinalData);
}

function handleMoreData(b) {
    getEvenMoreData(b, handleEvenMoreData);
}

function handleInitialData(a) {
    getMoreData(a, handleMoreData);
}

getData(handleInitialData);


//  Event Callbacks
// In browser environment
button.addEventListener('click', function(event) {
    console.log('Button clicked!', event);
});

// Custom event system
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

const emitter = new EventEmitter();
emitter.on('data', (data) => console.log('Received:', data));
emitter.emit('data', 'Hello World');


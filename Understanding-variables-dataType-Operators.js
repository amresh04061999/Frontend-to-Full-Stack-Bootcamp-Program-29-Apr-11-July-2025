// JavaScript Fundamentals: Variables, Data Types, and Operators

// 1. Variables
// Variables are containers for storing data values. In JavaScript, there are three ways to declare variables:

// `var` (older method)

// Example
var name = "John";
var age = 30;

/* Description */
// -Function scoped (not block scoped)
// -Can be redeclared and updated
// -Hoisted to the top of their scope

`let` (ES6)
// Example
let name = "John";
let age = 30;

/* Description */
// -Block scoped
// -Can be updated but not redeclared in the same scope
// -Not hoisted in the same way as var

`const` (ES6)

// Example
const PI = 3.14;
const MAX_SIZE = 100;

  /* Description */
// - Block scoped
// - Cannot be updated or redeclared
// - Must be initialized at declaration
// - For objects and arrays, the content can be modified but not the reference

   /* Variable Naming Rules */
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Cannot start with a number
// - Can contain letters, numbers, underscores, or dollar signs
// - Case-sensitive
// - Cannot use reserved keywords

// Example Scope
// Global scope
let globalVar = "I'm global";

function myFunction() {
  // Function scope
  let functionVar = "I'm function-scoped";
  
  if (true) {
    // Block scope
    let blockVar = "I'm block-scoped";
    var notBlockVar = "I'm not block-scoped";
    console.log(blockVar); // Accessible
  }
  console.log(notBlockVar); // Accessible
  console.log(blockVar); // Error: blockVar is not defined
}


//  2. Data Types : JavaScript has 8 basic data types:

// Primitive Data Types

//  1. Number
// Example
let integer = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;
let scientific = 1e6; // 1,000,000


//  2. String
// Example
let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Hello ${singleQuote}`;  // Template literals (ES6)

let str4 = " Hello JavaScript World! ";
let num4 = "5";
let s = "apple banana apple";

// 1. length
console.log(str4.length); // 26

// 2. charAt(index)
console.log(str4.charAt(7)); // J

// 3. charCodeAt(index)
console.log(str4.charCodeAt(7)); // 74

// 4. concat()
console.log(str4.concat(" Enjoy coding!")); // " Hello JavaScript World!  Enjoy coding!"

// 5. includes()
console.log(str4.includes("JavaScript")); // true

// 6. endsWith()
console.log(str4.endsWith("World! ")); // true

// 7. startsWith()
console.log(str4.startsWith(" Hello")); // true

// 8. indexOf()
console.log(str4.indexOf("Java")); // 7

// 9. lastIndexOf()
console.log(str4.lastIndexOf("o")); // 21

// 10. slice(start, end)
console.log(str4.slice(7, 17)); // "JavaScript"

// 11. substring(start, end)
console.log(str4.substring(7, 17)); // "JavaScript"

// 12. substr(start, length) (deprecated)
console.log(str4.substr(7, 10)); // "JavaScript"

// 13. toUpperCase()
console.log(str4.toUpperCase()); // " HELLO JAVASCRIPT WORLD! "

// 14. toLowerCase()
console.log(str4.toLowerCase()); // " hello javascript world! "

// 15. trim()
console.log(str4.trim()); // "Hello JavaScript World!"

// 16. trimStart() or trimLeft()
console.log(str4.trimStart()); // "Hello JavaScript World! "

// 17. trimEnd() or trimRight()
console.log(str4.trimEnd()); // " Hello JavaScript World!"

// 18. replace(search, replacement)
console.log(str4.replace("World", "Universe")); // " Hello JavaScript Universe! "

// 19. replaceAll(search, replacement)
console.log(str4.replaceAll("apple", "orange")); // "orange banana orange"

// 20. split(separator)
console.log(str4.trim().split(" ")); // [ 'Hello', 'JavaScript', 'World!' ]

// 21. repeat(count)
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// 22. padStart(targetLength, padString)
console.log(num4.padStart(4, "0")); // "0005"

// 23. padEnd(targetLength, padString)
console.log(num4.padEnd(4, "0")); // "5000"

// 24. match(regex)
console.log(str4.match(/JavaScript/)); // [ 'JavaScript', index: 7, ... ]

// 25. matchAll(regex)
let matches = [...str4.matchAll(/o/g)];
console.log(matches.map(m => m.index)); // [ 4, 21 ]

// 26. search(regex)
console.log(str4.search(/Script/)); // 11

// 27. localeCompare()
console.log("apple".localeCompare("banana")); // -1

// 28. toString()
console.log(str4.toString()); // " Hello JavaScript World! "

// 29. valueOf()
console.log(str4.valueOf()); // " Hello JavaScript World! "

// 30. normalize()
let accented = '\u00E9'; // é
let decomposed = '\u0065\u0301'; // e + ́
console.log(accented === decomposed); // false
console.log(accented.normalize() === decomposed.normalize()); // true


//  3. Boolean
// Example
let isTrue = true;
let isFalse = false;

// Truthy and falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy


//  4. Undefined:
// It means a variable has been declared but not assigned any value yet. 
// You should prefer using null when you want to explicitly clear or empty a variable.
 // Example
// Case 1: Variable declared but not initialized
let undefinedVar;
console.log(undefinedVar); // Output: undefined

// Case 2: Function with no return statement
function doNothing() {}
let result = doNothing();
console.log(result); // Output: undefined

// Case 3: Accessing non-existent object property
let person4 = { name: "Amresh" };
console.log(person4.age); // Output: undefined

// Case 4: Array element not assigned
let arr12 = [1, , 3]; // missing index 1
console.log(arr12[1]); // Output: undefined

// Case 5: Manually assigning undefined (not recommended)
let z = undefined;
console.log(z); // Output: undefined


//  5. Null
// null represents the intentional absence of any object value.
// It is explicitly assigned by the programmer to indicate "no value".
// It is different from undefined (which means a variable has not been assigned a value yet).
 // Example
// Case 1: Variable explicitly set to null
let emptyValue = null;
console.log(emptyValue); // Output: null

// Case 2: Resetting an object property to null
let user = {
  name: "Amresh",
  age: 25
};

// Let's say we want to clear the user's age
user.age = null;
console.log(user); // Output: { name: 'Amresh', age: null }

// Case 3: Checking for null
if (emptyValue === null) {
  console.log("The value is null"); // Output: The value is null
}

// Case 4: null is falsy
if (!emptyValue) {
  console.log("null is treated as false in boolean context"); 
}

// Case 5: Type of null (this is a known JavaScript quirk)
console.log(typeof null); // Output: "object"


//  6. Symbol (ES6)
// Symbol is a primitive data type that represents a unique identifier.
// Useful for avoiding property name collisions in objects.
// Symbol properties are not visible in typical loops or Object.keys, making them somewhat hidden.
 // Example
// Creating Symbols
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");

console.log(symbol1);         // Output: Symbol(description)
console.log(typeof symbol1);  // Output: "symbol"

// Each Symbol is unique, even if the description is the same
console.log(symbol1 === symbol2); // Output: false

// Using Symbol as object property keys
let user = {
  name: "Amresh"
};

let id = Symbol("userID");
user[id] = 101;

console.log(user); // { name: 'Amresh', [Symbol(userID)]: 101 }

// Symbols are not enumerable in for...in or Object.keys
for (let key in user) {
  console.log(key); // Only "name" will be logged, not the symbol
}
console.log(Object.keys(user)); // ["name"]

// To access symbol keys
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(userID) ]



//  7. BigInt (ES2020)
 // Example
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigNumber = BigInt("1234567890123456789012345678901234567890");


//  Non-Primitive (Reference) Data Type
//  8. Object
// Object literal
// Example
let person1 = {
  name: "John",
  age: 30,
  isStudent: false
};

// Accessing properties
console.log(person.name); // John
console.log(person["age"]); // 30

// Arrays (special type of object)
let fruit = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// Functions (also objects)
function greet() {
  return "Hello!";
}

// Date object
let today = new Date();

// Type Checking and Conversion
//  Checking Types
// Example
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known bug)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"


//  Type Conversion
// Example
// String to Number
let numStr = "42";
let num2 = parseInt(numStr); // 42
let num3 = +numStr; // 42

// Number to String
let num1 = 42;
let str = String(num); // "42"
let str2 = num.toString(); // "42"
let str3 = num + ""; // "42"

// To Boolean
let bool1 = Boolean(1); // true
let bool2 = !!0; // false


//  3. Operators

// Arithmetic Operators
// Example
let a1 = 10;
let b1 = 3;

console.log(a1 + b1); // 13 (a1ddition)
console.log(a1 - b1); // 7 (Sub1tra1ction)
console.log(a1 * b1); // 30 (Multiplica1tion)
console.log(a1 / b1); // 3.3333... (Division)
console.log(a1 % b1); // 1 (Modulus - rema1inder)
console.log(a1 ** b1); // 1000 (Exponentiation - ES2016)

// Increment and Decrement
let c1= 5;
console.log(c1++); // 5 (post-inc1rement: returns then inc1rements)
console.log(c); // 6
console.log(++c); // 7 (pre-increment: increments then returns)

let d = 5;
console.log(d--); // 5 (post-decrement)
console.log(d); // 4
console.log(--d); // 3 (pre-decrement)


// Assignment Operators
let x1 = 10; // Simple assignment

// Compound assignment operators
x1 += 5; // x1 = x1 + 5 (15)
x1 -= 3; // x1 = x1 - 3 (12)
x1 *= 2; // x1 = x1 * 2 (24)
x1 /= 4; // x1 = x1 / 4 (6)
x1 %= 4; // x1 = x1 % 4 (2)
x1 **= 3; // x1 = x1 ** 3 (8)


// Comparison Operators
let a2= 5;
let b2 = "5";

// Regular comparison operators
console.log(a2 > 3); // true
console.log(a2 < 3); // fa2lse
console.log(a2 >= 5); // true
console.log(a2 <= 4); // false

// Equality operators
console.log(a2 == b2); // true (loose equality, converts types)
console.log(a2 === b2); // false (strict equality, checks types and values)
console.log(a2 != b2); // false (loose inequality)
console.log(a2 !== b2); // true (strict inequality)


// Logical Operators
let x = 5;
let y = 10;

// AND operator
console.log(x > 0 && y > 0); // true (both are true)
console.log(x > 10 && y > 0); // false (one is false)

// OR operator
console.log(x > 0 || y > 0); // true (at least one is true)
console.log(x > 10 || y > 0); // true (at least one is true)
console.log(x > 10 || y > 20); // false (both are false)

// NOT operator
console.log(!true); // false
console.log(!(x > 10)); // true

// Short-circuit evaluation
let result1 = true && "Hello"; // "Hello"
let result2 = false && "Hello"; // false
let result3 = true || "Hello"; // true
let result4 = false || "Hello"; // "Hello"


// Conditional (Ternary) Operator
let age = 20;
let message = age >= 18 ? "You can vote" : "Too young to vote";
console.log(message); // "You can vote"


// String Operators
// Concatenation
let firstName1 = "John";
let lastName1 = "Doe";
let fullName = firstName1 + " " + lastName1; // "John Doe"

// ES6 template literals
let greeting = `Hello, ${firstName1} ${lastName1}!`; // "Hello, John Doe!"


// Bitwise Operators
let a3 = 5;  // Binary: 101
let b3 = 3;  // Binary: 011

console.log(a3& b3);  // 1 (AND: 001)
console.log(a3 | b3);  // 7 (OR: 111)
console.log(a3 ^ b3);  // 6 (XOR: 110)
console.log(~a3);     // -6 (NOT: inverts all bits)
console.log(a3 << 1); // 10 (Left Shift: 1010)
console.log(a3 >> 1); // 2 (Right Shift: 10)
console.log(a3 >>> 1); // 2 (Zero-fill Right Shift)


// Type Operators
// instanceof (checks if object is an instance of a specific class)
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true

// in (checks if property exists in object)
let person = { name: "John", age: 30 };
console.log("name" in person); // true
console.log("gender" in person); // false


// Nullish Coalescing Operator (??) - ES2020
// Returns right-hand side only when left is null or undefined
let name = null;
let username = name ?? "Guest"; // "Guest"

let count = 0;
let defaultCount = count ?? 10; // 0 (because 0 is not null or undefined)


// Optional Chaining (?.) - ES2020
let user = {
  profile: {
    name: "John"
  }
};

// Without optional chaining
// let city = user.address && user.address.city; // undefined

// With optional chaining
let city = user.address?.city; // undefined (no error)
let name = user.profile?.name; // "John"


// Spread and Rest Operators (...) - ES6
javascript
// Spread (expands arrays or objects)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }

// Rest (collects multiple elements)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// Destructuring Assignment - ES6
javascript
// Array destructuring
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Object destructuring
let { name, age } = { name: "John", age: 30 };
console.log(name, age); // John 30


// 4. Type Coercion

// JavaScript performs automatic type conversion when operators are applied to different types:

javascript
// String and number
console.log("5" + 3); // "53" (number is converted to string)
console.log("5" - 3); // 2 (string is converted to number)
console.log("5" * 3); // 15 (string is converted to number)

// Boolean conversion
console.log(5 + true); // 6 (true is converted to 1)
console.log(5 + false); // 5 (false is converted to 0)

// Equality operators and type coercion
console.log("5" == 5); // true (type coercion happens)
console.log("5" === 5); // false (no type coercion with ===)
console.log("0" == false); // true (both convert to 0)
console.log("0" === false); // false (different types)


//  5. Common Operations and Examples
// Working with Strings
let text = "JavaScript is awesome";

// Length
console.log(text.length); // 21

// Accessing characters
console.log(text[0]); // "J"
console.log(text.charAt(0)); // "J"

// Finding substrings
console.log(text.indexOf("Script")); // 4
console.log(text.includes("awesome")); // true

// Modifying strings
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(text.toLowerCase()); // "javascript is awesome"
console.log(text.replace("awesome", "amazing")); // "JavaScript is amazing"

// Extracting substrings
console.log(text.substring(0, 10)); // "JavaScript"
console.log(text.slice(11)); // "is awesome"

// Splitting
console.log(text.split(" ")); // ["JavaScript", "is", "awesome"]

// Trimming
let paddedText = "  Hello  ";
console.log(paddedText.trim()); // "Hello"


// Working with Numbers
// Number methods
let num = 123.456;

console.log(num.toFixed(2)); // "123.46" (string)
console.log(num.toPrecision(4)); // "123.5" (string)
console.log(num.toString()); // "123.456"
console.log(parseInt("123.456")); // 123
console.log(parseFloat("123.456")); // 123.456

// Math object
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4


// Working with Arrays
let fruits = ["Apple", "Banana", "Orange"];

// Adding/removing elements
fruits.push("Mango"); // Adds to end: ["Apple", "Banana", "Orange", "Mango"]
fruits.pop(); // Removes from end: ["Apple", "Banana", "Orange"]
fruits.unshift("Strawberry"); // Adds to beginning: ["Strawberry", "Apple", "Banana", "Orange"]
fruits.shift(); // Removes from beginning: ["Apple", "Banana", "Orange"]

// Finding elements
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Mango")); // false

// Transforming arrays
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
let even = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((total, num) => total + num, 0); // 15

// Other useful methods
console.log(fruits.join(", ")); // "Apple, Banana, Orange"
console.log(fruits.slice(1, 3)); // ["Banana", "Orange"]

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Array spread syntax
let combinedArray = [...fruits, ...numbers]; // ["Apple", "Banana", "Orange", 1, 2, 3, 4, 5]


// Working with Objects
let person2= {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing properties
console.log(person2.firstName); // "John"
console.log(person2["lastName"]); // "Doe"
console.log(person2.address.city); // "Anytown"
console.log(person2.fullName()); // "John Doe"

// Modifying objects
person2.age = 31;
person2.email = "john@example.com"; // Adding new property

// Object methods
console.log(Object.keys(person2)); // ["firstName", "lastName", "age", "address", "fullName", "email"]
console.log(Object.values(person2)); // ["John", "Doe", 31, {...}, f, "john@example.com"]
console.log(Object.entries(person2)); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Spread syntax with objects
let employee = {
  ...person2,
  employeeId: "E123",
  department: "Engineering"
};

// Object destructuring with default values
let { firstName, lastName, salary = 0 } = person;
console.log(firstName, lastName, salary); // "John" "Doe" 0


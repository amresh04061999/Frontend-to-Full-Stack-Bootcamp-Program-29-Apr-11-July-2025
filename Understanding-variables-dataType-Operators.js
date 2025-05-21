// JavaScript Fundamentals: Variables, Data Types, and Operators

// 1. Variables
   /* Variable Naming Rules */
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Cannot start with a number
// - Can contain letters, numbers, underscores, or dollar signs
// - Case-sensitive
// - Cannot use reserved keywords

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



// Example Scope
// Global scope
let globalVar = "I'm global";

function myFunction() {
  // Function scope
  let functionVar = "I'm function-scoped";
  console.log(globalVar);   // Accessible 
  
  if (true) { 
    console.log(functionVar); // Accessible
    // Block scope
    let blockVar = "I'm block-scoped";
    var notBlockVar = "I'm not block-scoped";
    console.log(blockVar); // Accessible
  }
  console.log(blockVar); // Error: blockVar is not defined
  console.log(notBlockVar); // Accessible
}
 console.log(globalVar); // Accessible
 console.log(functionVar); // Error: functionVar is not defined
console.log(notBlockVar); // Accessible

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
let backticks = `Hello ${singleQuote} ${doubleQuote}`;  // Template literals (ES6)
let singleQuote1 = 'Hello\nWorld' + singleQuote + ' ';  // Multiline string
let str4 = " Hello JavaScript World! ";   
let num4 = "5";
let s = "apple banana apple";


// Sting methods
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
console.log(a2 < 3); // false
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


//Destructuring Assignment - ES6
javascript
// Array destructuring
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Object destructuring
let { name, age } = { name: "John", age: 30 };
console.log(name, age); // John 30


// 4. Type Coercion

// JavaScript performs automatic type conversion when operators are applied to different types:
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

// 1.push() – Add an element to the end of the array.

let fruits2 = ["Apple", "Banana"];
fruits2.push("Orange");
console.log(fruits2); // ["Apple", "Banana", "Orange"] Adds "Orange" at the end of the fruits array.


// 2. pop() – Remove the last element from the array.

let fruit3 = ["Apple", "Banana", "Orange"];
fruit3.pop(); // One time one item remove
console.log(fruit3); // ["Apple", "Banana"] Removes the last item "Orange"

// 3.unshift() – Add an element to the beginning of the array.

let fruits4 = ["Banana", "Orange"];
fruits4.unshift("Apple");
console.log(fruits4); // ["Apple", "Banana", "Orange"] Adds "Apple" to the beginning.
  
// 4. shift() – Remove the first element from the array.
let fruit4 = ["Apple", "Banana", "Orange"];
fruit4.shift();
console.log(fruit4); // ["Banana", "Orange"] Removes the first item "Apple".

// 5. includes() – Check if an item exists in the array.

let fruit5 = ["Apple", "Banana"];
console.log(fruit5.includes("Banana")); // true
console.log(fruit5.includes("Mango"));  // false
// Returns true if found, otherwise false.

// 6. indexOf() – Get the first index of an item.
let fruit6 = ["Apple", "Banana", "Orange", "Banana"];
console.log(fruit6.indexOf("Banana")); // 1
// Returns the index of the first "Banana".

//  7. lastIndexOf() – Get the last index of an item.
let fruits = ["Apple", "Banana", "Orange", "Banana"];
console.log(fruits.lastIndexOf("Banana")); // 3  Returns the last occurrence index of "Banana"

//  8. find() – Find the first element that matches a condition.

let numbers = [1, 3, 5, 8, 10];
let result5 = numbers.find(num => num > 5);
console.log(result5); // 8  Returns first number greater than 5.


// 9. findIndex() – Find the index of the first matching element.
let numbers1 = [1, 3, 5, 8, 10];
let index = numbers1.findIndex(num => num > 5);
console.log(index); // 3  Returns index of first number greater than 8.

// 10. forEach() – Loop through each element.
let fruits6 = ["Apple", "Banana", "Orange"];
  fruits6.forEach((fruits6, index) => {
  console.log(`${index}: ${fruits6}`);
});
// 0: Apple
// 1: Banana
// 2: Orange

// 11. map() – Transform each element in the array.
let numbers3 = [1, 2, 3];
let doubled = numbers3.map(num => num * 2);
console.log(doubled); // [2, 4, 6] Each number is multiplied by 2. map() returns a new array.

// 12. filter() – Return elements that match a condition.
let numbers5 = [1, 2, 3, 4, 5];
let even = numbers5.filter(num => num % 2 === 0);
console.log(even); // [2, 4]  Only even numbers are returned.

// 13. reduce() – Reduce array to a single value.
let numbers4 = [1, 2, 3, 4];
let sum = numbers4.reduce((total, num) => total + num, 0);
console.log(sum); // 10 Adds all numbers together.

// 14. some() – Returns true if any element matches.
let numbers6 = [1, 2, 3, 4];
console.log(numbers6.some(num => num > 3)); // true

//  15. every() – Returns true if all elements match
let number8 = [2, 4, 6];
console.log(number8.every(num => num % 2 === 0)); // true

// 16. slice(start, end) – Get a portion of the array.
let fruitsD = ["Apple", "Banana", "Orange", "Mango"];
let result8 = fruitsD.slice(1, 3);
console.log(result8); // ["Banana", "Orange"] end index is not included.

// 17. splice() – Add/remove items in-place.
let fruitsT = ["Apple", "Banana", "Orange"];
fruitsT.splice(1, 1, "Mango"); // Remove 1 at index 1, add "Mango"
console.log(fruitsT); // ["Apple", "Mango", "Orange"]

//  18. join() – Join array into a string.
let fruitsG = ["Apple", "Banana", "Orange"];
console.log(fruitsG.join(", ")); // "Apple, Banana, Orange"

//  19. concat() – Combine two arrays.
let a5 = [1, 2];
let b5 = [3, 4];
let combined = a5.concat(b5);
console.log(combined); // [1, 2, 3, 4]

// 20. flat() – Flatten nested arrays.
let arr3 = [1, [2, 3], [4, [5]]];
console.log(arr3.flat()); // [1, 2, 3, 4, [5]]
console.log(arr3.flat(2)); // [1, 2, 3, 4, 5]

//  21. reverse() – Reverse array in place.
let arr4 = [1, 2, 3];
arr4.reverse();
console.log(arr4); // [3, 2, 1]

// 22. sort() – Sort elements (lexical by default).

let fruits11 = ["Banana", "Apple", "Orange"];
fruits11.sort();
console.log(fruits11); // ["Apple", "Banana", "Orange"]
let numbers12 = [10, 2, 5];

// Sorting numbers
numbers12.sort((a, b) => a - b);
console.log(numbers12); // [2, 5, 10]

// 23. Spread Operator (...) – Copy or combine arrays.
let arr11 = [1, 2];
let arr14 = [3, 4];
let combined1 = [...arr11, ...arr14];
console.log(combined1); // [1, 2, 3, 4]


// 24. Rest Parameter – Group remaining values into an array.
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // 6
// 25. Array Destructuring – Unpack values.

let fruits12 = ["Apple", "Banana", "Orange"];
let [first, second] = fruits12;
console.log(first); // "Apple"
console.log(second); // "Banana"

// 26. fill() – Fill array with a static value.
let arr15 = new Array(4).fill(0);
console.log(arr15); // [0, 0, 0, 0]

// 27. from() – Create array from iterable (e.g., string).
let str1 = "hello";
let chars = Array.from(str1);
console.log(chars); // ["h", "e", "l", "l", "o"]

// 28. isArray() – Check if value is an array.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
  
// 29. reduceRight()
let nums = [1, 2, 3];
let result12 = nums.reduceRight((a, b) => a - b);
console.log(result12); // 0 => ((3 - 2) - 1)


// 30.flatMap()
let nums12 = [1, 2, 3];
let result11 = nums12.flatMap(n => [n, n * 2]);
console.log(result11); // [1, 2, 2, 4, 3, 6]

// 31. copyWithin()
let arr21 = [1, 2, 3, 4, 5];
arr21.copyWithin(1, 3); 
console.log(arr21); // [1, 4, 5, 4, 5]

// 32. Array.of()
let arr213 = Array.of(10, 20, 30);
console.log(arr213); // [10, 20, 30]

// 33. toReversed() (ES2023)
let arr22 = [1, 2, 3];
let reversed = arr22.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(arr22);      // [1, 2, 3] - original is not changed


// 34. toSorted() (ES2023)
let arr212 = [3, 1, 2];
let sorted = arr212.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(arr212);    // [3, 1, 2]

// 35. toSpliced() (ES2023)
let arr221 = [1, 2, 3, 4];
let newArr = arr221.toSpliced(1, 2);
console.log(newArr); // [1, 4]
console.log(arr221);    // [1, 2, 3, 4]

// 36. with() (ES2023)
let arr2121 = [1, 2, 3];
let updated = arr2121.with(1, 99);
console.log(updated); // [1, 99, 3]
console.log(arr2121);     // [1, 2, 3]
// 37. at() (ES2022)
let arr23 = [1, 2, 3];
console.log(arr23.at(1)); // 2
console.log(arr23.at(-1)); // 3 (last element)

// 38. entries() – Returns an iterator of key-value pairs.
let arr24 = ["a", "b", "c"];      
let iterator = arr24.entries();
for (let [index, value] of iterator) {
  console.log(index, value); // 0 "a", 1 "b", 2 "c"
}
// 39. keys() – Returns an iterator of keys.
let arr25 = ["a", "b", "c"];
let keysIterator = arr25.keys();
for (let key of keysIterator) {
  console.log(key); // 0, 1, 2
}
// 40. values() – Returns an iterator of values.
let arr26 = ["a", "b", "c"];
let valuesIterator = arr26.values();
for (let value of valuesIterator) {
  console.log(value); // "a", "b", "c"
}

// Working with Objects
// 1. Creating an Object
let person12 = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

//2. Nested Objects WITH Methods
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
//  3. Accessing Properties
console.log(person2.firstName); // "John"
console.log(person2["lastName"]); // "Doe"
console.log(person2.address.city); // "Anytown"
console.log(person2.fullName()); // "John Doe"

//  4. Adding Properties  
person2.email = "amresh1098@gmail.com"  
console.log(person2.email); // "amresh1098@gmail.com"

// 4.Modifying objects
person2.age = 31;
person2.email = "john@example.com"; // Adding new property
delete person.age; // delete

// Object methods 
console.log(Object.keys(person2)); // ["firstName", "lastName", "age", "address", "fullName", "email"]
console.log(Object.values(person2)); // ["John", "Doe", 31, {...}, f, "john@example.com"]
console.log(Object.entries(person2)); // [["firstName", "John"], ["lastName", "Doe"], ...]
console.log(Object.assign({}, person2)); // Shallow copy of person2
console.log(Object.assign({ age: 25 }, person2)); // Merge with new object


//  9. Object.assign()
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

// 10. Spread Syntax with Objects
let person11= { name: "John", age: 25 };
let employee = { ...person11, department: "IT" };
console.log(employee); // { name: "John", age: 25, department: "IT" }

// 11. Object Destructuring
let user = { name: "Alice", age: 28 };
let { name, age } = user;
console.log(name); // "Alice"
console.log(age);  // 28

// 12. Destructuring with Default Values
let person21= { name: "John" };
let { name, salary = 50000 } = person21;
console.log(salary); // 50000

// 14. Object.freeze()
// Prevents modification of object properties.
let obj = { name: "Max" };
Object.freeze(obj);
obj.name = "John"; // ignored
console.log(obj.name); // "Max"

// 15. Object.seal()
// Prevents adding/removing properties, but allows updating existing ones.

let obj = { name: "Max" };
Object.seal(obj);
obj.name = "John"; // allowed
delete obj.name;   // not allowed
console.log(obj);  // { name: "John" }

// 16. hasOwnProperty()

let obj = { name: "Max" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // false
// 
// 17. Object.prototype.toString.call() (Type check)

console.log(Object.prototype.toString.call({}));      // "[object Object]"
console.log(Object.prototype.toString.call([]));      // "[object Array]"

// 18. for...in loop (Iterate object properties)
let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}
// 19. Optional Chaining (?.)

let user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // "Alice"
console.log(user.address?.city); // undefined (doesn't throw error)

// 20. Nullish Coalescing (??)

let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // "Guest"

// 21. Short Property Names (ES6)

let name = "Ravi";
let age = 25;
let user = { name, age };
console.log(user); // { name: "Ravi", age: 25 }

// 22. Shallow vs Deep Copy

let original = { name: "John", address: { city: "Mumbai" } };
let shallow = { ...original };
shallow.address.city = "Delhi";
console.log(original.address.city); // "Delhi" — it's a shallow copy
// To make a deep copy:

let deep = JSON.parse(JSON.stringify(original));
// 23. Object.fromEntries()

let entries = [["name", "John"], ["age", 30]];
let obj = Object.fromEntries(entries);
console.log(obj); // { name: "John", age: 30 }

// 24. Object.getOwnPropertyNames()
let obj = { a: 1 };
console.log(Object.getOwnPropertyNames(obj)); // ["a"]

// 25. Object.hasOwn() (ES2022, alternative to hasOwnProperty)
let obj = { a: 1 };
console.log(Object.hasOwn(obj, "a")); // true



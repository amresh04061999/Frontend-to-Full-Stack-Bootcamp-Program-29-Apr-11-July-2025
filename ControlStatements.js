//  JavaScript Control Statements

//  1. Conditional Statements

//  1.1 if Statement
// The `if` statement executes a block of code if a specified condition is true.

// Syntax:
if (condition) {
  // code to execute if condition is true
}

// Example:
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

//  1.2 if...else Statement
// Executes one block of code if the condition is true, and another block if it's false.

// Syntax:
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}

// Example:
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside");
} else {
  console.log("It's not too hot");
}

//  1.3 if...else if...else Statement
// Allows multiple conditions to be tested in sequence.

// Syntax:
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else if (condition3) {
  // code if condition3 is true
} else {
  // code if none of the conditions are true
}

// Example:
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//  1.4 switch Statement
// Compares a variable against multiple values and executes the corresponding code block.

// Syntax:
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
  // code to execute if no case matches
}

// Example:
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Tuesday":
    console.log("Tuesday blues");
    break;
  case "Wednesday":
    console.log("Hump day");
    break;
  case "Thursday":
    console.log("Almost Friday");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}

//  1.5 Ternary Operator (Conditional Operator)
//  A shorthand way to write simple if-else statements.

// Syntax:
// condition ? expression1 : expression2

// Example:
let age1 = 20;
let status = age1 >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Nested ternary
let score1 = 85;
let grade1 = score1 >= 90 ? "A" : score1 >= 80 ? "B" : score1 >= 70 ? "C" : "F";
console.log(grade1); // "B"

//  2. Loop Statements

//  2.1 for Loop
// Repeats a block of code a specified number of times.

// Syntax:
for (initialization; condition; increment / decrement) {
  // code to execute
}

// Example:
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Counting backwards
for (let i = 10; i >= 0; i--) {
  console.log("Countdown: " + i);
}

// Step by 2
for (let i = 0; i <= 10; i += 2) {
  console.log("Even number: " + i);
}

//  2.2 for...in Loop
// Iterates over the enumerable properties of an object.

// Syntax:
for (variable in object) {
  // code to execute
}

// Example:
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John, age: 30, city: New York

// With arrays (not recommended)
let fruits = ["apple", "banana", "orange"];
for (let index in fruits) {
  console.log(index + ": " + fruits[index]);
}

//  2.3 for...of Loop
// Iterates over iterable objects (arrays, strings, maps, sets, etc.).

// Syntax:
for (variable of iterable) {
  // code to execute
}

// Example:
// With arrays
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// With strings
let text = "Hello";
for (let char of text) {
  console.log(char);
}

// With Set
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (let num of uniqueNumbers) {
  console.log(num);
}

// With Map
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (let [key, value] of map) {
  console.log(key + ": " + value);
}

//  2.4 while Loop
// Repeats a block of code while a condition is true.

// Syntax:
while (condition) {
  // code to execute
}

// Example:
let count1 = 0;
while (count1 < 5) {
  console.log("count1: " + count1);
  count1++;
}

// Infinite loop prevention
let attempts = 0;
let maxAttempts = 10;
while (attempts < maxAttempts) {
  console.log("Attempt: " + attempts);
  attempts++;
  if (attempts === 3) {
    break; // Exit the loop early
  }
}

//  2.5 do...while Loop
// Executes a block of code at least once, then repeats while a condition is true.

// Syntax:
do {
  // code to execute
} while (condition);

// Example:
let number = 0;
do {
  console.log("Number: " + number);
  number++;
} while (number < 3);

// Will execute at least once even if condition is false
let x = 10;
do {
  console.log("This will print once: " + x);
  x++;
} while (x < 5);

// 3. Jump Statements

//  3.1 break Statement
// Terminates the current loop or switch statement.

// Example:
// In for loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i equals 5
  }
  console.log(i);
}

// In while loop
let count = 0;
while (true) {
  if (count === 3) {
    break;
  }
  console.log("Count: " + count);
  count++;
}

// In switch statement
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break; // Prevents fall-through
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}

//  3.2 continue Statement
// Skips the current iteration and continues with the next iteration of the loop.

// Example:
// Skip even numbers
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number: " + i);
}

// In while loop
let num = 0;
while (num < 5) {
  num++;
  if (num === 3) {
    continue; // Skip when num is 3
  }
  console.log("Number: " + num);
}

//  3.3 return Statement
// Exits from a function and optionally returns a value.

// Example:
function calculateSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input"; // Exit function early
  }
  return a + b;
}

function findFirstEven(numbers) {
  for (let num of numbers) {
    if (num % 2 === 0) {
      return num; // Return first even number found
    }
  }
  return null; // Return null if no even number found
}

// Void return
function greet(name) {
  if (!name) {
    return; // Exit function without returning a value
  }
  console.log("Hello, " + name);
}

//  5. Label Statements

//  5.1 Labeled Statements
// Labels can be used with break and continue to control nested loops.

// Syntax:
labelName: statement;

// Example:
// Breaking out of nested loops
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Break out of outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Continue with labels
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outer; // Continue outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Label with while loop
searchLoop: while (true) {
  let input = getUserInput();
  switch (input) {
    case "quit":
      break searchLoop;
    case "continue":
      continue searchLoop;
    default:
      processInput(input);
  }
}

//  6. Advanced Control Flow Patterns

//  6.1 Early Return Pattern
// Using return statements to reduce nesting.

// Example:
function validateUser(user) {
  if (!user) {
    return "User is required";
  }

  if (!user.email) {
    return "Email is required";
  }

  if (!user.password) {
    return "Password is required";
  }

  if (user.password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return "Valid user";
}

//  6.2 Guard Clauses
// Using early returns to handle edge cases.

// Example:
function processOrder(order) {
  // Guard clauses
  if (!order) return null;
  if (!order.items || order.items.length === 0) return null;
  if (order.total <= 0) return null;

  // Main logic
  return {
    orderId: generateOrderId(),
    items: order.items,
    total: order.total,
    status: "processed",
  };
}

//  6.3 Nested Loop Control
// Advanced patterns for controlling nested iterations.

// Example:
// Finding element in 2D array
function findInMatrix(matrix, target) {
  outer: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        console.log(`Found ${target} at position [${i}][${j}]`);
        break outer;
      }
    }
  }
}

// Multiple break conditions
function complexSearch(data) {
  let found = false;
  let attempts = 0;
  const maxAttempts = 100;

  searchLoop: while (!found && attempts < maxAttempts) {
    for (let item of data) {
      attempts++;

      if (attempts >= maxAttempts) {
        console.log("Max attempts reached");
        break searchLoop;
      }

      if (item.matches) {
        found = true;
        break searchLoop;
      }
    }
  }

  return found;
}

//  7. Modern Control Flow with Async/Await

//  7.1 Async Control Flow
// Handling asynchronous operations with control statements.

// Example:
async function processItems(items) {
  for (let item of items) {
    try {
      let result = await processItem(item);
      if (result.error) {
        console.log(`Error processing ${item.id}: ${result.error}`);
        continue; // Skip to next item
      }
      console.log(`Successfully processed ${item.id}`);
    } catch (error) {
      console.log(`Exception processing ${item.id}: ${error.message}`);
      break; // Stop processing on critical error
    }
  }
}

// Async with early return
async function validateAndProcess(data) {
  if (!data) {
    return { error: "No data provided" };
  }

  try {
    let validatedData = await validate(data);
    if (!validatedData.isValid) {
      return { error: validatedData.errors };
    }

    let result = await process(validatedData);
    return { success: true, result };
  } catch (error) {
    return { error: error.message };
  }
}

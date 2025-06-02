//  throw Statement
// Throws a user-defined exception.

// Example:
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    if (age > 150) {
        throw new Error("Age seems unrealistic");
    }
    return true;
}

// Custom error types
function customError(message) {
    throw {
        name: "CustomError",
        message: message,
        toString: function() {
            return this.name + ": " + this.message;
        }
    };
}

//  4. Exception Handling Statements

//  4.1 try...catch Statement
// Handles exceptions that may occur in a block of code.

// Syntax:
try {
    // code that might throw an exception
} catch (error) {
    // code to handle the exception
}

// Example:
try {
    let result = 10 / 0;
    console.log(result);
    JSON.parse("invalid json");
} catch (error) {
    console.log("An error occurred: " + error.message);
}

// Catching specific error types
try {
    let data = JSON.parse('{"name": "John"}');
    console.log(data.name);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("JSON syntax error");
    } else {
        console.log("Other error: " + error.message);
    }
}

//  4.2 try...catch...finally Statement
// The finally block always executes, regardless of whether an exception occurs.

// Syntax:
try {
    // code that might throw an exception
} catch (error) {
    // code to handle the exception
} finally {
    // code that always executes
}

// Example:
function processFile(filename) {
    let file;
    try {
        file = openFile(filename);
        // Process file
        console.log("File processed successfully");
    } catch (error) {
        console.log("Error processing file: " + error.message);
    } finally {
        // Always close the file
        if (file) {
            closeFile(file);
            console.log("File closed");
        }
    }
}

// Finally executes even with return
function testFinally() {
    try {
        return "try block";
    } catch (error) {
        return "catch block";
    } finally {
        console.log("Finally block always executes");
    }
}

//  4.3 try...finally Statement
// Can be used without catch when you want cleanup code to always run.

// Example:
function performOperation() {
    let resource;
    try {
        resource = acquireResource();
        // Perform operation
        return processResource(resource);
    } finally {
        // Always cleanup
        if (resource) {
            releaseResource(resource);
        }
    }
}
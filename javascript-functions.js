// ============================================
// JAVASCRIPT FUNCTIONS - Comprehensive Guide
// ============================================

// 1. FUNCTION DECLARATION
// Traditional way to define a function
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. FUNCTION EXPRESSION
// Function assigned to a variable
const add = function(a, b) {
    return a + b;
};

// 3. ARROW FUNCTION
// ES6 syntax - concise function expression
const multiply = (a, b) => a * b;

// Arrow function with single parameter (parentheses optional)
const square = x => x * x;

// Arrow function with block body
const subtract = (a, b) => {
    const result = a - b;
    return result;
};

// 4. HIGHER-ORDER FUNCTIONS
// Functions that take other functions as arguments or return functions

// Function that returns a function
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Function that takes a function as argument
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// 5. CALLBACK FUNCTIONS
// Functions passed as arguments to be executed later
function processArray(arr, callback) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(callback(arr[i]));
    }
    return results;
}

// 6. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// Function that executes immediately after definition
const result = (function() {
    const privateVar = "I'm private";
    return `IIFE executed! ${privateVar}`;
})();

// 7. ASYNC FUNCTIONS
// Functions that handle asynchronous operations
async function fetchData(url) {
    // Simulating async operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Data from ${url}`);
            } else {
                reject(new Error('URL is required'));
            }
        }, 1000);
    });
}

// 8. GENERATOR FUNCTIONS
// Functions that can pause and resume execution
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 9. RECURSIVE FUNCTION
// Function that calls itself
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 10. DEFAULT PARAMETERS
function greetWithDefault(name = "Guest") {
    return `Welcome, ${name}!`;
}

// 11. REST PARAMETERS
// Collect multiple arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 12. FUNCTION WITH DESTRUCTURING
function displayUser({ name, age, city }) {
    return `${name} is ${age} years old and lives in ${city}`;
}

// 13. CLOSURE EXAMPLE
// Function that has access to outer scope variables
function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// 14. METHOD IN OBJECT
const calculator = {
    value: 0,
    add: function(n) {
        this.value += n;
        return this;
    },
    subtract: function(n) {
        this.value -= n;
        return this;
    },
    multiply: function(n) {
        this.value *= n;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};

// 15. PURE FUNCTION
// Function with no side effects, same input always produces same output
function pureAdd(a, b) {
    return a + b;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        greet,
        add,
        multiply,
        square,
        subtract,
        createMultiplier,
        double,
        triple,
        applyOperation,
        processArray,
        fetchData,
        numberGenerator,
        factorial,
        greetWithDefault,
        sum,
        displayUser,
        counter,
        calculator,
        pureAdd,
        result
    };
}

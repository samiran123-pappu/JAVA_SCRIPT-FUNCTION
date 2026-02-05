# JavaScript Functions - Comprehensive Guide

A comprehensive collection of JavaScript function examples and patterns, demonstrating various ways to create and use functions in JavaScript.

## Overview

This repository provides examples and demonstrations of different JavaScript function types and patterns, including:

- Function Declarations
- Function Expressions
- Arrow Functions
- Higher-Order Functions
- Callback Functions
- IIFE (Immediately Invoked Function Expressions)
- Async Functions
- Generator Functions
- Recursive Functions
- Functions with Default Parameters
- Functions with Rest Parameters
- Functions with Destructuring
- Closures
- Object Methods
- Pure Functions

## Files

- `javascript-functions.js` - Main file containing all function implementations
- `demo.js` - Demonstration file showing usage of all functions
- `package.json` - Node.js package configuration

## Usage

### Running the Demo

To see all the functions in action, run:

```bash
node demo.js
```

Or using npm:

```bash
npm run demo
```

### Using Functions in Your Code

You can require the functions module in your own JavaScript files:

```javascript
const functions = require('./javascript-functions.js');

// Use any function
console.log(functions.greet('World'));
console.log(functions.add(5, 3));
console.log(functions.factorial(5));
```

## Function Examples

### 1. Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### 2. Arrow Function
```javascript
const multiply = (a, b) => a * b;
```

### 3. Higher-Order Function
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
```

### 4. Async Function
```javascript
async function fetchData(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}
```

### 5. Closure
```javascript
function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
```

## Requirements

- Node.js (v12 or higher recommended)

## Learning Resources

This repository is designed to help developers:
- Understand different JavaScript function patterns
- Learn when to use each function type
- See practical examples of function usage
- Practice with working code examples

## License

MIT

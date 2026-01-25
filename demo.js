// ============================================
// JAVASCRIPT FUNCTIONS - Usage Examples
// ============================================

const functions = require('./javascript-functions.js');

console.log('==========================================');
console.log('JAVASCRIPT FUNCTIONS - DEMO');
console.log('==========================================\n');

// 1. Function Declaration
console.log('1. FUNCTION DECLARATION:');
console.log(functions.greet('Alice'));
console.log(functions.greet('Bob'));
console.log();

// 2. Function Expression
console.log('2. FUNCTION EXPRESSION:');
console.log('5 + 3 =', functions.add(5, 3));
console.log('10 + 25 =', functions.add(10, 25));
console.log();

// 3. Arrow Functions
console.log('3. ARROW FUNCTIONS:');
console.log('4 * 5 =', functions.multiply(4, 5));
console.log('Square of 7 =', functions.square(7));
console.log('15 - 6 =', functions.subtract(15, 6));
console.log();

// 4. Higher-Order Functions
console.log('4. HIGHER-ORDER FUNCTIONS:');
console.log('Double of 5 =', functions.double(5));
console.log('Triple of 5 =', functions.triple(5));
console.log('Apply add operation: 10 + 20 =', functions.applyOperation(10, 20, functions.add));
console.log('Apply multiply operation: 10 * 20 =', functions.applyOperation(10, 20, functions.multiply));
console.log();

// 5. Callback Functions
console.log('5. CALLBACK FUNCTIONS:');
const numbers = [1, 2, 3, 4, 5];
console.log('Original array:', numbers);
console.log('Squared array:', functions.processArray(numbers, functions.square));
console.log('Doubled array:', functions.processArray(numbers, x => x * 2));
console.log();

// 6. IIFE Result
console.log('6. IIFE (Immediately Invoked Function Expression):');
console.log(functions.result);
console.log();

// 7. Async Functions
console.log('7. ASYNC FUNCTIONS:');
functions.fetchData('https://api.example.com/data')
    .then(data => console.log('Async result:', data));
console.log('(Async operation in progress...)\n');

// 8. Generator Functions
console.log('8. GENERATOR FUNCTIONS:');
const gen = functions.numberGenerator();
console.log('First yield:', gen.next().value);
console.log('Second yield:', gen.next().value);
console.log('Third yield:', gen.next().value);
console.log();

// 9. Recursive Function
console.log('9. RECURSIVE FUNCTION:');
console.log('Factorial of 5 =', functions.factorial(5));
console.log('Factorial of 7 =', functions.factorial(7));
console.log();

// 10. Default Parameters
console.log('10. DEFAULT PARAMETERS:');
console.log(functions.greetWithDefault('Charlie'));
console.log(functions.greetWithDefault());
console.log();

// 11. Rest Parameters
console.log('11. REST PARAMETERS:');
console.log('Sum of 1, 2, 3 =', functions.sum(1, 2, 3));
console.log('Sum of 1, 2, 3, 4, 5 =', functions.sum(1, 2, 3, 4, 5));
console.log('Sum of 10, 20, 30, 40 =', functions.sum(10, 20, 30, 40));
console.log();

// 12. Destructuring Parameters
console.log('12. DESTRUCTURING PARAMETERS:');
const user = { name: 'John', age: 30, city: 'New York' };
console.log(functions.displayUser(user));
console.log();

// 13. Closures
console.log('13. CLOSURES:');
const myCounter = functions.counter();
console.log('Initial count:', myCounter.getCount());
console.log('After increment:', myCounter.increment());
console.log('After increment:', myCounter.increment());
console.log('After decrement:', myCounter.decrement());
console.log('Current count:', myCounter.getCount());
console.log();

// 14. Object Methods (Method Chaining)
console.log('14. OBJECT METHODS (Method Chaining):');
const calcResult = functions.calculator.add(10).multiply(2).subtract(5).getResult();
console.log('Result: (0 + 10) * 2 - 5 =', calcResult);
console.log();

// 15. Pure Functions
console.log('15. PURE FUNCTIONS:');
console.log('Pure add 5 + 3 =', functions.pureAdd(5, 3));
console.log('Pure add 5 + 3 (again) =', functions.pureAdd(5, 3));
console.log('Same input always produces same output!');
console.log();

console.log('==========================================');
console.log('DEMO COMPLETE!');
console.log('==========================================');

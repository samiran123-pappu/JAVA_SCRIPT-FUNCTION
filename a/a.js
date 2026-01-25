function greet1(){
    return "Hello, World!111";
}

console.log(greet1());

const greet2 = function(){
    return "Hello, World!222";
}
console.log(greet2());

const greet3 = () => {
    return "Hello, World!333";
}
console.log(greet3());

const greet4 = () => "Hello, World!444";
console.log(greet4());

const obj = {
  greet5() {
    return "Hello!555";
  }
};
console.log(obj.greet5());

function Person(name) {
  this.name = name;
  this.greet6 = function() {
    return "Hello,666 " + this.name + "!";
  };
}
const person = new Person("Alice7777");
console.log(person.greet6());



async function greetAsync() {
  return "Hello!8888";
}
greetAsync().then(console.log);
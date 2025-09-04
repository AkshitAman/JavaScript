const person = {
  name: "Akshit",
  greet() {
    console.log(`Hi My name is ${this.name}`);
  },
};

person.greet();

let greetFunction = person.greet;
greetFunction(); //context will be lost

// binding context :
const bindGreet = person.greet.bind({ name: "Ayush" });
bindGreet();

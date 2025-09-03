console.log("Hello");

function sayName(){
    console.log("I would Like  to say Hello!");
}

setTimeout(() => {
    sayName();
}, 4000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}

            //Asyncronus -- having the ability to pause for network calls, reading and writing from disk , time function , etc.. cuz javascript doesnot have this ability
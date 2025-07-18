// Numbers

let Var = 105
console.log(typeof (Var))       //typeof gives which types of data you are entering


let anotherVar = new Number(105)
console.log(typeof (anotherVar))


//                          Null and Undefined 

let MyName;
console.log(MyName)
let FriendName = null
console.log(FriendName)

//                             String

let MyString = 'Hello'
let UserName = 'Akshit'
let NewName='Kshitiz'

let OldGreet = MyString + ' ' + UserName
console.log(OldGreet)

let NewGreet=`Hello ${NewName}`;
console.log(NewGreet)               //String Interpolation

let Calc=`The value is ${2*2}`
console.log(Calc)
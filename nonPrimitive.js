const userName = {                 //it fixed the memory for username in the storage but it cannot fix the variable which is in the username 
    FirstName: "Akshit",
    isLoggedin: false
}

userName.FirstName = "Aman"    //for accessing individual variable 
userName.LastName = "Kumar"   //for adding additional variable

console.log(userName.FirstName)
console.log(userName.LastName)
console.log(userName)
console.log(typeof (userName))


let FullName = {
    "first name": "kshitiz"      //other way of declaring variable by using space between them
}
console.log(FullName['first name'])     //other way of accessing individual variable without using '.' instead use [] paranthesis


//Array

let anotherUsername = ["Anand", false]
console.log(anotherUsername[0])     //for accessing individual variable in array cuz array starts with 0.


console.log("1" + 1)
console.log(1 + 1)

let isValue = true          //JavaScript consider true as 1 and false as zero
console.log(isValue + 1)


let isNum=false
console.log(Number(isNum))     //Number is used to convert the value of isNum into number.
console.log(Number(null))
console.log(Number(undefined))
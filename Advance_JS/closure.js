function outer(){
    let count = 3;
    return function(){
        count++;
        return count;
    }
}

let increament = outer();
console.log(increament());
console.log(increament());
console.log(increament());


            // Clouser -- is a function that remembers the environment in which it was created even after the environment is closed.. basically it actually retains the memory of that function after the closure of that function..
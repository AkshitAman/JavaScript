function fetchData(){
    return new Promise((resolve,reject) => {  
        setTimeout(() => {
            let success = true;
        if(success){
            resolve("Data fetched successfully");
        }else{
            reject("Error fetching Data");
        }
        }, 3000);
    })
}

fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })  // it runs only when the promise will reslove.. and the data parameter contains the message that is passed to the resolve function..
    .then((value) => console.log(value)
    )
    
    .catch((error) => console.error(error))  // it runs only when the promise will reject.. and the error parameter contains the message that is passed to the reject function..
    

                //Promises is an object that represents the completion or failure of the asynchronous operation . it has three states : pending,fullfilled(resolve),rejected(error)
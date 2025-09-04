function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "Akshit" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching Data....");
    const userData = await fetchUserData();
    console.log("user Data : ", userData);
    console.log("Data Fetched Successfully");
    
  } catch (error) { 
    console.log("Error Fetching Data",error);
  }
}

getUserData();

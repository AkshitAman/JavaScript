function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched.")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched.")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching Blog Data.......");
        
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        // Another way by using Promise All
        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])
        
        console.log("Post Data Fetched");
        console.log("Comment Data Fetched");

        console.log("Fetched Successfully");
        
    } catch (error) {
        console.log("Error fetching the Data");
    }
}

getBlogData();
function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Post Data Fetched.")
            )
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log("Comment Data Fetched.")
            )
        }, 3000);
    })
}

async function getBlogData() {
    try {
        const postData=await fetchPostData();
        const commentData= await fetchCommentData();
        console.log("Post Data Fetched Successfully");
        console.log("Comment Data Fetched Successfully");
    } catch (error) {
        console.log("Error fetching the Data");
    }
}

getBlogData();
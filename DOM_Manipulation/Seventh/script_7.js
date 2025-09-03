document
    .getElementById("teaList")
    .addEventListener("click", function(event){   //event object contains information about the click, such as what was clicked.

        
        if (event.target && event.target.matches(".teaItem")) {   //event.target: This property identifies the exact element that the user clicked on. -- event.target.matches(".teaItem"): This checks if the clicked element has the class teaItem. This ensures that the code only runs when a user clicks on the list item not on the empty spaces between them.
            alert("You Selected : " + event.target.textContent);
        }
    })
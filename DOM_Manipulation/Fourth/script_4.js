document
    .getElementById("addNewItem")
    .addEventListener("click", function () {
        let newItem = document.createElement("li"); // Creating new element
        newItem.textContent = "Eggs";
        document.getElementById("shoppingList").appendChild(newItem);
    });

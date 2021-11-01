function addItem() {
    let newText = document.getElementById("newItemText");
    let itemsElement = document.getElementById("items");

    let newLiElement = document.createElement("li");
    newLiElement.textContent = newText.value;

    // Add delete button
    let deleteButton = document.createElement("a");
    deleteButton.setAttribute("href", "#");
    deleteButton.textContent = "[Delete]";

    // Attach event to delete button
    deleteButton.addEventListener("click", (e) => {
        console.log(e.currentTarget.parentNode);
        e.currentTarget.parentNode.remove();
    });

    newLiElement.appendChild(deleteButton);
    itemsElement.appendChild(newLiElement);

    newText.value = "";
    
}
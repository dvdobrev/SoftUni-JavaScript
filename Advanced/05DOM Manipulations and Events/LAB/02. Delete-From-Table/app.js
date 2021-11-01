function addItem() {
    let newText = document.getElementById("newItemText").value;
    let itemsElement = document.getElementById("items");

    let newLiElement = document.createElement("li");
    newLiElement.textContent = newText;

    let deleteButton = document.createElement("a");
    deleteButton.setAttribute("href", "#");
    deleteButton.textContent = "[Delete]";

    newLiElement.appendChild(deleteButton);

    itemsElement.appendChild(newLiElement);
    
}
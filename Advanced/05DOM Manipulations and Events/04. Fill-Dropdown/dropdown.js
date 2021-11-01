function addItem() {
    let tagToInesert = document.getElementById('menu');

   let newItemText = document.getElementById('newItemText');
   let newText = newItemText.value;

   let newItemValue = document.getElementById('newItemValue');
   let newValue = newItemValue.value;

   let option = document.createElement('option');
   option.textContent = newText;
   option.value = newValue;

   tagToInesert.appendChild(option);

   newItemText.value = '';
   newItemValue.value = '';

}
window.addEventListener('load', solve);

function solve() {

   let modelField = document.getElementById('model');
   let yearField = document.getElementById('year');
   let descriptionField = document.getElementById('description');
   let priceField = document.getElementById('price');
   let addButton = document.getElementById('add');
   addButton.addEventListener('click', addHandler);

   console.log(modelField.textContent);
   

   let table = document.getElementById('information');
   let furnitureList = document.getElementById('furniture-list');

   if(modelField != '' && descriptionField != '' && yearField > 0 && priceField > 0) {
        
   }

   function addHandler(e) {
        e.preventDefault();

        let trInfo = document.createElement('tr');
        trInfo.className = 'info';

        let tdModel = document.createElement('td');
        tdModel.textContent = modelField.value;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = priceField.value;

        let tdButtons = document.createElement('td');

        let moreButton = document.createElement('button');
        moreButton.className = 'moreBtn';
        moreButton.textContent = 'More Info';

        let buyButton = document.createElement('button');
        buyButton.className = 'buyBtn';
        buyButton.textContent = 'Buy it';

        let trHide = document.createElement('tr');
        trHide.className = 'hide';
        
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearField}`;

        let tdcolSpan = document.createElement('td');
        tdcolSpan.colSpan = 3;
        tdcolSpan.textContent = `Description: ${descriptionField}`;

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        tdButtons.appendChild(moreButton);
        tdButtons.appendChild(buyButton);
        trInfo.appendChild(tdButtons);

        furnitureList.appendChild(trInfo);

        trHide.appendChild(tdYear);
        trHide.appendChild(tdcolSpan);

        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';
   }


}

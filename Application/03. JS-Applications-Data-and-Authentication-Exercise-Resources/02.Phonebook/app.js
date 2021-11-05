function attachEvents() {
    let loadButton = document.getElementById('btnLoad');
    let creatButton = document.getElementById('btnCreate');

    loadButton.addEventListener('click', loadHandler);
    creatButton.addEventListener('click', createHandler);

}

attachEvents();

let personInput = document.getElementById('person');
let phoneInput = document.getElementById('phone');

async function loadHandler(e) {

    let ul = document.getElementById('phonebook');

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const objectsData = await res.json();

    ul.replaceChildren();

    let data = Object.values(objectsData)
    .map(o => o)
    .forEach(element => {
        let li = document.createElement('li');
        li.textContent = `${element.person}:${element.phone}`;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute(`data-id`,`${element._id}`)
        deleteButton.addEventListener('click', deleteHandler);
        li.appendChild(deleteButton);
        ul.appendChild(li);         
    });
     
}

async function deleteHandler(e) {
    let entryToDelete = e.target;
    let buttonId = entryToDelete.dataset.id;  

    const url = 'http://localhost:3030/jsonstore/phonebook/';
    const res = await fetch(url + buttonId, {
        method: 'DELETE'
    });

    loadHandler();   

}

async function createHandler() {

    if (personInput.value !== "" && phoneInput.value !== "") {

        let newEntry = {
            person: personInput.value,
            phone: phoneInput.value
        }
    
        const url = 'http://localhost:3030/jsonstore/phonebook';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        };
    
        personInput.value = "";
        phoneInput.value = "";
    
        const res = await fetch(url, options);
        const result = await res.json();
    
        loadHandler();
    
        return result;
    } else {
        return
    } 
}

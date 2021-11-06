const tBody = document.querySelector('tbody');
const submintButton = document.getElementById('submit');
const firstNameInput = document.querySelector('#form > div.inputs > input[type=text]:nth-child(1)');
const LastNameInput = document.querySelector('#form > div.inputs > input[type=text]:nth-child(2)')
const facultyNumberInput = document.querySelector('#form > div.inputs > input[type=text]:nth-child(3)');
const gradeInput = document.querySelector('#form > div.inputs > input[type=text]:nth-child(4)');

submintButton.addEventListener('click', submitHandler)

async function loadData() {
    const res = await fetch('http://localhost:3030/jsonstore/collections/students')

    const data = await res.json();

    const students = Object.values(data)

    tBody.replaceChildren();

    students.forEach(student => {
        createRow(student)
    });

}

async function submitHandler (event) {
    event.preventDefault();
    const studentObject = {
        firstName: firstNameInput.value,
        lastName: LastNameInput.value,
        facultyNumber: facultyNumberInput.value,
        grade: gradeInput.value
    }

    if (firstNameInput.value === "" 
        || !isNaN(firstNameInput.value) 
        || LastNameInput.value === "" 
        || !isNaN(LastNameInput.value)
        || facultyNumberInput.value === "" 
        || Number(facultyNumberInput.value) < 0
        || isNaN(facultyNumberInput.value) 
        || gradeInput.value === "" 
        || isNaN(gradeInput.value) 
        || Number(gradeInput.value) < 0 
        || Number(gradeInput.value) > 6) {
        return;

    } else {
        createRow(studentObject);

        const url = 'http://localhost:3030/jsonstore/collections/students'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentObject)
        };

        const res = await fetch(url, options);
        const result = await res.json();
  
    }

    loadData()
}

function createRow(student) {

    const row = document.createElement('tr');
    const firstNameTd = document.createElement('td');
    const lastNameTd = document.createElement('td');
    const facultyNummberTd = document.createElement('td');
    const gradeTd = document.createElement('td');
    firstNameTd.textContent = student.firstName
    lastNameTd.textContent = student.lastName
    facultyNummberTd.textContent = student.facultyNumber
    gradeTd.textContent = student.grade
    row.appendChild(firstNameTd);
    row.appendChild(lastNameTd);
    row.appendChild(facultyNummberTd);
    row.appendChild(gradeTd);
    tBody.appendChild(row);
   
}

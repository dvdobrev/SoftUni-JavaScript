function solve() {
    //let buttonElement = document.querySelector(".admin-view .action button");
    let buttonElement = document.querySelector("body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button");

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        
        //let lectureNameElement = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]');
        let lectureNameElement = document.querySelector('input[name="lecture-name"]');  // the bracets selector let us select the input with the name what we search 
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');  // the bracets selector let us select the input with the name what we search 
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');  // the bracets selector let us select the input with the name what we search 
        
       if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value == "Select module"){
           return;
       }

      let lectureElement = creatLecture(lectureNameElement.value, lectureDateElement.value);
      let moduleElement = creatModule(lectureModuleElement.value, lectureElement);

      let modulesElement = document.querySelector('.modules');
      modulesElement.appendChild(moduleElement);
    });
 
    function creatModule(name, lectureElement) {

         // TODO Creat module  

        let divElement = document.createElement('div');
        divElement.classList.add("module");

        let headingElement = document.createElement("h3");
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        let lectureListElement = document.createElement("ul");
        lectureListElement.appendChild(lectureElement);

        divElement.appendChild(headingElement);
        divElement.appendChild(lectureListElement);

        return divElement;
    }

    function creatLecture(name, date){

         // TODO Creat lecture
       

        let liElement = document.createElement("li");
        liElement.classList.add('flex');

        let coureHeadingElement = document.createElement("h4");
        coureHeadingElement.textContent = 
            `${name} - ${formatdate(date)}`

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';

        liElement.appendChild(coureHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function formatdate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/'); // after replace this is RegEx (what have to be replaced)

        return `${date} - ${time}`;
    }
    
};
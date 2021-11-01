function solve() {
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addTask);
    
    function addTask(e) {
        e.preventDefault();
        if (task.value != '' && description.value != '' && date.value != '') {
            const openSec = document.querySelector('.orange').parentElement.nextElementSibling;
            let article = createEl('article');
            let h3 = createEl('h3', `${task.value}`);
            let p1 = createEl('p', `Description: ${description.value}`)
            let p2 = createEl('p', `Due Date: ${date.value}`);
            let div = createEl('div');
            [h3, p1, p2, div].forEach(el => article.appendChild(el));
            div.classList.add('flex');
            let startBth = createEl('button', 'Start');
            startBth.classList.add('green');
            let dellBth = createEl('button', 'Delete');
            dellBth.classList.add('red');
            [startBth, dellBth].forEach(b => div.appendChild(b));
            dellBth.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
            });
            startBth.addEventListener('click', toInProgresSec);
                
            openSec.appendChild(article);
            console.log(openSec);
        }
        task.value = '';
        description.value = '';
        date.value = '';

    }
    function toInProgresSec(e) {
        let article = e.target.parentElement.parentElement;
        article.querySelector('div').remove();
        let div = createEl('div');
        div.classList.add('flex');
        let bd = createEl('button', 'Delete');
        let bf = createEl('button', 'Finish');
        bd.className = 'red';
        bd.textContent = 'Delete';
        bf.className = 'orange';
        bf.textContent = 'Finish';
        div.appendChild(bd);
        div.appendChild(bf);
        article.appendChild(div);
        document.querySelector('.yellow').parentElement.nextElementSibling.appendChild(article);
        bd.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });
        bf.addEventListener('click', toComplete);

    }
    function toComplete(e) {
        let article = e.target.parentElement.parentElement;
        article.querySelector('div').remove();
        article.parentElement.parentElement.nextElementSibling.children[1].appendChild(article);
    }

    function createEl(el, content) {
        let element = document.createElement(el);
        if (content) {element.innerHTML = content};
        return element;
    }
}
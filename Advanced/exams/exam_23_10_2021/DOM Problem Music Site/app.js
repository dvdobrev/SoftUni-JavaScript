window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');  
    const nameOfTheSong = document.getElementById('name');
    const authorOfTheSong = document.getElementById('author');
    const date = document.getElementById('date');
    let addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addTheSongToTheCollection)
    let allHitsSection = document.querySelector('#all-hits > div')
    console.log(genre.textContent);

    function addTheSongToTheCollection(e) {
        e.preventDefault();
       

        if (inputsOK()) {

            let newDiv = document.createElement('div');
            newDiv.classList.add('hits-info')

            let newImage = document.createElement('img')
            newImage.src = './static/img/img.png'
            newDiv.appendChild(newImage)

            let h2Gernre = document.createElement('h2');
            h2Gernre.textContent = `Genre: ${genre.value}`
            newDiv.appendChild(h2Gernre)

            let h2Name = document.createElement('h2');
            h2Name.textContent = `Name: ${nameOfTheSong.value}`
            newDiv.appendChild(h2Name)

            let h2Author = document.createElement('h2');
            h2Author.textContent = `Author: ${authorOfTheSong.value}`
            newDiv.appendChild(h2Author)

            let h3Date = document.createElement('h3');
            h3Date.textContent = `Date: ${date.value}`
            newDiv.appendChild(h3Date)

            let saveButton = document.createElement('button');
            saveButton.classList.add('save-btn')
            saveButton.textContent = `Save song`
            newDiv.appendChild(saveButton)

            let likeButton = document.createElement('button');
            likeButton.classList.add('like-btn')
            likeButton.textContent = `Like song`
            newDiv.appendChild(likeButton)

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn')
            deleteButton.textContent = `Delete`
            newDiv.appendChild(deleteButton)

            allHitsSection.appendChild(newDiv);

            genre.value = "";
            nameOfTheSong.value = "";
            authorOfTheSong.value = '';
            date.value = '';

            deleteButton.addEventListener('click', deleteSong);
            saveButton.addEventListener('click', saveSong);
            likeButton.addEventListener('click', likeSong);

        } else {
            return
        }
    }

    function saveSong() {
        let divSections = document.querySelector('#all-hits > div > h1').nextElementSibling
        let saveContainer = document.querySelector('.saved-container')

        let lBtn = document.querySelector('#all-hits > div > div > button.like-btn')
        let sBtn = document.querySelector('#all-hits > div > div > button.save-btn')
       
        lBtn.remove()

        sBtn.remove()
        
        saveContainer.appendChild(divSections)
    
    }

    function deleteSong(e) {
        let delButton = e.target
        let sectionToDelete = delButton.parentElement

        sectionToDelete.remove()

    }

    function likeSong(e) {
        let btn = e.target
        let likeContent = document.querySelector('#total-likes > div > p').textContent
        let totalLikes = likeContent.split(': ')[1];
        let likeTekst = likeContent.split(': ')[0]
        totalLikes = Number(totalLikes)
        totalLikes++

        likeContent = `${likeTekst}: ${totalLikes}`
        document.querySelector('#total-likes > div > p').textContent = likeContent;

        btn.disabled = true;
    }

    function inputsOK() {
       if (genre.value != "" && nameOfTheSong.value != "" && authorOfTheSong.value != "" && date.value != "")
            return true;
        }
        return false;
}

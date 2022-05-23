window.addEventListener('load', solve);

function solve() {

    let button = document.getElementById('add-btn');

    button.addEventListener('click', handler);

    let genreInput = document.getElementById('genre');
    let songNameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');

    function handler(e) {
        e.preventDefault();

        let genre = genreInput.value;
        let songName = songNameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;

        let collectionsOfSongsDiv = document.querySelector('#all-hits > div')

        if (genre != "" && songName != "" && author != "" && date != "") {

            let div = document.createElement('div');
            div.classList.add('hits-info');

            let img = document.createElement('img');
            img.src = './static/img/img.png';

            let h2Genre = document.createElement('h2');
            h2Genre.textContent = `Genre: ${genre}`;

            let h2Name = document.createElement('h2');
            h2Name.textContent = `Name: ${songName}`;

            let h2Author = document.createElement('h2');
            h2Author.textContent = `Author: ${author}`;

            let h2Date = document.createElement('h3');
            h2Date.textContent = `Date: ${date}`;

            let saveSongButton = document.createElement('button');
            //saveSongButton.className = "save-btn";
            saveSongButton.classList.add('save-btn');
            saveSongButton.textContent = 'Save song';

            let likeSongButton = document.createElement('button');
            //likeSongButton.className = 'like-btn';
            likeSongButton.classList.add('like-btn');
            likeSongButton.textContent = 'Like song';

            let deleteButton = document.createElement('button');
            //deleteButton.className = 'delete-btn';
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';

            div.appendChild(img);
            div.appendChild(h2Genre);
            div.appendChild(h2Name);
            div.appendChild(h2Author);
            div.appendChild(h2Date);
            div.appendChild(saveSongButton);
            div.appendChild(likeSongButton);
            div.appendChild(deleteButton);

            collectionsOfSongsDiv.appendChild(div)

            genreInput.value = "";
            songNameInput.value = "";
            authorInput.value = "";
            dateInput.value = "";

            let totalLikes = document.querySelector('#total-likes > div > p');
            let likesCount = 0;
            
            likeSongButton.addEventListener('click', likeSongHandler)
            saveSongButton.addEventListener('click', saveSongHandler)
            deleteButton.addEventListener('click', deleteHandler)

            function likeSongHandler() {
                likesCount += 1;
                totalLikes.textContent = `Total Likes: ${likesCount}`;

                likeSongButton.disabled = true;
            }

            function saveSongHandler() {
                div.removeChild(saveSongButton);
                div.removeChild(likeSongButton);

                let saveSongsDiv = document.querySelector('#saved-hits > div');
                
                saveSongsDiv.appendChild(div);

            }

            function deleteHandler() {
                div.remove();
            }
        }

    }
}
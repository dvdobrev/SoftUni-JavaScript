window.addEventListener('load', solve);

function solve() {
    const [genre, name, author, date] = document.querySelectorAll('form input')
    const allHits = document.querySelector('.all-hits-container');
    const savedHits = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('.likes p');
    document.querySelector('#add-btn').addEventListener('click', toAllHits);

    function toAllHits(e) {
        e.preventDefault();
        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {
            const div = document.createElement('div');
            div.className = 'hits-info';
            div.innerHTML = `<img src="./static/img/img.png">
<h2>Genre: ${genre.value}</h2>
<h2>Name: ${name.value}</h2>
<h2>Author: ${author.value}</h2>
<h3>Date: ${date.value}</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>`;
            allHits.appendChild(div);

            const [saveBtn, likeBtn, dellBtn] = div.querySelectorAll('button')
            saveBtn.addEventListener('click', toSavedSongs);
            likeBtn.addEventListener('click', likeSong);
            dellBtn.addEventListener('click', dellSong);

            [genre, name, author, date].forEach(e => e.value = '');
        } else {
            console.log(genre.value);
        } 

    }
    function dellSong(e) {
        e.target.parentElement.remove();
    }

    function toSavedSongs(e) {
        const el = e.target.parentElement;
        savedHits.appendChild(el);
        e.target.nextElementSibling.remove();
        e.target.remove();
    }

    function likeSong(e) {
        const counter = Number(totalLikes.textContent.split(': ')[1]);
        totalLikes.innerHTML = `Total Likes: ${counter + 1}`;
        e.target.disabled = "true";
    }
}
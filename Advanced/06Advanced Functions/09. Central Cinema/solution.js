function solve() {
    //1 Select elements   
    let onScreenButton = document.querySelector('#container button');
    //2a attach event listener on [On-Screen] button
    onScreenButton.addEventListener('click', onScreenHandler);
    let clearAchiveButton = document.querySelector('#archive > button');
    //5a add clear button event listener
    clearAchiveButton.addEventListener('click', clearArchive);

    //2. Implement add movie functionality
    function onScreenHandler(e) {
        e.preventDefault();
        //2b Get input values from movie
        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];

        //2c conver values where neede
        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        // check inputs
        if (name !== '' && 
            hall !== '' && 
            price !== '' && 
            !isNaN(Number(price))) {

            price = Number(price).toFixed(2);
            //2d create html structure for movie
            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price;

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            //3a Attach event listener each movies archive button
            archiveButton.addEventListener("click", archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveButton);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);

            //2e attach html structure to movies on screen section
            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);

            nameInput.value = "";
            hallInput.value = "";
            priceInput.value = "";
        }
    }

    //3. Implement Archive movie functionality
    function archiveMovie(e) {
        //3b Get input values for current movie to archive
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold !== '' && 
            !isNaN(Number(ticketsSold))) {
            //3c convert values where needed
            ticketsSold = Number(ticketsSold);
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);
            // let priceStrong = movieLi.querySelector('div strong');
            // let price = Number(priceStrong.textContent);

            //3d creat html structure for archive movie
            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            //4a Attach event listener each movies delete button
            deleteButton.addEventListener("click", deleteFromArchive);
            movieLi.appendChild(deleteButton);

            //3e attach html structure to movies archivee section
            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);
        }
    }


    //4a Implement archived movies delete functionality
    function deleteFromArchive(e) {
        let currentElement = e.target;
        let movieLi = currentElement.parentElement;
        //4b delete html structure of a deleted movies from DOM
        movieLi.remove();
    }

    //5 Implement archive clear button functionality
    function clearArchive() {
        //5a delete archives Li elements from DOM
        let archiveLis = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLis.forEach(element => element.remove())
    }
}
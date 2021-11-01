function solve() {
   let creatButton = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
   creatButton.addEventListener('click', createArtikleHandler);


   
   function createArtikleHandler(e) {
      e.preventDefault();

      let sectionToAppend = document.querySelector('body > div > div > main > section');

      let authorInput = document.getElementById('creator');
      let titleInput = document.getElementById('title');
      let categoryInput = document.getElementById('category');
      let contentInput = document.getElementById("content")

      let artikelItem = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = titleInput.value
      artikelItem.appendChild(h1)


      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = "Category:";
      let categoryStrong = document.createElement('strong');
      categoryStrong.textContent = categoryInput.value;
      categoryParagraph.appendChild(categoryStrong);
      artikelItem.appendChild(categoryParagraph);

      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = "Creator:";
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = authorInput.value;
      creatorParagraph.appendChild(creatorStrong);
      artikelItem.appendChild(creatorParagraph);

      let textAreaParagraph = document.createElement('p');
      textAreaParagraph.textContent = contentInput.value;
      artikelItem.appendChild(textAreaParagraph);

      let divElement = document.createElement('div');
      divElement.classList.add("buttons");    

      let deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.classList.add('btn', 'delete');
      deleteButton.addEventListener('click', deleteHandler);


      let archiveButton = document.createElement('button');
      archiveButton.textContent = "Archive";
      archiveButton.classList.add('btn', 'archive');
      archiveButton.addEventListener('click', archiveHandler);

      divElement.appendChild(deleteButton);
      divElement.appendChild(archiveButton);
      artikelItem.appendChild(divElement);

      sectionToAppend.appendChild(artikelItem);

      
      

      function deleteHandler(e) {
         let sectionToDelete = e.target.parentElement.parentElement;
         sectionToDelete.remove();

      }

      function archiveHandler(e) {
         let artikleToArchive = e.target.parentElement.parentElement;
         let olElement = document.querySelector('body > div > div > aside > section.archive-section > ol')
         
         let allLiElements = Array.from(olElement.querySelectorAll('li'));
         
         let newLiElement = document.createElement('li');
         let liHeadingName = artikleToArchive.querySelector('h1')
         newLiElement.textContent = liHeadingName.textContent;
         
         allLiElements.push(newLiElement);
         allLiElements
            .sort((a,b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => olElement.appendChild(li));
         
         // allLiElements.sort((a, b) => a.localeCompare(b).forEach(element => { olElement.appendChild(element)
            
         // }));

         let sectionToDelete = e.target.parentElement.parentElement
         sectionToDelete.remove()

      }

   }
}
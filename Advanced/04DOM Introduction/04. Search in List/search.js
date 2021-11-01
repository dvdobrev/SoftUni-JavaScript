function search() {
   // 1. Select elements
   let searchElement = document.getElementById("searchText");
   let allLiElements = Array.from(document.querySelectorAll("#towns li"));

   // 2. Parse search text
   let searchText = searchElement.value;

   // 3. Main Logic
      // b. clear results from previous search
   allLiElements.forEach(el => {
      el.style.fontWeight = "normal";
      el.style.textDecoration = "none";
   });
      // c. filter all li's which contain the search text
      // d. bold and underline matching lis
     /* let targetLis = allLiElements
      .filter(x => x.textContent.toLowerCase().includes(searchText))
      .map(x => {
         x.style.fontWeight = "bold";
         x.style.textDecoration = "underline";
      });*/

   let filterLi = allLiElements
      .filter(x => x.textContent.includes(searchText));

   let mappedLi = filterLi.forEach(x => {
      x.style.fontWeight = "bold";
      x.style.textDecoration = "underline";
   });

   // e. show number of matches in result div
   let resultDiv = document.getElementById("result");
   resultDiv.textContent = `${filterLi.length} matches found`; 
}
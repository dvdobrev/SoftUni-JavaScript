function create(words) {
   let content = document.getElementById("content");

   for (let index = 0; index < words.length; index++) {
      let currentText = words[index];
      let div = document.createElement("DIV");
      let paragraph = document.createElement("P");
      paragraph.textContent = currentText
      div.appendChild(paragraph)
      paragraph.style.display = "none";
      content.appendChild(div);

      content.addEventListener("click", function (e) {
         if (e.target !== e.currentTarget) {
            let p = e.target.children[0];
            let isVisible = p.style.display === "block";
            p.style.display = isVisible ? "none" : "block";
         }        
      })
   }  
}
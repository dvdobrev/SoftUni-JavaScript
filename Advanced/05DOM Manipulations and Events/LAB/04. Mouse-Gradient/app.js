function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient-box");
    let resultElement = document.getElementById("result");
    
    gradientElement.addEventListener("click", function (e) {
        console.log(e.offsetX);
        console.log(e.currentTarget.offsetWidth);

        let percent = Math.floor((e.offsetX / e.currentTarget.offsetWidth) * 100);
        resultElement.textContent = `${percent}`;
        
    });
}
// Navbar Background Change
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#020617";
    }
    else{
        header.style.background = "#111827";
    }
});


// Typing Animation
const text = ["Full Stack Developer", "Frontend Developer", "Node.js Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h3").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 150);
})();
var toggler = document.querySelector("#lines")
var contentPages = document.querySelectorAll(".content")

toggler.addEventListener("click", function (){
        
    contentPages[0].classList.toggle("hide")
    contentPages[1].classList.toggle("hide")

} ,false)
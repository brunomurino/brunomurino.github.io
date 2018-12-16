var toggler = document.querySelectorAll(".toggler")
var subMenu = document.querySelectorAll(".submenu")

// submenu.style.cssText = "background-color: white;"

for (var i = 0; i < toggler.length; i++){
    subMenu[i].classList.add("hide")
    toggler[i].classList.remove("selected")
}

function reveal(e, current, thi) {
    e.preventDefault()
    current.classList.toggle("hide")
    thi.classList.toggle("selected")
}


// for (var i = 0; i < toggler.length; i++){ 
//     (function () {
//         var currentHeader = toggler[i]
//         var currentObject = subMenu[i]
//         currentHeader.addEventListener("click", function (e){reveal(e,currentObject)} ,false)
//     }())
// }


for (var i = 0; i < toggler.length; i++){ 
    let currentHeader = toggler[i]
    let currentObject = subMenu[i]
    currentHeader.addEventListener("click", function (e){reveal(e,currentObject, this)} ,false)
}


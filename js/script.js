var menuHeader = document.querySelectorAll(".menuHeader")
var subMenu = document.querySelectorAll(".submenu")

// submenu.style.cssText = "background-color: white;"

for (var i = 0; i < menuHeader.length; i++){
    subMenu[i].classList.add("hide")
}

function reveal(e, current, thi) {
    e.preventDefault()
    current.classList.toggle("hide")
    thi.classList.toggle("selected")
}


// for (var i = 0; i < menuHeader.length; i++){ 
//     (function () {
//         var currentHeader = menuHeader[i]
//         var currentObject = subMenu[i]
//         currentHeader.addEventListener("click", function (e){reveal(e,currentObject)} ,false)
//     }())
// }


for (var i = 0; i < menuHeader.length; i++){ 
    let currentHeader = menuHeader[i]
    let currentObject = subMenu[i]
    currentHeader.addEventListener("click", function (e){reveal(e,currentObject, this)} ,false)
}


var menuToggler = document.querySelectorAll(".toggler")
var subMenu = document.querySelectorAll(".submenu")

// submenu.style.cssText = "background-color: white;"

function hideAll () {
    for (var i = 0; i < menuToggler.length; i++){
        subMenu[i].classList.add("hide")
        menuToggler[i].classList.remove("selected")
    }
}

function reveal(e, current, thi) {

    e.preventDefault()
    current.classList.toggle("hide")
    thi.classList.toggle("selected")
}

hideAll()

for (var i = 0; i < menuToggler.length; i++){ 

    let currentHeader = menuToggler[i]
    let currentObject = subMenu[i]

    currentHeader.addEventListener("click", function (e){
        
        var numSelected = document.querySelectorAll(".selected").length

        if (numSelected == 0) {
            reveal(e,currentObject, this)
        } else if (currentHeader.classList.contains("selected")) {
            reveal(e,currentObject, this)
        } else {

            if (window.innerHeight < 800) {
                hideAll()
            }

            reveal(e,currentObject, this)
        }

    } ,false)
}


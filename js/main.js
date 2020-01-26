let minW800 = window.matchMedia("(min-width: 800px)")

// let menuContainer = document.querySelector("#menu-container")

let menuButtons = document.querySelectorAll(".menuButton")
let whoamiButton = document.querySelector("#whoamiButton")
let projectsButton = document.querySelector("#projectsButton")
let blogButton = document.querySelector("#blogButton")
let contactmeButton = document.querySelector("#contactmeButton")

function activateButton(button) {
    // button.classList.add("active")
    button.classList.add("textbox")
}

function deactivateAllButtons(buttons) {
    for (i = 0; i < buttons.length; ++i) {
        buttons[i].classList.remove("textbox")
    }
}

function showMenu(){
    let menuContainer = document.querySelector("#menu-container")
    menuContainer.style.display = "flex"
    burgerButton.style.display = "none"

    let contentContainer = document.querySelector("#content-container")
    contentContainer.style.display = "none" 

    deactivateAllButtons(menuButtons)
}

function adjustView () {
    if (minW800.matches) {

        menuContainer.style.display = "flex"
        menuContainer.style.width = "20%"
        burgerButton.style.display = "none"
        contentContainer.classList.add("active_content")
        contentContainer.classList.add("deactive_content")

        if (contentContainer.childElementCount == 0) {
            menuContainer.style.width = "100%"
            contentContainer.style.display = "none"
        }
        
    } else {
        menuContainer.style.display = "flex"
        menuContainer.style.width = "100%"
        contentContainer.classList.remove("active_content")
        contentContainer.classList.add("deactive_content")
    }
}

minW800.addListener(adjustView)

function switchView () {

    let menuContainer = document.querySelector("#menu-container")
    
    deactivateAllButtons(menuButtons)

    let contentContainer = document.querySelector("#content-container")

    if (minW800.matches) {
        menuContainer.style.display = "flex"
        menuContainer.style.width = "20%"
        contentContainer.classList.add("active_content")
    } else {
        menuContainer.style.display = "flex"
        menuContainer.style.width = "calc(100% - 2*10px)"
        contentContainer.classList.remove("active_content")
        contentContainer.classList.add("deactive_content")
    }

    contentContainer.style.display = "flex"
    burgerButton.style.display = "none"

    if (!minW800.matches) {
        menuContainer.style.display = "none"
        burgerButton.style.display = "flex"
    }
    
    while (contentContainer.childElementCount > 0) {
        contentContainer.removeChild(contentContainer.lastChild)
    }
}

function showWhoami() {
    switchView()
    contentContainer.appendChild(whoAmIContainer)
    activateButton(whoamiButton)
}

function showProjects() {
    switchView()
    contentContainer.appendChild(projectsContainer)
    activateButton(projectsButton)
}

function showBlog() {
    switchView()
    contentContainer.appendChild(blogContainer)
    activateButton(blogButton)
}

function showContactme() {
    switchView()
    contentContainer.appendChild(contactMeContainer)
    activateButton(contactmeButton)
}
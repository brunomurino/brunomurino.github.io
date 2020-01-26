let menuContainer = document.querySelector("#menu-container")

// HEADER

let menuHeader = document.createElement("header")
let menuHeaderTextSpan = document.createElement("span")
menuHeaderTextSpan.setAttribute("onclick", "location.reload()")
let menuHeaderText = document.createTextNode("Bruno Murino")
menuHeaderTextSpan.appendChild(menuHeaderText)
menuHeader.appendChild(menuHeaderTextSpan)
menuContainer.appendChild(menuHeader)

// MENU

let menuUl = document.createElement("ul")

let menuItems = [
    ["Who am I", "../../", "whoamiButton"],
    ["What I've done", "../../", "projectsButton"],
    ["What I've written", "../../", "blogButton"],
    ["Where to find me", "../../", "contactmeButton"],
]

menuUl.style.flexGrow = menuItems.length-1

for (let i = 0; i < menuItems.length; i++) {
    let menuLi = document.createElement("li")
    let menuA = document.createElement("a")
    menuA.setAttribute("href", menuItems[i][1])
    menuA.setAttribute("id", menuItems[i][2])
    menuA.setAttribute("class", "menuButton")
    let menuAtext = document.createTextNode(menuItems[i][0])
    menuA.appendChild(menuAtext)
    menuLi.appendChild(menuA)
    menuUl.appendChild(menuLi)
}

menuContainer.appendChild(menuUl)

// FOOTER

let menuFooter = document.createElement("footer")

let githubIcon = document.createElement("a")
githubIcon.setAttribute("id", "github-icon")
githubIcon.setAttribute("class", "fa fa-github")
githubIcon.setAttribute("href", "https://github.com/brunomurino")

let linkedinIcon = document.createElement("a")
linkedinIcon.setAttribute("id", "linkedin-icon")
linkedinIcon.setAttribute("class", "fa fa-linkedin-square")
linkedinIcon.setAttribute("href", "https://linkedin.com/in/brunomurino")

menuFooter.appendChild(githubIcon)
menuFooter.appendChild(linkedinIcon)

menuContainer.appendChild(menuFooter)

// BURGER BUTTON

let contentContainer = document.querySelector("#content-container")
let burgerButton = document.createElement("div")
burgerButton.setAttribute("id", "lines")
burgerButton.setAttribute("onclick","showMenu()")
burgerButton.style.display = "none"

// contentContainer.appendChild(burgerButton)
document.querySelector("body").appendChild(burgerButton)






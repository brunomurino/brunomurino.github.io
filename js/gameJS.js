var body = document.querySelector("body")

gameArea = document.createElement("main")
gameArea.id = "gameArea"
body.appendChild(gameArea)

gameUI = document.createElement("div")
gameUI.id = "gameUI"
gameUI.setAttribute("style",`
position: absolute;
height: 900px;
width: 80px;
align-self: center;
background-color: white;
left: 20px;
`)
body.appendChild(gameUI)

let numLifes = 5

gameUI.innerHTML = `Lifes: ${numLifes}`




var numDeadlyRegions = 6

var deadlyRegions = {}

for (i=1; i<=numDeadlyRegions; i++) {
    deadlyRegions[i] = document.createElement("div")
    deadlyRegions[i].classList.add("deadlyRegion")
    gameArea.appendChild(deadlyRegions[i])
}

var mainChar = document.createElement("div")
mainChar.id = "mainChar"
gameArea.appendChild(mainChar)


function initElement (element, h, w, posT, posL) {
    element.style.height = h + "px"
    element.style.width = w + "px"
    element.style.top = posT + "px"
    element.style.left = posL + "px"
}
var mainCharHeight = 20
var mainCharWidth = 20
var pageHeight = window.innerHeight
var pageWidth = window.innerWidth
mainCharInitPosT = pageHeight/2 - mainCharHeight/2
mainCharInitPosL = pageWidth/2 - mainCharWidth/2

function moveLeft(speed, keepInside) {
    mainChar.style.left = parseInt(mainChar.style.left)-speed +'px'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.left = parseInt(mainChar.style.left)+speed +'px'
    }
}

function moveUp (speed, keepInside) {
    mainChar.style.top = parseInt(mainChar.style.top)-speed +'px'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.top = parseInt(mainChar.style.top)+speed +'px'
    }
}

function moveRight (speed, keepInside) {
    mainChar.style.left = parseInt(mainChar.style.left)+speed +'px'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.left = parseInt(mainChar.style.left)-speed +'px'
    }
}

function moveDown (speed, keepInside) {
    mainChar.style.top = parseInt(mainChar.style.top)+speed +'px'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.top = parseInt(mainChar.style.top)-speed +'px'
    }
}

function getKeyAndMove(event){		
    var speed = 20		
    switch(event.keyCode){
        case 65:
        case 37: //left arrow key
            moveLeft(speed, true)
            break
        case 87:
        case 38: //Up arrow key
            moveUp(speed, true)
            break
        case 68:
        case 39: //right arrow key
            moveRight(speed, true)
            break
        case 83:
        case 40: //down arrow key
            moveDown(speed, true)
            break
    }
}

function initAll(){
    var isAlive = true
    initElement(mainChar, 20, 20, 0, 0)
    initElement(deadlyRegions[1], 150, 150, 100, 180)
    initElement(deadlyRegions[2], 200, 200, 600, 230)
    initElement(deadlyRegions[3], 150, 150, 200, 630)
    initElement(deadlyRegions[4], 200, 250, 350, 0)
    initElement(deadlyRegions[5], 230, 300, 670, 570)
    initElement(deadlyRegions[6], 130, 70, 400, 500)
    console.log("Position initialized")
}

function checkIfOnDeadlyRegion (me, regions){

    let meRect = me.getBoundingClientRect()

    for (i=1; i <= numDeadlyRegions; i++){
        
        let region = regions[i]  
        let regRect = region.getBoundingClientRect()
        let overlap = !(meRect.right <= regRect.left || 
            meRect.left >= regRect.right || 
            meRect.bottom <= regRect.top || 
            meRect.top >= regRect.bottom)
        if (overlap) {
            return true
        }
    }
    return false
}

function checkIfInside (me, area) {
    let meRect = me.getBoundingClientRect()
    let areaRect = area.getBoundingClientRect()

    let inside = !(meRect.right <= areaRect.left || 
        meRect.left >= areaRect.right || 
        meRect.bottom <= areaRect.top || 
        meRect.top >= areaRect.bottom)

    return inside

}

function checkIfAlive(){

    if (checkIfOnDeadlyRegion (mainChar, deadlyRegions)){
        return false
    }
    return true
}

function gameOver(){
    numLifes--
    if (numLifes == 0){
        alert("Game Over")
        numLifes = 5
        gameUI.innerHTML = `Lifes: ${numLifes}`
        initAll()
    } else {
        alert(`You lost a life. Only ${numLifes} left.`)
        gameUI.innerHTML = `Lifes: ${numLifes}`
        initAll()
    }
}

initAll()

setInterval(function (){

    window.addEventListener('keydown', getKeyAndMove)
    isAlive = checkIfAlive()
    isInside = checkIfInside(mainChar, gameArea)

    if (!isAlive) {
        setTimeout(gameOver(), 10) 
    }

}, 10)
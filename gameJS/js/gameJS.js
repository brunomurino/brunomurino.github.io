var gameArea = document.querySelector("#gameArea")
var gameUI = document.querySelector("#gameUI")
var stageNumber = document.querySelector("#stageNumber")
var lifeCounter = document.querySelector("#lifeCounter")
var lifeDrawing = document.querySelector("#lifeDrawing")
var mainChar = document.querySelector("#mainChar")
var finishLine = document.querySelector("#finishLine")

let numLifes = 5

function updateLifeCounter() {
    lifeCounter.innerHTML = `Lifes: ${numLifes}`
}

let lifeDrawings = {}

function updateLifeDrawings() {

    while (lifeDrawing.firstChild) {
        lifeDrawing.removeChild(lifeDrawing.firstChild);
    }

    for (i=1; i<=numLifes; i++) {
        lifeDrawings[i] = document.createElement("li")
        lifeDrawings[i].classList.add("lifeDraw")
        lifeDrawing.appendChild(lifeDrawings[i])
    }
}

let currentStage = 1

function updateStageNumber() {
    stageNumber.innerHTML = `Stage: ${currentStage}`
}

var numDeadlyRegions = 6

var deadlyRegions = {}
for (i=1; i<=numDeadlyRegions; i++) {
    deadlyRegions[i] = document.createElement("div")
    deadlyRegions[i].classList.add("deadlyRegion")
    gameArea.appendChild(deadlyRegions[i])
}

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
    var isInFinishLine = false

    updateStageNumber()
    updateLifeCounter()
    updateLifeDrawings()

    initElement(mainChar, 20, 20, 0, 0)
    initElement(finishLine, 20, 20, 680, 680)
    initElement(deadlyRegions[1], 150, 150, 0, 180)
    initElement(deadlyRegions[2], 200, 200, 500, 230)
    initElement(deadlyRegions[3], 250, 100, 150, 400)
    initElement(deadlyRegions[4], 100, 150, 200, 0)
    initElement(deadlyRegions[5], 200, 150, 500, 520)
    initElement(deadlyRegions[6], 200, 70, 200, 200)

    for (i=1; i<=numDeadlyRegions; i++) {
        deadlyRegions[i].classList.remove("showDeadlyRegion")
    }

    console.log("Stage 1 initialized.")
}

function checkOverlap (rect1, rect2){
    let overlap = !(
        rect1.right <= rect2.left || 
        rect1.left >= rect2.right || 
        rect1.bottom <= rect2.top || 
        rect1.top >= rect2.bottom
        )
    return overlap
}

function checkIfOnDeadlyRegion (me, regions){

    let meRect = me.getBoundingClientRect()

    for (i=1; i <= Object.keys(regions).length; i++){
        
        let region = regions[i]  
        let regRect = region.getBoundingClientRect()
        
        if (checkOverlap(meRect, regRect)) {
            return true
        }
    }
    return false
}

function checkIfInside (me, area) {
    let meRect = me.getBoundingClientRect()
    let areaRect = area.getBoundingClientRect()

    return checkOverlap(meRect, areaRect)
}

function checkIfAlive(){

    if (checkIfOnDeadlyRegion (mainChar, deadlyRegions)){
        return false
    }
    return true
}

function checkIfInFinishLine(){
    let meRect = mainChar.getBoundingClientRect()
    let flRect = finishLine.getBoundingClientRect()

    return checkOverlap(meRect,flRect)
}

function gameOver(){
    numLifes--
    if (numLifes == 0){
        alert("Game Over")
        numLifes = 5
        updateLifeCounter()
        updateLifeDrawings()
        initAll()
    } else {
        alert(`You lost a life. Only ${numLifes} left.`)
        updateLifeCounter()
        updateLifeDrawings()
        initAll()
    }
}

function stageComplete(){
    initElement(finishLine, 0, 0, 0, 0)
    window.removeEventListener('keydown', getKeyAndMove)
    for (i=1; i<=numDeadlyRegions; i++) {
        deadlyRegions[i].classList.add("showDeadlyRegion")
    }
    setTimeout( function(){
        alert("Congratulations! You beat this stage! Get ready for the next!")
        numLifes = 5
        updateLifeCounter()
        updateLifeDrawings()
        initAll() 
    }, 100)  
}

initAll()

setInterval(function (){

    window.addEventListener('keydown', getKeyAndMove)
    isAlive = checkIfAlive()
    isInFinishLine = checkIfInFinishLine()

    if (isInFinishLine) {
        stageComplete()
    }

    if (!isAlive) {
        gameOver()
    }

}, 10)
var gameArea = document.querySelector("#gameArea")
var deadlyAreas = document.querySelector("#deadlyRegions")
var gameUI = document.querySelector("#gameUI")
var levelNumber = document.querySelector("#levelNumber")
var markerCounter = document.querySelector("#markerCounter")
var lifeCounter = document.querySelector("#lifeCounter")
var lifeDrawing = document.querySelector("#lifeDrawing")
var mainChar = document.querySelector("#mainChar")
var finishLine = document.querySelector("#finishLine")
var safePathMarkers = document.querySelector("#safePathMarkers")

var numLifes
var currentLevel
var initLevel = {}
var numDeadlyRegions = {}
var deadlyRegions = {}
var maxSafePathMarkers = 3
var usedSafePathMarkers
var safePathMarker = {}

function updateUILife(numLifes) {

    let lifeDrawings = {}

    lifeCounter.innerHTML = `Lifes: ${numLifes}`
    lifeCounter.style.display = "none" // Comment this line to show the numerical life counter
    lifeDrawing.innerHTML = ""

    for (i=1; i<=numLifes; i++) {
        lifeDrawings[i] = document.createElement("li")
        lifeDrawings[i].classList.add("lifeDraw")
        lifeDrawing.appendChild(lifeDrawings[i])
    }
}

function updateUILevel(currentLevel) {
    levelNumber.innerHTML = `Level: ${currentLevel}`
}

function updateUIMarkers(usedSafePathMarkers) {
    let markersLeft = maxSafePathMarkers - usedSafePathMarkers
    markerCounter.innerHTML = `Markers: ${markersLeft}`
}

function initSafePathMarkers (){
    safePathMarkers.innerHTML = ""
    usedSafePathMarkers = 0
    for (i=1; i <= maxSafePathMarkers; i++){
        safePathMarker[i] = document.createElement("div")
        safePathMarker[i].classList.add("safePathMarker")
        safePathMarkers.appendChild(safePathMarker[i])
    }
}

function insertSafePathMarker(usedSafePathMarkers, mainChar) {

    let top = parseInt(mainChar.style.top)
    let left = parseInt(mainChar.style.left)

    console.log(`Inserted marker at ${top} and ${left}.`)

    initElement(safePathMarker[usedSafePathMarkers], 20, 20, top, left) 
}

function initDeadlyRegion(numRegions) {
    deadlyAreas.innerHTML = ""
    for (i=1; i <= numRegions; i++) {
        deadlyRegions[i] = document.createElement("div")
        deadlyRegions[i].classList.add("deadlyRegion")
        deadlyAreas.appendChild(deadlyRegions[i])
    }
}

function initElement (element, h, w, posT, posL) {
    element.style.height = h + "px"
    element.style.width = w + "px"
    element.style.top = posT + "px"
    element.style.left = posL + "px"
}

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
        case 32:
            if (usedSafePathMarkers < 3) {
                usedSafePathMarkers++
                insertSafePathMarker(usedSafePathMarkers, mainChar)
                updateUIMarkers(usedSafePathMarkers)
            } else {
                alert("You already used all the markers.")
            }
            
            break
    }
}

function hideDeadlyRegions(currentLevel) {
    for (i=1; i<=numDeadlyRegions[currentLevel]; i++) {
        deadlyRegions[i].classList.remove("showDeadlyRegion")
    }
}

function showDeadlyRegions(currentLevel) {
    for (i=1; i<=numDeadlyRegions[currentLevel]; i++) {
        deadlyRegions[i].classList.add("showDeadlyRegion")
    }
}

function initAll(currentLevel, numLifes){
    var isAlive = true
    var isInFinishLine = false

    updateUILevel(currentLevel)
    updateUILife(numLifes)
    updateUIMarkers(usedSafePathMarkers)

    initElement(mainChar, 20, 20, 0, 0)
    initElement(finishLine, 20, 20, 680, 680)

    initDeadlyRegion(numDeadlyRegions[currentLevel])

    initLevel[currentLevel]()

    console.log(`Level ${currentLevel} initialized.`)
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

function resetSafePathMarkers(){
    usedSafePathMarkers = 0
    for (i=1; i <= maxSafePathMarkers; i++){
        initElement(safePathMarker[i], 0,0,0,0)
    }
}

function gameOver(){
    numLifes--
    if (numLifes == 0){
        alert("Game Over")
        numLifes = 5
        initSafePathMarkers()
        initAll(currentLevel, numLifes)
    } else {
        alert(`You lost a life. Only ${numLifes} left.`)
        initAll(currentLevel, numLifes)
    }
}

function levelComplete(){

    initElement(finishLine, 0, 0, 0, 0)

    window.removeEventListener('keydown', getKeyAndMove)

    showDeadlyRegions(currentLevel)

    setTimeout( function(){

        currentLevel++
        initSafePathMarkers()
        numLifes = 5

        if (typeof numDeadlyRegions[currentLevel] == "undefined"){
            alert("Congratulations! You beat the game!!!!!")
            currentLevel = 1
        } else {
            alert("Congratulations! You beat this level! Get ready for the next!")
        }

        initAll(currentLevel, numLifes)

    }, 100)  
}

// ################################################################# DEFINITION OF THE LEVELS

numDeadlyRegions[1] = 6
initLevel[1] = function (){

    initElement(deadlyRegions[1], 150, 150, 0, 180)
    initElement(deadlyRegions[2], 200, 200, 500, 230)
    initElement(deadlyRegions[3], 250, 100, 150, 400)
    initElement(deadlyRegions[4], 100, 150, 200, 0)
    initElement(deadlyRegions[5], 200, 160, 500, 520)
    initElement(deadlyRegions[6], 200, 70, 200, 200)

    hideDeadlyRegions(1)
}

numDeadlyRegions[2] = 3
initLevel[2] = function (){

    initElement(deadlyRegions[1], 150, 150, 0, 180)
    initElement(deadlyRegions[2], 200, 200, 500, 230)
    initElement(deadlyRegions[3], 250, 100, 150, 400)

    hideDeadlyRegions(2)
}

numDeadlyRegions[3] = 1
initLevel[3] = function (){

    initElement(deadlyRegions[1], 660, 660, 20, 20)

    hideDeadlyRegions(3)
}

// ################################################################# RUNNING THE GAME

numLifes = 5
currentLevel = 1
usedSafePathMarkers = 0
initSafePathMarkers()
initAll(currentLevel, numLifes)

setInterval(function (){

    window.addEventListener('keydown', getKeyAndMove)
    isAlive = checkIfAlive()
    isInFinishLine = checkIfInFinishLine()

    if (isInFinishLine) {
        levelComplete()
    }

    if (!isAlive) {
        gameOver()
    }

}, 10)
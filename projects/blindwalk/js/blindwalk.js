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
var pathFollowed = document.querySelector("#pathFollowed")
var scoreCounter = document.querySelector("#scoreCounter")

var numLifes
var currentLevel
var score
var initLevel = {}
var numDeadlyRegions = {}
var deadlyRegions = {}
var maxSafePathMarkers = 3
var usedSafePathMarkers
var safePathMarker = {}
var path = {}
var numPath

function createPathMarker(mainChar) {
    numPath++
    path[numPath] = document.createElement("div")
    path[numPath].classList.add("pathFollowed")

    pathFollowed.appendChild(path[numPath])

    let top = parseInt(mainChar.style.top)
    let left = parseInt(mainChar.style.left)

    initElement(path[numPath], 2, 2, top, left) 
}

function resetPathMarker() {
    numPath = 0
    pathFollowed.innerHTML = ""
}

function updateUILife(numLifes) {

    let lifeDrawings = {}

    lifeCounter.innerHTML = `Lifes: ${numLifes}`
    lifeCounter.style.display = "none" // Comment this line to show the numerical life counter
    lifeDrawing.innerHTML = ""

    for (i=1; i<=numLifes; i++) {
        lifeDrawings[i] = document.createElement("li")
        if (i<=5) {
            lifeDrawings[i].classList.add("lifeDraw")
        } else {
            lifeDrawings[i].classList.add("lifeDraw")
            lifeDrawings[i].classList.add("extraLifeDraw")
            let formerDrawing0 = lifeDrawings[1].getBoundingClientRect().left
            let formerDrawing2 = lifeDrawings[i-1].getBoundingClientRect().left
            let distance = formerDrawing2 - formerDrawing0
            let newLeft = distance + 40
            if (i==6) {
                newLeft = distance + 60
            }
            lifeDrawings[i].style.left = `${newLeft}px`
        }
        lifeDrawing.appendChild(lifeDrawings[i])
    }

}

function updateUILevel(currentLevel) {
    levelNumber.innerHTML = `Level: ${currentLevel}`
}

function updateUIScore(score) {
    scoreCounter.innerHTML = `Score: ${score}`
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

    initElement(safePathMarker[usedSafePathMarkers], 2, 2, top, left) 
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
    element.style.height = h + "vh"
    element.style.width = w + "vh"
    element.style.top = posT + "vh"
    element.style.left = posL + "vh"
}

function initFinishLine () {
    finishLine.style.height = 2 + "vh"
    finishLine.style.width = 2 + "vh"
    finishLine.style.bottom = 0 + "vh"
    finishLine.style.right = 0 + "vh"
}

function moveLeft(speed, keepInside) {
    mainChar.style.left = parseInt(mainChar.style.left)-speed +'vh'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.left = parseInt(mainChar.style.left)+speed +'vh'
    }
}

function moveUp (speed, keepInside) {
    mainChar.style.top = parseInt(mainChar.style.top)-speed +'vh'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.top = parseInt(mainChar.style.top)+speed +'vh'
    }
}

function moveRight (speed, keepInside) {
    mainChar.style.left = parseInt(mainChar.style.left)+speed +'vh'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.left = parseInt(mainChar.style.left)-speed +'vh'
    }
}

function moveDown (speed, keepInside) {
    mainChar.style.top = parseInt(mainChar.style.top)+speed +'vh'
    if (keepInside && !checkIfInside(mainChar,gameArea)){
        mainChar.style.top = parseInt(mainChar.style.top)-speed +'vh'
    }
}

function getKeyAndMove(event){
    var speed = 2		
    switch(event.keyCode){
        case 65:
        case 37: //left arrow key
            createPathMarker(mainChar)
            moveLeft(speed, true)
            break
        case 87:
        case 38: //Up arrow key
            createPathMarker(mainChar,)
            moveUp(speed, true)
            break
        case 68:
        case 39: //right arrow key
            createPathMarker(mainChar)
            moveRight(speed, true)
            break
        case 83:
        case 40: //down arrow key
            createPathMarker(mainChar)
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

function showPathFollowed(){
    for (i=1; i<= numPath; i++) {
        path[i].classList.add("showPathFollowed")
    }
}

function initAll(currentLevel, numLifes){
    var isAlive = true
    var isInFinishLine = false

    updateUILevel(currentLevel)
    updateUIScore(score)
    updateUILife(numLifes)

    updateUIMarkers(usedSafePathMarkers)
    resetPathMarker()

    initElement(mainChar, 2, 2, 0, 0)
    initFinishLine()
    
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
        numLifes--
        alert(`Oops! You hit an invisible wall and lost a life! Only ${numLifes} lifes remaining!`)
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
    
    if (numLifes == 0){
        alert("Game Over")
        numLifes = 5
        score = 0
        currentLevel = 1
        initSafePathMarkers()
    } 
    initAll(currentLevel, numLifes) 

}

function levelComplete(){

    initElement(mainChar, 2, 2, 0, 0)
    initFinishLine()

    window.removeEventListener('keydown', getKeyAndMove)

    showDeadlyRegions(currentLevel)

    showPathFollowed()

    setTimeout( function(){

        currentLevel++
        
        numLifes += 2
        score += 100

        if (numLifes >7) {
            numLifes = 7
        }
        
        initSafePathMarkers()

        if (typeof numDeadlyRegions[currentLevel] == "undefined"){
            alert("Congratulations! You beat the game!!!!!")
            numLifes = 5
            currentLevel = 1
            score = 0
        } else {
            alert(`Congratulations! You beat this level in ${numPath} steps! Get ready for the next!`)
        }

        initAll(currentLevel, numLifes)

    }, 100)  
}

// ################################################################# DEFINITION OF THE LEVELS

// numDeadlyRegions[1] = 0
// initLevel[1] = function (){

//     hideDeadlyRegions(0)
// }

numDeadlyRegions[1] = 6
initLevel[1] = function (){

    initElement(deadlyRegions[1], 14, 16, 0, 18)
    initElement(deadlyRegions[2], 16, 20, 44, 12)
    initElement(deadlyRegions[3], 24, 10, 14, 40)
    initElement(deadlyRegions[4], 10, 16, 20, 0)
    initElement(deadlyRegions[5], 16, 16, 44, 42)
    initElement(deadlyRegions[6], 20, 6, 18, 18)

    hideDeadlyRegions(1)
}

numDeadlyRegions[2] = 3
initLevel[2] = function (){

    initElement(deadlyRegions[1], 14, 16, 0, 18)
    initElement(deadlyRegions[2], 16, 20, 44, 12)
    initElement(deadlyRegions[3], 24, 10, 14, 40)

    hideDeadlyRegions(2)
}

numDeadlyRegions[3] = 1
initLevel[3] = function (){

    initElement(deadlyRegions[1], 56, 56, 2, 2)

    hideDeadlyRegions(3)
}

// ################################################################# RUNNING THE GAME

numLifes = 5
currentLevel = 1
usedSafePathMarkers = 0
numPath = 0
score = 0

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
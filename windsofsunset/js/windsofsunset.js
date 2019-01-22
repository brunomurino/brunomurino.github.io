var fullMap = document.querySelector("#fullMap")

function initElement (element, h, w, posT, posL) {
    element.style.height = h + "px"
    element.style.width = w + "px"
    element.style.top = posT + "px"
    element.style.left = posL + "px"
}



function moveLeft(speed) {
    fullMap.style.left = parseInt(fullMap.style.left)+speed +'px'
}

function moveUp (speed) {
    fullMap.style.top = parseInt(fullMap.style.top)+speed +'px'
}

function moveRight (speed) {
    fullMap.style.left = parseInt(fullMap.style.left)-speed +'px'
}

function moveDown (speed) {
    fullMap.style.top = parseInt(fullMap.style.top)-speed +'px'
}

function getKeyAndMove(event){
    var speed = 20		
    switch(event.keyCode){
        case 65:
        case 37: //left arrow key
            moveLeft(speed)
            break
        case 87:
        case 38: //Up arrow key
            moveUp(speed)
            break
        case 68:
        case 39: //right arrow key
            moveRight(speed)
            break
        case 83:
        case 40: //down arrow key
            moveDown(speed)
            break
        // case 32:
        //     if (usedSafePathMarkers < 3) {
        //         usedSafePathMarkers++
        //         insertSafePathMarker(usedSafePathMarkers, mainChar)
        //         updateUIMarkers(usedSafePathMarkers)
        //     } else {
        //         alert("You already used all the markers.")
        //     }
            
        //     break
    }
}
console.log("Started Game.")
initElement(fullMap, 600,600,0,0)
setInterval(function (){

    window.addEventListener('keydown', getKeyAndMove)

    // isAlive = checkIfAlive()
    // isInFinishLine = checkIfInFinishLine()

    // if (isInFinishLine) {
    //     levelComplete()
    // }

    // if (!isAlive) {
    //     gameOver()
    // }

}, 10)
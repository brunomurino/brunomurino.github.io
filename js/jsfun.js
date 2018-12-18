console.log("Hello World!")

var myElement = document.querySelector(".content p")

myElement.innerHTML = ""
myElement.id = "circle"

myElement.style.color = "red";
myElement.style.top = 0;
myElement.style.left = 0;

window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":
        alert("Hi")
        break;
      case "ArrowRight":
      myElement.style.left = 50;
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  }, false);

var handSecLondon = document.querySelectorAll(".handSec")[0]
var handMinLondon = document.querySelectorAll(".handMin")[0]
var handHourLondon = document.querySelectorAll(".handHour")[0]

var handSecSP = document.querySelectorAll(".handSec")[1]
var handMinSP = document.querySelectorAll(".handMin")[1]
var handHourSP = document.querySelectorAll(".handHour")[1]

function addTimezone(location, handSec, handMin, handHour) {
  let now = moment().tz(location)

  let seconds = now.second()
  let secondsDegrees = ((seconds / 60) * 360) + 180
  handSec.style.transform = `rotate(${secondsDegrees}deg)`

  let mins = now.minute()
  let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 180
  handMin.style.transform = `rotate(${minsDegrees}deg)`

  let hour = now.hour()
  let hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 180
  handHour.style.transform = `rotate(${hourDegrees}deg)`
}

function setDate() {
  addTimezone("Europe/London", handSecLondon, handMinLondon, handHourLondon)
  addTimezone("America/Sao_Paulo", handSecSP, handMinSP, handHourSP)
}

setInterval(setDate, 1000)
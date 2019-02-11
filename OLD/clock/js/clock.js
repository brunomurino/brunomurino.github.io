var handSecLondon = document.querySelectorAll(".handSec")[0]
var handMinLondon = document.querySelectorAll(".handMin")[0]
var handHourLondon = document.querySelectorAll(".handHour")[0]

var handSecSP = document.querySelectorAll(".handSec")[1]
var handMinSP = document.querySelectorAll(".handMin")[1]
var handHourSP = document.querySelectorAll(".handHour")[1]

function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 180
  handSecLondon.style.transform = `rotate(${secondsDegrees}deg)`
  handSecSP.style.transform = `rotate(${secondsDegrees}deg)`

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 180
  handMinLondon.style.transform = `rotate(${minsDegrees}deg)`
  handMinSP.style.transform = `rotate(${minsDegrees}deg)`

  const hourLondon = now.getHours()
  const hourDegreesLondon = ((hourLondon / 12) * 360) + ((mins/60)*30) + 180
  handHourLondon.style.transform = `rotate(${hourDegreesLondon}deg)`

  const hourSP = now.getHours() - 2
  const hourDegreesSP = ((hourSP / 12) * 360) + ((mins/60)*30) + 180
  handHourSP.style.transform = `rotate(${hourDegreesSP}deg)`
}

setInterval(setDate, 1000)
let contactMeContainer = document.createElement("div")
contactMeContainer.setAttribute("id", "contactme-container")
contactMeContainer.setAttribute("class", "container")

let contactMePhoneSpan = document.createElement("span")
let contactMePhone = document.createTextNode("+44 (0) 78989 76564")

let contactMeEmailSpan = document.createElement("span")
let contactMeEmail = document.createTextNode("bfsmurino@gmail.com")

let contactMeLocationSpan = document.createElement("span")
let contactMeLocation = document.createTextNode("London, UK")

contactMePhoneSpan.appendChild(contactMePhone)
contactMeEmailSpan.appendChild(contactMeEmail)
contactMeLocationSpan.appendChild(contactMeLocation)

contactMeContainer.appendChild(contactMePhoneSpan)
contactMeContainer.appendChild(contactMeEmailSpan)
contactMeContainer.appendChild(contactMeLocationSpan)



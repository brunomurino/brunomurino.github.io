let whoAmIContainer = document.createElement("div")
whoAmIContainer.setAttribute("id", "whoami-container")
whoAmIContainer.setAttribute("class", "container")

// CV LINK

let cvLink = document.createElement("a")
cvLink.setAttribute("id", "linkcv")
let cvLinkText = document.createTextNode("CV")
cvLink.setAttribute("href" , "BrunoMurinoResume.pdf")
cvLink.appendChild(cvLinkText)

// PARAGRAPH

let whoAmIParagraph = document.createElement("p")

let whoAmIText = `I graduated in July 2017 with a First Class in my BSc in Physics from the University of São Paulo. <br><br>

After graduating I immediately started a master degree in theoretical physics and after 5 months I also started working at Ernst & Young to try something out of the academy that would still use my analytical and problem solving skills. <br><br>

After 4 months working at EY I quit to dedicate myself fully to the master degree. However, after I finished the degree’s coursework (1 year) I concluded that theoretical physics research wasn’t the path for me, so I started studying web development/data science and relocated to London to find my first professional role in software development/data science. <br><br>

I’m currently looking for a challenging analytical role within technology where I can utilise both my analytical skill set and my tech skills.`

whoAmIParagraph.innerHTML = whoAmIText
whoAmIParagraph.setAttribute("class", "textbox")
// Add to page

whoAmIContainer.appendChild(cvLink)
whoAmIContainer.appendChild(whoAmIParagraph)




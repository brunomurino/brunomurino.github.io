let projectsContainer = document.createElement("div")
projectsContainer.setAttribute("id", "projects-container")
projectsContainer.setAttribute("class", "container")

function addProject(name, link, description) {
    let newProject = document.createElement("div")

    let newProjectAnchor = document.createElement("a")
    let newProjectAnchorText = document.createTextNode(name)
    newProjectAnchor.appendChild(newProjectAnchorText)
    newProjectAnchor.setAttribute("href", link)
    newProject.appendChild(newProjectAnchor)
    
    let newProjectDescription = document.createElement("span")
    let newProjectDescriptionText = document.createTextNode(description)
    newProjectDescription.appendChild(newProjectDescriptionText)
    newProject.appendChild(newProjectDescription)

    projectsContainer.appendChild(newProject)
}

addProject("GoKana", "https://github.com/brunomurino/GoKana", `
Program to practice identifying hiragana and katakana characters. Written in Go.
`)

addProject("PyKana", "https://github.com/brunomurino/PyKana", `
Program to practice identifying hiragana and katakana characters. Written in Python.
`)

addProject("PyHashChain", "https://github.com/brunomurino/PyHashChain", `
CLI to create transactions, hash them, and save the hash in a block file. Built with pythoncmd module.
`)

addProject("London Map Visualization", "https://github.com/brunomurino/Small-projects/blob/master/London-Map-visualisations/London-Map-visualisations.ipynb", `
Geographic plot practice project using London postcodes data. Python, Pandas, Basemap.
`)

addProject("Blind Walk (Game)", "/projects/blindwalk/", `
Simple game with collision mechanics built with HTML5, CSS3 and vanilla JavaScript.
`)

addProject("Analog clock", "/projects/analog-clock/", `
Analog clock built with JavaScript.
`)












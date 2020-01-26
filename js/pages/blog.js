let blogContainer = document.createElement("div")
blogContainer.setAttribute("id", "blog-container")
blogContainer.setAttribute("class", "container")

function addBlogPost(name, link) {
    let newProject = document.createElement("div")

    let newProjectAnchor = document.createElement("a")
    let newProjectAnchorText = document.createTextNode(name)
    newProjectAnchor.appendChild(newProjectAnchorText)
    newProjectAnchor.setAttribute("href", link)
    newProject.appendChild(newProjectAnchor)

    blogContainer.appendChild(newProject)
}

addBlogPost("Intro Block Storage", "./pages/intro_block_storage/")

addBlogPost("PyKana", "./pages/intro_block_storage/")

addBlogPost("PyHashChain", "./pages/intro_block_storage/")











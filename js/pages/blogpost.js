let blogPostContainer = document.createElement("div")
blogPostContainer.setAttribute("id", "blogpost-container")
blogPostContainer.setAttribute("class", "container")
// blogPostContainer.setAttribute("class", "textbox")

function addBlogPostContent() {
    let newPost = document.createElement("div")
    newPost.classList.add("blogPostContent")

    let zeromd = document.createElement("zero-md")
    zeromd.setAttribute("src", "post.md")

    newPost.appendChild(zeromd)
    blogPostContainer.appendChild(newPost)
}

switchView()
contentContainer.appendChild(blogPostContainer)
activateButton(blogButton)

addBlogPostContent()

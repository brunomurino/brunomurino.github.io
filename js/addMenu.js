var menuHTML = `
<div class="nav-wrapper">
    <nav Id="sidenav" class="split" >

        <a href="whoami.html" class="menuHeader">Who am I</a>

        <a href="#" class="menuHeader toggler selected">What I've done</a>
        <ul class="submenu">
            <li class="submenuitem">
                <a href="projects.html">View Projects</a>
            </li>
            <li class="submenuitem">
                <a href="jsfun.html">JavaScript fun!</a>
            </li>
            <li class="submenuitem">
                <a href="BrunoMurinoResume.pdf" download  >Download  CV</a>
            </li>
        </ul>

        <div class="menuHeader toggler selected">Where to find me</div>
        <ul class="submenu">
            <li class="submenuitem">
                <p>+447898976564</p>
            </li>
            <li class="submenuitem">
                <p>bfsmurino@gmail.com</p>
            </li>
            <li class="submenuitem">
                <p>London, UK</p>
            </li>
        </ul>

    </nav>
</div>

<div class="footer-wrapper">
    <footer>
        <a href="https://github.com/brunomurino" class="fa fa-github"></a>
        <a href="https://www.linkedin.com/in/brunomurino/" class="fa fa-linkedin-square"></a>
        <!-- <a href="#" class="fa fa-twitter"></a> -->
    </footer>
</div>
`

var menu = document.querySelector("div.menu")
menu.innerHTML = menuHTML
console.log("Menu was added.")
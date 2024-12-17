import React from 'react'

const Navbar = () => {

    const menuButtons = document.getElementsByClassName("menu-button")
    var menuDisplayed = false

    const toggleMenu = () => {
        if (menuDisplayed === false) {
            for (let i=0; i<menuButtons.length; i++) {
                menuButtons[i].style.display = "block"
            }
            document.getElementById("menuIcon").src = "cancel-icon.png"
            menuDisplayed = true
        } else {
            for (let i=0; i<menuButtons.length; i++) {
                menuButtons[i].style.display = "none"
            }
            document.getElementById("menuIcon").src = "menu-icon.png"
            menuDisplayed = false
        }
    }

    return(
        <nav>
            <div class="container-fluid ps-3 pe-0">
                <div class="row w-100 pt-2 pb-2">
                    <div class="col-lg-1 col-md-2 d-flex justify-content-between">
                        <a class="p-0" href="/"><img class="rounded" src="logo.png" alt="Website Logo" height="30"></img></a>
                        <a class="m-0 p-0 btn d-block d-md-none" onClick={toggleMenu}><img id="menuIcon" src="menu-icon.png" alt="menu icon" height="30"></img></a>
                    </div>

                    {/*
                    <div class="col-lg-1 col-md-2 text-center me-lg-2">
                        <a class="p-1 btn nav-button d-none d-md-block" href="/agenda">Agenda</a>
                        <a class="p-1 btn nav-button menu-button" style={{display: "none"}} href="/agenda" onClick={toggleMenu}>Agenda</a>
                    </div>
                    */}

                    <div class="col-lg-1 col-md-2 text-center me-lg-3">
                        <a class="p-1 btn nav-button d-none d-md-block" href="/calculator">Calculadora</a>
                        <a class="p-1 btn nav-button menu-button" style={{display: "none"}} href="/calculator" onClick={toggleMenu}>Calculadora</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button d-none d-md-block" href="/time">Hora</a>
                        <a class="p-1 btn nav-button menu-button" style={{display: "none"}} href="/time" onClick={toggleMenu}>Hora</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center me-lg-1">
                        <a class="p-1 btn nav-button d-none d-md-block" href="/notes">Notas</a>
                        <a class="p-1 btn nav-button menu-button" style={{display: "none"}} href="/notes" onClick={toggleMenu}>Notas</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button d-none d-md-block" href="/weather-select">Tiempo</a>
                        <a class="p-1 btn nav-button menu-button" style={{display: "none"}} href="/weather-select" onClick={toggleMenu}>Tiempo</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
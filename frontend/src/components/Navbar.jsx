import React from 'react'

const Navbar = () => {

    return(
        <nav>
            <div class="container-fluid">
                <div class="row w-100 pt-2 pb-2">
                    <div class="col-lg-1 col-md-2">
                        <a class="p-0" href="/"><img class="rounded" src="logo.png" alt="Website Logo" height="30"></img></a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button" href="/agenda">Agenda</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button" href="/calculator">Calculadora</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button" href="/time">Hora</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button" href="/notes">Notas</a>
                    </div>

                    <div class="col-lg-1 col-md-2 text-center">
                        <a class="p-1 btn nav-button" href="/weather">Tiempo</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
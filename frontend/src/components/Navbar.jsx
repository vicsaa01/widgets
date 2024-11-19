import React from 'react'

const Navbar = () => {

    return(
        <nav>
            <div class="container-fluid">
                <div class="row w-100">
                    <div class="col pt-2 pb-2">
                        <a class="rounded me-5 p-0" href="/"><img class="rounded" src="logo.png" alt="Website Logo" height="30"></img></a>
                        <a class="btn rounded nav-button me-3 p-1" href="/agenda">Agenda</a>
                        <a class="btn rounded nav-button me-3 p-1" href="/calculator">Calculator</a>
                        <a class="btn rounded nav-button me-3 p-1" href="/notes">Notes</a>
                        <a class="btn rounded nav-button me-3 p-1" href="/time">Time</a>
                        <a class="btn rounded nav-button p-1" href="/weather">Weather</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
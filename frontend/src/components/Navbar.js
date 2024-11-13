import React from 'react'

const Navbar = () => {

    return(
        <nav>
            <div class="container-fluid">
                <div class="row">
                    <div class="col pt-2 pb-2">
                        <a class="bg-white rounded me-5 p-0" href="/"><img class="rounded" src="logo.png" alt="Website Logo"></img></a>
                        <a class="btn rounded nav-button me-3" href="/calculator">Calculator</a>
                        <a class="btn rounded nav-button me-3" href="/time">Time</a>
                        <a class="btn rounded nav-button" href="/weather">Weather</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
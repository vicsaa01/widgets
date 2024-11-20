import React from 'react'

import Day from '../components/Day'

const Weather = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1"></div>

            <div class="col-lg-8 col-md-10 large-page">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Weather</h3>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <Day position="0"/>
                    <Day position="1"/>
                    <Day position="2"/>
                    <Day position="3"/>
                    <Day position="4"/>
                    <Day position="5"/>
                    <Day position="6"/>
                    <Day position="7"/>
                </div>
            </div>

            <div class="col-lg-2 col-md-1"></div>
        </main>
    )
}

export default Weather
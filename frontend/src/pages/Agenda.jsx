import React from 'react'

import Day from '../components/Day'

const Agenda = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>

            <div class="col-lg-8 col-md-10 col-sm-12 col-12 ps-4">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Agenda</h3>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <Day position="0" type="agenda"/>
                    <Day position="1" type="agenda"/>
                    <Day position="2" type="agenda"/>
                    <Day position="3" type="agenda"/>
                    <Day position="4" type="agenda"/>
                    <Day position="5" type="agenda"/>
                    <Day position="6" type="agenda"/>
                    <Day position="7" type="agenda"/>
                </div>
            </div>

            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>
        </main>
    )
}

export default Agenda
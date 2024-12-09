import React from 'react'
import {useState, useEffect} from 'react'

import Day from '../components/Day'
import apiKey from '../connex-params-aemet'

const Weather = () => {

    // Get town ID

    const params = new URLSearchParams(window.location.search)
    const municipio = params.get("municipio")
    const [townName, setTownName] = useState("")

    // Get daily weather prediction as JSON object from AEMET API

    const [pred, setPred] = useState([])
    const url = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/' + municipio + '/?api_key=' + apiKey

    useEffect(() => {
        try {
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    if (data.estado == "200") {
                        fetch(data.datos)
                            .then((res) => {
                                return res.json()
                            })
                            .then((data) => {
                                console.log('Data fecthed:')
                                console.log(data[0])
                                setPred(data[0].prediccion.dia)
                                setTownName(data[0].nombre)
                            })
                    } else {
                        console.log('Error in first fetch: ' + data.estado)
                    }
                })
        } catch(e) {
            window.location.reload(true)
        }
    }, [url])

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>

            <div class="col-lg-8 col-md-10 col-sm-12 col-12 ps-4">
                <div class="row w-100 mt-5">
                    <h3 class="text-dark text-center">Tiempo</h3>
                </div>

                <div class="row w-100 mt-3 mb-5">
                    <p class="text-dark text-center">Localidad: {townName} | Fuente: AEMET</p>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    {(pred != undefined) && <Day position="0" type="weather" pred={pred[0]}/>}
                    {(pred != undefined) && <Day position="1" type="weather" pred={pred[1]}/>}
                    {(pred != undefined) && <Day position="2" type="weather" pred={pred[2]}/>}
                    {(pred != undefined) && <Day position="3" type="weather" pred={pred[3]}/>}
                    {(pred != undefined) && <Day position="4" type="weather" pred={pred[4]}/>}
                    {(pred != undefined) && <Day position="5" type="weather" pred={pred[5]}/>}
                    {(pred != undefined) && <Day position="6" type="weather" pred={pred[6]}/>}
                    {(pred != undefined) && <Day position="7" type="weather" pred={pred[7]}/>}
                </div>
            </div>

            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>
        </main>
    )
}

export default Weather
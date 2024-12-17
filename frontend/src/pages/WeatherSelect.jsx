import React from 'react'
import {useState, useEffect} from 'react'

import Day from '../components/Day'
import apiKey from '../connex-params-aemet'

const WeatherSelect = () => {

    // Select logic

    const [provincia, setProvincia] = useState("")
    const [municipios, setMunicipios] = useState([])
    const [codes, setCodes] = useState([])

    const municipioOptions = {
        Albacete: ["Abengibre", "Albacete"],
        Alicante: ["Alicante", "Elche"],
        Barcelona: ["Barcelona"],
        Madrid: ["Madrid"],
        Murcia: ["Cartagena", "Murcia"],
        Teruel: ["Puertomingalvo"],
        Valencia: ["Benetússer", "Catarroja", "Eliana, l'", "València"]
    }

    const codeOptions = {
        Albacete: ["02001", "02003"],
        Alicante: ["03014", "03065"],
        Barcelona: ["08019"],
        Madrid: ["28079"],
        Murcia: ["30016", "30030"],
        Teruel: ["44193"],
        Valencia: ["46054", "46094", "46116", "46250"]
    }

    const handleSelectChange = (e) => {
        let selectedProvincia = e.target.value
        setProvincia(selectedProvincia)
        setMunicipios(municipioOptions[selectedProvincia])
        setCodes(codeOptions[selectedProvincia])
    }

    const handleClick = () => {
        const selector = document.getElementById("municipioSelector")
        if (selector.value == "" || selector.value == null) {
            alert("Por favor, selecciona una localidad")
        } else {
            window.location.href = "/weather?municipio=" + selector.value
        }
    }

    return(
        <main class="d-flex large-page">
            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>

            <div class="col-lg-8 col-md-10 col-sm-12 col-12 ps-4">
                <div class="row w-100 mt-5">
                    <h3 class="text-dark text-center">Tiempo</h3>
                </div>

                <div class="row w-100">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mb-5">
                        <h5>Selecciona una provincia:</h5>

                        <select class="w-100 mt-3" id="provinciaSelector" value={provincia} onChange={handleSelectChange}>
                            <option value="" disabled>(Provincia)</option>
                            <option value="Albacete">Albacete</option>
                            <option value="Alicante">Alicante</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Murcia">Murcia</option>
                            <option value="Teruel">Teruel</option>
                            <option value="Valencia">Valencia</option>
                        </select>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 mb-5">
                        <h5>Selecciona una localidad:</h5>

                        <select class="w-100 mt-3" id="municipioSelector">
                            <option value="">(Localidad)</option>
                            {municipios.map((municipio, i) => (
                                <option value={codes[i]}>{municipio}</option>
                            ))}
                        </select>
                    </div>

                    <div class="row w-100 m-0 mt-5 mb-5 p-0">
                        <div class="col-12 d-flex justify-content-end">
                            <a class="btn border border-dark rounded" onClick={handleClick}>Ver predicción</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-1 col-sm-0 col-0"></div>
        </main>
    )
}

export default WeatherSelect
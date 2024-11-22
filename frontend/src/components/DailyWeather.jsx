import React from "react"

const DailyWeather = (props) => {

    return(
        <>
            <br/>
            {(props.pred != undefined) && <p class="text-danger fw-bold">{props.pred.temperatura.maxima} ºC</p>}
            {(props.pred != undefined) && <p class="text-primary fw-bold">{props.pred.temperatura.minima} ºC</p>}

            {(props.pred == undefined) && <><p>Todavía no hay predicción</p><p>(disponible a partir de mañana)</p></>}
        </>
    )
}

export default DailyWeather
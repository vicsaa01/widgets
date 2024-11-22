import React from "react"

const DailyWeather = (props) => {

    return(
        <>
            <br/>
            {(props.pred != undefined) && <p class="text-danger">{props.pred.temperatura.maxima} ºC</p>}
            {(props.pred != undefined) && <p class="text-primary">{props.pred.temperatura.minima} ºC</p>}

            {(props.pred == undefined) && <><p>Todavía no hay predicción</p><p>Consulte a partir de mañana</p></>}
        </>
    )
}

export default DailyWeather
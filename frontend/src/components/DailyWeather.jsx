import React from "react"

const DailyWeather = (props) => {

    return(
        <>
            {(props.pred != undefined) &&
                <>
                    <div class="row">
                        <div class="col">
                            <p class="text-danger fw-bold mb-2">{props.pred.temperatura.maxima} ºC</p>
                            <p class="text-primary fw-bold">{props.pred.temperatura.minima} ºC</p>
                        </div>
                        <div class="col">
                            <p class="mb-2">{props.pred.rachaMax[0].value == '' ? 0 : props.pred.rachaMax[0].value} km/h</p>
                            <p>{props.pred.humedadRelativa.minima}-{props.pred.humedadRelativa.maxima}%</p>
                        </div>
                    </div>

                    <br/>

                    <div class="row">
                        <div class="col p-0">0-6</div>
                        <div class="col p-0">6-12</div>
                        <div class="col p-0">12-18</div>
                        <div class="col p-0">18-24</div>
                    </div>

                    <div class="row">
                        <div class="col p-0">
                            {(props.pred.estadoCielo[3] != undefined && props.pred.estadoCielo[3].value != '') && <img class="" src={"/img/weather-icons/" + props.pred.estadoCielo[3].value + ".png"}></img>}
                        </div>
                        <div class="col p-0">
                            {(props.pred.estadoCielo[4] != undefined && props.pred.estadoCielo[4].value != '') && <img class="" src={"/img/weather-icons/" + props.pred.estadoCielo[4].value + ".png"}></img>}
                        </div>
                        <div class="col p-0">
                            {(props.pred.estadoCielo[5] != undefined && props.pred.estadoCielo[5].value != '') && <img class="" src={"/img/weather-icons/" + props.pred.estadoCielo[5].value + ".png"}></img>}
                        </div>
                        <div class="col p-0">
                            {(props.pred.estadoCielo[6] != undefined && props.pred.estadoCielo[6].value != '') && <img class="" src={"/img/weather-icons/" + props.pred.estadoCielo[6].value + ".png"}></img>}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col p-0"><p class="text-primary">{props.pred.probPrecipitacion[1] != undefined ? props.pred.probPrecipitacion[1].value : props.pred.probPrecipitacion[0].value} %</p></div>
                        <div class="col p-0"><p class="text-primary">{props.pred.probPrecipitacion[1] != undefined ? props.pred.probPrecipitacion[1].value : props.pred.probPrecipitacion[0].value} %</p></div>
                        <div class="col p-0"><p class="text-primary">{props.pred.probPrecipitacion[2] != undefined ? props.pred.probPrecipitacion[2].value : props.pred.probPrecipitacion[0].value} %</p></div>
                        <div class="col p-0"><p class="text-primary">{props.pred.probPrecipitacion[2] != undefined ? props.pred.probPrecipitacion[2].value : props.pred.probPrecipitacion[0].value} %</p></div>
                    </div>
                </>
            }

            {(props.pred == undefined) &&
                <>
                    <p>Todavía no hay predicción</p>
                    <p>(disponible a partir de mañana)</p>
                </>
            }
        </>
    )
}

export default DailyWeather
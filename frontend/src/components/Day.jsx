import React from "react";

import DailyAgenda from "./DailyAgenda"
import DailyWeather from "./DailyWeather"

const Day = (props) => {

    // Get DateTime object

    var date = new Date()
    date.setDate(date.getDate() + parseInt(props.position));

    // Get day, date and month

    var day = date.getDay()
    switch(day) {
        case 0:
            day = 'Domingo'
            break;
        case 1:
            day = 'Lunes'
            break;
        case 2:
            day = 'Martes'
            break;
        case 3:
            day = 'Miércoles'
            break;
        case 4:
            day = 'Jueves'
            break;
        case 5:
            day = 'Viernes'
            break;
        case 6:
            day = 'Sábado'
            break;
    }
    var dd = date.getDate()
    var mm = date.getMonth() + 1

    return(
        <div class="col-lg-3 col-md-6 col-sm-6 p-1">
            <a class="btn w-100 rounded border border-dark text-center mb-5">
                <h6>{day}</h6>
                <p>{dd}/{mm}</p>
                {props.type == "agenda" && <DailyAgenda/>}
                {props.type == "weather" && <DailyWeather pred={props.pred}/>}
            </a>
        </div>
    )
}

export default Day
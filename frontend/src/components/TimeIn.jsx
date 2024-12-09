import React, { useState } from "react"

const TimeIn = (props) => {

    // Formatted Date object

    var datetime
    const [formattedDate, setFormattedDate] = useState()
    const [formattedTime, setFormattedTime] = useState()
    // const [datetime, setDatetime] = useState(new Date())

    setInterval(() => {
        datetime = new Date()

        let formattedDateTemp = new Intl.DateTimeFormat(props.locale, {
            dateStyle: 'long',
            timeZone: props.timezone,
        }).format(datetime)

        setFormattedDate(formattedDateTemp)
    
        let formattedTimeTemp = new Intl.DateTimeFormat('es-ES', {
            timeStyle: 'medium',
            timeZone: props.timezone,
        }).format(datetime)

        setFormattedTime(formattedTimeTemp)
    }, 1000)

    return(
        <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-5 col-6 text-start">
                <h5>{props.city}</h5>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-3 col-6 text-center">
                <p>{formattedTime}</p>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-12 text-end">
                <p class="fst-italic">{formattedDate}</p>
            </div>
        </div>
    )
}

export default TimeIn
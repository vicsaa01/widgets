import React from "react"

const TimeIn = (props) => {

    // Formatted Date object

    const datetime = new Date()

    const formattedDate = new Intl.DateTimeFormat(props.locale, {
        dateStyle: 'long',
        timeZone: props.timezone,
    }).format(datetime)

    const formattedTime = new Intl.DateTimeFormat('es-ES', {
        timeStyle: 'medium',
        timeZone: props.timezone,
    }).format(datetime)

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
import React from "react";

const Day = (props) => {

    // Get DateTime object

    var date = new Date()
    date.setDate(date.getDate() + parseInt(props.position));
    console.log(date)

    // Get day, date and month

    var day = date.getDay()
    switch(day) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
    }
    var dd = date.getDate()
    var mm = date.getMonth() + 1

    return(
        <div class="col-lg-3 col-md-6 col-sm-6 p-1">
            <a class="btn w-100 rounded border border-dark text-center mb-5">
                <h6>{day}</h6>
                <p>{dd}/{mm}</p>
            </a>
        </div>
    )
}

export default Day
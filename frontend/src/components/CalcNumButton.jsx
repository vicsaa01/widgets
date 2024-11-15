import React from "react"

const CalcNumButton = (props) => {

    return(
        <div class="col p-0 pe-2">
            <a class="btn w-100 border border-dark">{props.number}</a>
        </div>
    )
}

export default CalcNumButton
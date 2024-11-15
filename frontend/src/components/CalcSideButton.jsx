import React from "react"

const CalcSideButton = (props) => {

    return(
        <div class="col p-0 ps-2">
            <a class="btn w-100 border border-dark">{props.operation}</a>
        </div>
    )
}

export default CalcSideButton
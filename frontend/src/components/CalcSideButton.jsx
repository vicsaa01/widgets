import React from "react"

const CalcSideButton = (props) => {

    const op = props.operation
    var cssClass = "op-button"

    if (op === '=') cssClass = "eq-button"
    else if (op === 'DEL' || op === 'AC') cssClass = "c-button"

    return(
        <div class="col p-0 ps-2">
            <a class={"btn w-100 border border-dark " + cssClass} onClick={(e) => props.setter(e.target.innerHTML)}>{props.operation}</a>
        </div>
    )
}

export default CalcSideButton
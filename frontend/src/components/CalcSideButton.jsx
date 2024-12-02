import React from "react"

const CalcSideButton = (props) => {

    const op = props.operation
    var cssClass = "op-button"

    if (op === '=') cssClass = "eq-button"
    else if (op === 'DEL' || op === 'AC') cssClass = "c-button"

    return(
        <div class="col p-0 ps-lg-2 ps-md-2 ps-sm-2 ps-0">
            <a class={"btn w-100 border border-dark ps-0 pe-0 " + cssClass} onClick={(e) => props.setter(e.target.innerHTML)}>{props.operation}</a>
        </div>
    )
}

export default CalcSideButton
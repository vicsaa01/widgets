import React from "react"

const CalcSideButton = (props) => {

    const op = props.operation
    var css_class = "op-button"

    if (op === '=') css_class = "eq-button"
    else if (op === 'DEL' || op === 'AC') css_class = "c-button"

    return(
        <div class="col p-0 ps-2">
            <a class={"btn w-100 border border-dark " + css_class}>{props.operation}</a>
        </div>
    )
}

export default CalcSideButton
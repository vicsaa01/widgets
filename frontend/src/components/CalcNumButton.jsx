import React from "react"

const CalcNumButton = (props) => {

    function handleClick() {
        // addToTextarea(props.number)
    }

    return(
        <div class="col p-0 pe-lg-2 pe-md-2 pe-sm-2 pe-0">
            <a class="btn w-100 border border-dark num-button" onClick={(e) => props.setter(e.target.innerHTML)}>{props.number}</a>
        </div>
    )
}

export default CalcNumButton
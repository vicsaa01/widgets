import React from "react"

const CalcNumButton = (props) => {

    function handleClick() {
        // addToTextarea(props.number)
    }

    return(
        <div class="col p-0 pe-2">
            <a class="btn w-100 border border-dark num-button" onClick={handleClick()}>{props.number}</a>
        </div>
    )
}

export default CalcNumButton
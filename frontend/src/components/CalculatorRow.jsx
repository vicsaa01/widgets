import React from "react"

import CalcNumButton from "./CalcNumButton"
import CalcSideButton from "./CalcSideButton"

const CalculatorRow = (props) => {

    return(
        <div class="row w-100 m-0 mb-2">
            {props.contents.map((content, i) => (i < 3 ? <CalcNumButton number={content} setter={props.setter}/> : <CalcSideButton operation={content} setter={props.setter}/>))}
        </div>
    )
}

export default CalculatorRow
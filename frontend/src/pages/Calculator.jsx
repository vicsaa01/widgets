import React, { useState } from 'react'

import CalculatorRow from '../components/CalculatorRow'

const Calculator = () => {

    // State management

    var [text, setText] = useState('')
    var [result, setResult] = useState([])

    // Prevent pasting

    const handlePaste = (e) => {
        e.preventDefault()
    }

    // Handle typing

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setText(value)
    }

    const handleOperation = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            // parse text and operate
            var terms = text.split(/[+\-*/]/)
            setResult(terms[0])
            setText('')
        }
    }

    return(
        <main class="d-flex">
            <div class="col-lg-1 col-md-0 col-sm-0 col-xs-0"></div>

            <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 large-page">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Calculator</h3>
                </div>

                <div class="row w-100 mt-5 mb-5 justify-content-center">
                    <textarea class="w-50 form-control border border-dark" id="textarea" name="textarea" value={text}
                        onChange={handleInputChange} onKeyDown={handleOperation} onPaste={handlePaste}>
                    </textarea>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <div class="col-3"></div>

                    <div class="col-6 p-0">
                        <CalculatorRow contents={["7", "8", "9", "DEL", "AC"]}/>
                        <CalculatorRow contents={["4", "5", "6", "*", "/"]}/>
                        <CalculatorRow contents={["1", "2", "3", "+", "-"]}/>
                        <CalculatorRow contents={["0", ".", "000", "Ans", "="]}/>

                        {/* <br/>
                        <CalculatorRow contents={["(", ")", "%", "^", "sqrt"]}/> */}

                        <br/><br/><br/>
                        <p>Result:</p>
                        <p>{result}</p>
                    </div>

                    <div class="col-3"></div>
                </div>
            </div>

            <div class="col-lg-1 col-md-0 col-sm-0 col-xs-0"></div>
        </main>
    )
}

export default Calculator
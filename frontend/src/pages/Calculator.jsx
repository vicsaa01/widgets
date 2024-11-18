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

            console.log('----- NEW OPERATION -----')

            // Get terms (+-)
            var terms = text.split(/[+\-]/)

            // Get operations (+-)
            var ops = []
            for (let i=0; i<text.length; i++) {
                let character = text[i]
                if (character === '+' || character === '-') {
                    ops.push(character)
                }
            }

            // Error checking (+-)
            // check (>0?) and compare (>|<) terms.length, ops.length
            // check not ending with op

            console.log('Terms: ' + terms)
            console.log('Operations: ' + ops)

            // Calculate (+-)
            var res = 0
            for (let i=0; i<terms.length; i++) {

                // Get terms (*/)
                let subterms = terms[i].split(/[*\/]/)

                // Get operations (*/)
                let subops = []
                for (let j=0; j<terms[i].length; j++) {
                    let character = terms[i][j]
                    if (character === '*' || character === '/') {
                        subops.push(character)
                    }
                }

                // Error checking (*/)

                console.log('Subterms (term ' + i + '): ' + subterms)
                console.log('Suboperations (term ' + i + '): ' + subops)

                // Calculate (*/) ERROR
                let subres = 1
                for (let j=0; j<subterms.length; j++) {
                    if (subops[j-1] === '*') {
                        subres *= parseFloat(subterms[j])
                    } else if (subops[j-1] === '/') {
                        subres /= parseFloat(subterms[j])
                    } else {
                        subres = parseFloat(subterms[j])
                    }
                }

                console.log('Subresult (term ' + i + '): ' + subres)

                // Add or substract
                if (ops[i-1] === '+') {
                    res += parseFloat(subres)
                } else if (ops[i-1] === '-') {
                    res -= parseFloat(subres)
                } else {
                    res = parseFloat(subres)
                }
            }

            console.log('Result: ' + res)

            setResult(res)
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
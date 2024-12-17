import React, { useState } from 'react'

import CalculatorRow from '../components/CalculatorRow'

const Calculator = () => {

    // State management

    var [text, setText] = useState('')
    var [result, setResult] = useState('')
    var [warning, setWarning] = useState('')

    // Prevent pasting

    const handlePaste = (e) => {
        e.preventDefault()
    }

    // Handle typing

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setText(value)
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            if (text.includes('(') || text.includes(')') || text.includes('[') || text.includes(']') || text.includes('%') || text.includes('!') || text.includes('^')) {
                setWarning('Sorry, the current version does not allow the following symbols: (), [], %, !, ^')
            } else {
                calculate()
                setWarning('')
            }
        } else if ((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 65 && e.keyCode <= 90)) {
            e.preventDefault()
            setWarning('Sorry, this calculator does not allow letters')
        }
    }

    // Handle clicking

    const handleClick = (x) => {
        switch(x) {
            case 'DEL':
                setText((prevText) => (prevText.substring(0, prevText.length-1)))
                break;
            case 'AC':
                setText('')
                setWarning('')
                break;
            case '=':
                calculate()
                setWarning('')
                break;
            default:
                setText((prevText) => (prevText + x))
        }
    }

    // Calculator algorithm

    function calculate() {
            console.log('----- NEW OPERATION -----')

            // Get terms (+-)
            var terms = []
            try {
                terms = text.split(/[+\-]/)
            } catch(e) {
                return
            }

            // Get operations (+-)
            var ops = []
            for (let i=0; i<text.length; i++) {
                let character = text[i]
                if (character === '+' || character === '-') {
                    ops.push(character)
                }
            }

            // Error checking (+-)
            if (ops.length == 0 && text.length == 0) {
                setResult(0)
                return
            }
            let last_character = text[text.length-1]
            if (last_character === '+' || last_character === '-' || last_character === '*' || last_character === '/') {
                setResult('SYNTAX ERROR: Operation ended with an operator (+-*/)')
                return
            }
            for (let i=0; i<terms.length; i++) {
                if (terms[i] === '') {
                    setResult('SYNTAX ERROR: More than 1 consecutive operators (+-*/)')
                    return
                }
            }

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

                // Error checking (*/) and Ans setting
                for (let j=0; j<subterms.length; j++) {
                    if (subterms[j] === '') {
                        setResult('SYNTAX ERROR: More than 1 consecutive operators (+-*/)')
                        return
                    } else if (subterms[j] === 'Ans' || subterms[j] === 'ans') {
                        if (result === '') subterms[j] = 0
                        else subterms[j] = result
                    }
                }

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
            setText(res)
    }

    return(
        <main class="d-flex large-page">
            <div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>

            <div class="col-lg-10 col-md-12 col-sm-12 col-12 ps-">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Calculator</h3>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 ps-4">
                        <textarea class="w-100 form-control border border-dark" id="textarea" name="textarea" value={text}
                            onChange={handleInputChange} onKeyDown={handleEnter} onPaste={handlePaste}>
                        </textarea>

                        {result != '' && <p class="w-100 mt-3 mb-5 text-end">Ans = {result}</p>}
                        {result == '' && <><br/><br/><br/></>}

                        <CalculatorRow contents={["7", "8", "9", "DEL", "AC"]} setter={handleClick}/>
                        <CalculatorRow contents={["4", "5", "6", "*", "/"]} setter={handleClick}/>
                        <CalculatorRow contents={["1", "2", "3", "+", "-"]} setter={handleClick}/>
                        <CalculatorRow contents={["0", ".", "000", "Ans", "="]} setter={handleClick}/>

                        {/* <br/>
                        <CalculatorRow contents={["(", ")", "%", "^", "sqrt"]}/> */}
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 ps-4">
                        {(warning != '') && <p class="rounded border border-warning warning p-3">{warning}</p>}
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-0 col-0"></div>
                </div>
            </div>

            <div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>
        </main>
    )
}

export default Calculator
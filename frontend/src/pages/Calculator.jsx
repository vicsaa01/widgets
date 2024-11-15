import React from 'react'

import CalculatorRow from '../components/CalculatorRow'

const Calculator = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1"></div>

            <div class="col-lg-8 col-md-10 large-page">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Calculator</h3>
                </div>

                <div class="row w-100 mt-5 mb-5 justify-content-center">
                    <textarea class="w-50 form-control border border-dark"></textarea>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <div class="col-3"></div>

                    <div class="col-6 p-0">
                        <CalculatorRow contents={["7", "8", "9", "DEL", "AC"]}/>
                        <CalculatorRow contents={["4", "5", "6", "*", "/"]}/>
                        <CalculatorRow contents={["1", "2", "3", "+", "-"]}/>
                        <CalculatorRow contents={["0", ".", "000", "Ans", "="]}/>
                        <br/>
                        <CalculatorRow contents={["(", ")", "%", "^", "sqrt"]}/>
                    </div>

                    <div class="col-3"></div>
                </div>
            </div>

            <div class="col-lg-2 col-md-1"></div>
        </main>
    )
}

export default Calculator
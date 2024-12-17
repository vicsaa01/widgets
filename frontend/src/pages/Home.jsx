import React from 'react'
import Widget from '../components/Widget'

const Home = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1"></div>

            <div class="col-lg-8 col-md-10 ps-4">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Welcome to QiWi!</h3>
                </div>

                <div class="row w-100 mb-5">
                    <h5 class="d-none d-sm-block">A website where you can use the following widgets...</h5>
                    <h5 class="d-block d-sm-none">Available widgets:</h5>
                </div>

                <div class="row w-100 mb-3">
                    <Widget id="calculator" name="Calculator" description="For basic arithmetic"/>
                    <Widget id="notes" name="Notes" description="Write something and share it on the bulletin board"/>
                    <Widget id="time" name="Time" description="See the current time around the world"/>
                    <Widget id="weather-select" name="Weather" description="Check the weather forecast for the next few days"/>
                </div>

                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
                <div class="row w-100 m-5"></div>
            </div>

            <div class="col-lg-2 col-md-1"></div>
        </main>
    )
}

export default Home
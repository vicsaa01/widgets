import React from 'react'
import Widget from '../components/Widget'

const Home = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1"></div>

            <div class="col-lg-8 col-md-10 large-page">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Welcome to Quick Widgets!</h3>
                </div>

                <div class="row w-100 mt-3 mb-5">
                    <h5>A site where you have access to the following tools...</h5>
                </div>

                <div class="row w-100 mb-3">
                    <Widget id="agenda" name="Agenda" description="A calendar to make plans for the week"/>
                    <Widget id="calculator" name="Calculator" description="For basic arithmetic operations"/>
                    <Widget id="notes" name="Notes" description="Write some text and share it on the site's bulletin board"/>
                    <Widget id="time" name="Time" description="Select a timezone and see its current time"/>
                </div>

                <div class="row w-100 mb-3">
                    <Widget id="weather" name="Weather" description="Check the weather forecast for the next few days"/>
                </div>
            </div>

            <div class="col-lg-2 col-md-1"></div>
        </main>
    )
}

export default Home
import React from 'react'
import Widget from '../components/Widget'

const Home = () => {

    return(
        <main class="d-flex large-page">
            <div class="col-lg-2 col-md-1"></div>

            <div class="col-lg-8 col-md-10 ps-4">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Bienvenid@ a QiWi!</h3>
                </div>

                <div class="row w-100 mb-5">
                    <h5 class="d-none d-sm-block">Una web donde tienes acceso a las siguientes herramientas...</h5>
                    <h5 class="d-block d-sm-none">Herramientas que puedes probar:</h5>
                </div>

                <div class="row w-100 mb-3">
                    <Widget id="calculator" name="Calculadora" description="Para hacer operaciones aritméticas sencillas"/>
                    <Widget id="time" name="Hora" description="Selecciona una zona horaria para ver su hora actual"/>
                    <Widget id="notes" name="Notas" description="Escribe algo y compártelo en el tablón de anuncios"/>
                    <Widget id="weather-select" name="Tiempo" description="Mira la predicción del tiempo para los próximos días"/>
                </div>
            </div>

            <div class="col-lg-2 col-md-1"></div>
        </main>
    )
}

export default Home
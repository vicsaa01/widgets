import React from 'react'
import TimeIn from '../components/TimeIn'

const Time = () => {

    return(
        <main class="d-flex">
            <div class="col-lg-2 col-md-1 col-sm-1 col-0"></div>

            <div class="col-lg-8 col-md-10 col-sm-10 col-12 ps-4">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Current Time</h3>
                </div>

                <div class="row w-100 mt-5 mb-5">
                    <div class="rounded border border-dark">
                        <div class="row">
                            <p class="text-center text-white bg-primary">Pacific</p>
                        </div>
                        
                        <TimeIn city="Honolulu" timezone='Pacific/Honolulu' locale='en-us'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">North America</p>
                        </div>

                        <TimeIn city="Los Angeles" timezone='America/Los_Angeles' locale='en-us'/>
                        <TimeIn city="Denver" timezone='America/Denver' locale='en-us'/>
                        <TimeIn city="Chicago" timezone='America/Chicago' locale='en-us'/>
                        <TimeIn city="New York City" timezone='America/New_York' locale='en-us'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">Latin America</p>
                        </div>

                        <TimeIn city="Ciudad de México" timezone='America/Mexico_City' locale='es-mx'/>
                        <TimeIn city="Bogotá" timezone='America/Bogota' locale='es-co'/>
                        <TimeIn city="Buenos Aires" timezone='America/Buenos_Aires' locale='es-ar'/>
                        <TimeIn city="São Paulo" timezone='America/Sao_Paulo' locale='pt-br'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">Europe</p>
                        </div>

                        <TimeIn city="London" timezone='Europe/London' locale='en-gb'/>
                        <TimeIn city="Roma" timezone='Europe/Rome' locale='it'/>
                        <TimeIn city="Київ (Kyiv)" timezone='Europe/Kiev' locale='uk'/>
                        <TimeIn city="Москва́ (Moscow)" timezone='Europe/Moscow' locale='ru-ru'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">Middle East</p>
                        </div>

                        <TimeIn city="ירושלים (Jerusalem)" timezone='Asia/Jerusalem' locale='he'/>
                        <TimeIn city="بغداد (Baghdad)" timezone='Asia/Baghdad' locale='ar-iq'/>
                        <TimeIn city="تهران (Tehran)" timezone='Asia/Tehran' locale='fa-ir'/>
                        <TimeIn city="دبيّ (Dubai)" timezone='Asia/Dubai' locale='ar-ae'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">South Asia</p>
                        </div>

                        <TimeIn city="কলকাতা (Calcutta)" timezone='Asia/Kolkata' locale='hi'/>
                        <TimeIn city="กรุงเทพมหานคร (Bangkok)" timezone='Asia/Bangkok' locale='th'/>
                        <TimeIn city="Jakarta" timezone='Asia/Jakarta' locale='id'/>
                        <TimeIn city="Hồ Chí Minh" timezone='Asia/Ho_Chi_Minh' locale='vi'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">East Asia</p>
                        </div>

                        <TimeIn city="上海 (Shanghai)" timezone='Asia/Shanghai' locale='zh-cn'/>
                        <TimeIn city="台北 (Taipei)" timezone='Asia/Taipei' locale='zh-tw'/>
                        <TimeIn city="서울 (Seoul)" timezone='Asia/Seoul' locale='ko'/>
                        <TimeIn city="東京 (Tokyo)" timezone='Asia/Tokyo' locale='ja'/>

                        <div class="row mt-5">
                            <p class="text-center text-white bg-primary">Australia</p>
                        </div>

                        <TimeIn city="Sydney" timezone='Australia/Sydney' locale='en-AU'/>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-1 col-sm-1 col-0"></div>
        </main>
    )
}

export default Time
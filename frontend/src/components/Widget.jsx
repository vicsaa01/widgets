import React from "react"

const Widget = (props) => {

    return(
        <div class="col-lg-3 col-md-6 col-sm-6">
            <a class="btn w-100 rounded border border-dark home-button mb-3" href={"/" + props.id}>
                <img class="p-3" src={"/img/" + props.id + ".png"} width="100" height="100"/>
                <h5 class="mt-2">{props.name}</h5>
                <p class="w-100">{props.description}</p>
            </a>
        </div>
    )
}

export default Widget
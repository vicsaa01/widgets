import React from "react"

const Note = (props) => {

    // Parse timestamp

    const time = props.created_at.substr(11,5)
    const dd = props.created_at.substr(8,2)
    const mm = props.created_at.substr(5,2)
    const yyyy = props.created_at.substr(0,4)

    return(
        <div class="border border-dark rounded mt-3 p-3">
            <p>{props.text}</p>
            <p class="text-end">De: {props.author} | {dd}/{mm}/{yyyy} {time}</p>
        </div>
    )
}

export default Note
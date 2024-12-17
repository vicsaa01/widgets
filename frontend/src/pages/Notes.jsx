import React from 'react'
import { useState, useEffect } from 'react'

import Note from '../components/Note'
import apiRoute from '../connex-params'

const Notes = () => {

    // State management

    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [notes, setNotes] = useState([])

    // Fetch notes

    useEffect(() => {
        fetch(apiRoute + '/notes')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setNotes(data)
            })
    }, [apiRoute])

    // Handle typing

    const handleInputChange = (e) => {
        const {name, value} = e.target
        if (name === 'author'){
            setAuthor(value)
        } else {
            setText(value)
        }
    }

    // Post new note

    function addNote() {
        if (text !== '') {
            fetch(apiRoute + '/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: text, author: author, created_at: Date.now().toString()})
            })
            .then((res) => { return res.json() })
            .then((data) => {
                console.log('Posted new note: ' + data)
                alert('Note has been published')
                setText('')
                setAuthor('')
                window.location.reload()
            })
            .catch((e) => {
                alert(e.message)
            });
        } else {
            alert('Note must contain some text')
        }
    }

    return(
        <main class="d-flex large-page">
            <div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>

            <div class="col-lg-10 col-md-12 col-sm-12 col-12 ps-3">
                <div class="row w-100 mt-5 mb-5">
                    <h3 class="text-dark text-center">Bulletin board</h3>
                </div>

                <div class="row w-100 mt-3 mb-5">
                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>

                    <div class="col-lg-6 col-md-6 col-sm-8 col-10 p-0">
                        <div class="overflow-auto notes-list">
                            {notes.map((note) => (<Note text={note.text} author={note.author} created_at={note.created_at} />))}
                            {(notes.length == 0) && (
                                <p class="text-dark text-center">No notes published yet.</p>
                            )}
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>
                </div>

                <div class="row w-100 mt-3">
                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>

                    <div class="col-lg-6 col-md-6 col-sm-8 col-10 p-0">
                        <h5 class="text-center mt-5 mb-4">New note</h5>
                        <textarea class="w-100 form-control border border-dark mb-4" name="text" placeholder="Note" value={text} onChange={handleInputChange}></textarea>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>
                </div>

                <div class="row w-100 mb-5">
                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>

                    <div class="col-lg-3 col-md-3 col-sm-8 col-10 p-0 text-start">
                        <input class="form-control border border-dark m-0 mb-4" type="text" name="author" placeholder="Name" value={author} onChange={handleInputChange}/>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-10 col-11 p-0 text-end">
                        <a class="btn border border-dark m-0" onClick={addNote}>Add note</a>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-2 col-1"></div>
                </div>
            </div>

            <div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>
        </main>
    )
}

export default Notes
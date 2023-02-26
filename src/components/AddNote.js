import React from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { useState } from 'react';

function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const handleOnClick = (e) => {
        e.preventDefault();// preventing from reloading the page
        addNote(note.title, note.description, note.tag);
    }

    // ... is spread operator
    // means keep tha values which are there in note object and add/overwrite properties listed next.
    const handleOnChnage = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })//changing event should change to its value
    }

    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note </h1>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" onChange={handleOnChnage} id="title" name="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" onChange={handleOnChnage} id="description" name="description" />
                    </div>
                    <div className="form-check my-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
                </form>
            </div>


        </div>
    )
}

export default AddNote
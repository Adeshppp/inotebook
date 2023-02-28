import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";


const NoteItem = (props) => {
    const context = useContext(noteContext);

    const { deleteNote } = context;

    const { note , updateNote} = props;// accessing as a props. updateNote definition is in Notes.js

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-sharp fa-solid fa-pen-to-square mx-2" onClick={()=>updateNote(note)}></i>
                        {/* I am passing "note" parameter to call above on click methods so I used an arrow function. */}
                    </div>
                </div>
                <p className="card-text mx-3 mb-3">{note.description}</p>
            </div>
        </div>
    );
};

export default NoteItem;

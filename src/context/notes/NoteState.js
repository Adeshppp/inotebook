import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:8000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    // eslint-disable-next-line


    // GET all notes
    const getAllNotes = async (title, description, tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            //localhost:8000/api/notes/fetchallnotes
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token"),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        // const json=  response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        const sortedNotes = json.sort((a, b) => new Date(b.date) - new Date(a.date));// code to sort notes by dates in descending order
        setNotes(sortedNotes);

        // setNotes(json);
    };

    

    // ADD a note
    const addNote = async (title, description, tag) => {
        // to do api call
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token"),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        const note = await response.json(); // parses JSON response into native JavaScript objects
        // setNotes(notes.concat(note)); //.concat returns new array
        setNotes([note, ...notes]);
        };


    // DELETE a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            //localhost:8000/api/notes/updatenote/63f8adb7c564b32089e7cd36
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token"),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const json = response.json(); // parses JSON response into native JavaScript objects

        let newNotes = notes.filter((note) => {
            return note._id !== id;
        }); // creates a new array and returns all elements except element who has id === _id.
        setNotes(newNotes); //.concat returns new array
    };


    // EDIT a note
    const editNote = async (id, title, description, tag) => {
        // eslint-disable-next-line

        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            //localhost:8000/api/notes/updatenote/63f8adb7c564b32089e7cd36
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    localStorage.getItem("token"),
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        // eslint-disable-next-line
        const json = await response.json(); // parses JSON response into native JavaScript objects
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };

    
    return (
        <NoteContext.Provider
            value={{ notes, addNote, editNote, deleteNote, getAllNotes }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;

// rafce

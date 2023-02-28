import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:8000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
// eslint-disable-next-line


    // Get all notes
    const getAllNotes = async (title, description, tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            //localhost:8000/api/notes/fetchallnotes
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODk0M2JkYzYzMTVkZWY1OWRiMDI3In0sImlhdCI6MTY3NzIzNjc0NX0.LRzFTSSbHGcGFRurRFy8ZNFl9B1u2WX_6UlvPRioE1M",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        //   const json=  response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        // to do api call
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODk0M2JkYzYzMTVkZWY1OWRiMDI3In0sImlhdCI6MTY3NzIzNjc0NX0.LRzFTSSbHGcGFRurRFy8ZNFl9B1u2WX_6UlvPRioE1M",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        //   const json=  response.json(); // parses JSON response into native JavaScript objects

        console.log("Adding a new note");
        const note = {
            _id: "63fa70d76e0c2a7d3bf25920",
            user: "63f8943bdc6315def59db027",
            title: title,
            description: description,
            tag: tag,
            date: "2023-02-25T20:34:31.871Z",
            __v: 0,
        };
        setNotes(notes.concat(note)); //.concat returns new array
    };

    // delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            //localhost:8000/api/notes/updatenote/63f8adb7c564b32089e7cd36
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODk0M2JkYzYzMTVkZWY1OWRiMDI3In0sImlhdCI6MTY3NzIzNjc0NX0.LRzFTSSbHGcGFRurRFy8ZNFl9B1u2WX_6UlvPRioE1M",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        console.log("deleting" + id);
        let newNotes = notes.filter((note) => {
            return note._id !== id;
        }); // creates a new array and returns all elements except element who has id === _id.
        setNotes(newNotes); //.concat returns new array
    };

    // edit a note
    const editNote = async (id, title, description, tag) => {
        // eslint-disable-next-line
        
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            //localhost:8000/api/notes/updatenote/63f8adb7c564b32089e7cd36
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODk0M2JkYzYzMTVkZWY1OWRiMDI3In0sImlhdCI6MTY3NzIzNjc0NX0.LRzFTSSbHGcGFRurRFy8ZNFl9B1u2WX_6UlvPRioE1M",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        // eslint-disable-next-line
        const json = response.json(); // parses JSON response into native JavaScript objects

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
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

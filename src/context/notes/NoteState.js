import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    let notesInitial =[
        {
          "_id": "63f8adb3c564b32089e7cd34",
          "user": "63f8943bdc6315def59db027",
          "title": "My title updated",
          "description": "My description  updated",
          "tag": "personal",
          "date": "2023-02-24T12:29:39.080Z",
          "__v": 0
        },
        {
          "_id": "63f8adb7c564b32089e7cd36",
          "user": "63f8943bdc6315def59db027",
          "title": "My title abcd",
          "description": "My description  abcd",
          "tag": "personal",
          "date": "2023-02-24T12:29:43.089Z",
          "__v": 0
        },
        {
          "_id": "63f8adb7c564b32089e7cd38",
          "user": "63f8943bdc6315def59db027",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-02-24T12:29:43.737Z",
          "__v": 0
        },
        {
          "_id": "63f8adb8c564b32089e7cd3a",
          "user": "63f8943bdc6315def59db027",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-02-24T12:29:44.263Z",
          "__v": 0
        },
        {
          "_id": "63f8b4f08ba69c7d338dc42b",
          "user": "63f8943bdc6315def59db027",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-02-24T13:00:32.651Z",
          "__v": 0
        },
        {
          "_id": "63f8b4f18ba69c7d338dc42d",
          "user": "63f8943bdc6315def59db027",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-02-24T13:00:33.657Z",
          "__v": 0
        },
        {
          "_id": "63fa70d76e0c2a7d3bf25920",
          "user": "63f8943bdc6315def59db027",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-02-25T20:34:31.871Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(notesInitial)
    // Add a note
    const addNote = (title,description,tag)=>{
        // to do api call
        console.log("Adding a new note")
        const note={
            "_id": "63fa70d76e0c2a7d3bf25920",
            "user": "63f8943bdc6315def59db027",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-02-25T20:34:31.871Z",
            "__v": 0
          };
        setNotes(notes.concat(note))//.concat returns new array
    }

    // delete a note
    const deleteNote=(id)=>{
        
    }
    // edit a note
    const editNote=(id)=>{

    }
    return(
        <NoteContext.Provider value={{notes,addNote,editNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


// rafce
// import React from 'react'
// import { useContext } from "react";
// import noteContext from "../context/notes/noteContext";
// import { useState } from 'react';

// function AddNote() {
//     const context = useContext(noteContext);
//     const { addNote } = context;
//     const [note, setNote] = useState({ title: "", description: "", tag: "default" })

//     const handleOnClick = (e) => {
//         e.preventDefault();// preventing from reloading the page
//         addNote(note.title, note.description, note.tag);
//     }

//     // ... is spread operator
//     // means keep tha values which are there in note object and add/overwrite properties listed next.
//     const handleOnChnage = (e) => {
//         setNote({ ...note, [e.target.name]: e.target.value })//changing event should change to its value
//     }

//     return (
//         <div>   
//             <div className="container my-3">
//                 <h1>Add a Note </h1>
//                 <form>
//                     <div className="form-group my-3">
//                         <label htmlFor="title">Title</label>
//                         <input type="text" className="form-control" onChange={handleOnChnage} id="title" name="title" aria-describedby="emailHelp"  required/>
//                     </div>
//                     <div className="form-group my-3">
//                         <label htmlFor="description">Description</label>
//                         <input type="text" className="form-control" onChange={handleOnChnage} id="description" name="description"  required/>
//                     </div>
//                     <div className="form-group my-3">
//                         <label htmlFor="description">Tag</label>
//                         <input type="text" className="form-control" onChange={handleOnChnage} id="tag" name="tag" />
//                     </div>
//                     <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Add Note</button>

//                 </form>
//             </div>


//         </div>
//     )
// }

// export default AddNote


import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleOnChnage = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (note.title.length>=3 && note.description.length>=3) {
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
    } else {
      // show error message using alert or any other method
      alert("Title and description should be at least 3 characters long");
    }
  };
//   const handleClick = () => {
//     if(note.title.length<3 || note.description.length<3) {
//         alert("Title and description should be at least 3 characters long")
//       }        
//       else  {
//         addNote(note.title, note.description, note.tag);
//         setNote({ title: "", description: "", tag: "" });
//     }
// };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOnChnage}
            value={note.title}
            id="title"
            name="title"
            aria-describedby="emailHelp"
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOnChnage}
            value={note.description}
            id="description"
            name="description"
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Tag</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOnChnage}
            value={note.tag}
            id="tag"
            name="tag"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;

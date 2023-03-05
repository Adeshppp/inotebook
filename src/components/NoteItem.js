import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);

  // Destructure deleteNote function from the noteContext
  const { deleteNote } = context;

  // Destructure note and updateNote from props
  const { note, updateNote } = props;

  // Function to handle note deletion
  const handleDelete = () => {
    // Display a confirmation dialog before deleting the note
    if (window.confirm("Are you sure you want to delete this note?")) {
      // Call the deleteNote function from the noteContext with the note's _id
      deleteNote(note._id);

      // Display an alert to confirm note deletion
      props.showAlert("Note has been deleted", "success");
    }
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{note.title}</h5>
          <div>
            {/* Call the handleDelete function on click */}
            <i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>

            {/* Call the updateNote function with the note object as an argument */}
            <i
              className="fa-sharp fa-solid fa-pen-to-square mx-2"
              onClick={() => updateNote(note)}
            ></i>
          </div>
        </div>

        {/* Display the note description */}
        <p className="card-text mx-3 mb-3">{note.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;

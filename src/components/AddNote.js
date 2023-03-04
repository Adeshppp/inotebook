import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = ({showAlert}) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleOnChnage = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (note.title.length >= 3 && note.description.length >= 3) {
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
      showAlert("Note successfully Added!","success");
    } else showAlert("Title and description should be at least 3 characters long!","warning");
  };

  return (
    <div className="container my-5">
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
            required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            onChange={handleOnChnage}
            value={note.description}
            id="description"
            name="description"
            rows={note.description ? Math.ceil(note.description.length / 150) : 1}
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

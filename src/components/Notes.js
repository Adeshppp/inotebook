import { useContext, useEffect, useRef, useState } from "react";
//using useRef hook to give reference to our modal variable
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from './AddNote'


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  useEffect(() => {// want to use this as a componentdidmount so i added below commented line
    getAllNotes()
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

  const updateNote = (currentNote) => {
    ref.current.click();//clicking on ref button
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  const UpdateOnClick = (e) => {
    if (note.etitle.length < 3 || note.edescription.length < 3) alert("Title and description should be at least 3 characters long");
    else {
      editNote(note.id, note.etitle, note.edescription, note.etag)
      refClose.current.click();
    }
  }

  // ... is spread operator
  // means keep tha values which are there in note object and add/overwrite properties listed next.
  const handleOnChnage = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })//changing event should set its value
  }

  return (
    <>
      <AddNote />
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal" />
      {/* Launch demo modal
      </button> */}
      {/* giving reference to this button */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* ===================================================================================================================== */}

            <div className="modal-body">

              {/* after clicking on Edit note button below form will appeare. */}
              <div>
                <div className="container my-3">
                  <form>
                    <div className="form-group my-3">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control" onChange={handleOnChnage} value={note.etitle} id="etitle" name="etitle" aria-describedby="emailHelp" required />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        onChange={handleOnChnage}
                        value={note.edescription}
                        rows={note.edescription ? Math.ceil(note.edescription.length / 150) : 1}
                        style={{ resize: "none" }}
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="description">Tag</label>
                      <input type="text" className="form-control" onChange={handleOnChnage} value={note.etag} id="etag" name="etag" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ===================================================================================================================== */}

            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={UpdateOnClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container my-3 mx-1">
          {notes.length === 0 && "No notes to display"}</div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;

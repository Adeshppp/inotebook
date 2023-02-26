import React from "react";

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                        <i className="fa-solid fa-trash mx-2"></i>
                        <i className="fa-sharp fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                </div>
                <p className="card-text mx-3 mb-3">{note.description}</p>
            </div>
        </div>
    );
};

export default NoteItem;

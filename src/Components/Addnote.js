import React from "react";
import { useState } from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Addnote = (props) => {
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    
  };
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleclick = (event) => {
    event.preventDefault()
    addnote(note.title, note.description, note.tag);
  };
  return (
    <div className=" mb-3">
      <h1 className=" my-3">Add a Note</h1>
      <form>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

       
        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Add a Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;

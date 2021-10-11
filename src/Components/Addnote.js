import React from "react";
import { useState } from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const Addnote = (props) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const context = useContext(noteContext);
  const { addnote } = context;
 
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    
  };

  const handleclick = (event) => {
    addnote(note.title, note.description, note.tag);
   
    event.preventDefault()
    setNote({title: "", description: "", tag: ""})
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
         value={note.title} />
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
            value={note.description} />
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
          value={note.tag} />
        </div>

       
        <button   disabled={note.title.length<5|| note.description.length<5?true:false} type="submit" className="btn btn-primary" onClick={handleclick}>
          Add a Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;

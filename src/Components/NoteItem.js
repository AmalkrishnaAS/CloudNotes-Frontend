import React from 'react'
import { useContext } from 'react'
import noteContext from "../Context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const  {deletenote}  = context;
  const {note}=props
  const handleclick=()=>{
    deletenote(note._id)
  }
   
    return (
         
        <div className="col-md-3 my-3">
           <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
    <p className="card-text">{note.description}.</p>
    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
    <i className="fas fa-trash-alt mx-2" onClick={handleclick}></i>
    <i className="fas fa-edit mx-2" onClick={()=>{props.updatenote(note)}}></i>
  </div>
  
</div>
            
        </div>
    )
}

export default NoteItem

import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import Addnote from './Addnote'
import NoteItem from './NoteItem'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Notes(props) {
  let history=useHistory()
  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    
  };
  const handleclick = (event) => {
    console.log("updating....",note)
    editnote(note.etitle,note.edescription,note.id,note.etag);
    event.preventDefault()
    refclose.current.click()
    // addnote(note.etitle, note.edescription, note.etag);
  };
    const context=  useContext(noteContext)
 const {notes,setnotes,addnote,getnotes,editnote}=context
console.log(notes);
useEffect(() => {
  if(localStorage.getItem('token'))
  {
  getnotes()}
  else{
    history.push('/login')

  }
}, [])
const updatenote=(currentnote)=>{
  ref.current.click()
  setNote({etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag,id:currentnote._id})
}
const ref = useRef(null)
const refclose = useRef(null)
    return (
        <>
        <Addnote />
       
<button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"display":"none"}}>
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            aria-describedby="emailHelp"
            name="etitle"
            onChange={onChange}
           value={note.etitle} />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            onChange={onChange}
          value={note.edescription} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            onChange={onChange}
          value={note.etag}/>
        </div>

       
       
      </form>
      </div>
      <div className="modal-footer">
        <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleclick} disabled={note.etitle.length<5|| note.edescription.length<5?true:false} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
            <h1 className='my-3'>Your notes</h1>
            <div className="container">
            {notes.length===0&&'No notes to display'}
            </div>
            <div className="row">
            {notes.map(
              (note)=>
              {
                return(
                    
                  <NoteItem note={note} key={note._id} updatenote={updatenote}></NoteItem>
                )
              }
            )}
            </div>
        </>
    )
}

export default Notes

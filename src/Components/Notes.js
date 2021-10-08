import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import Addnote from './Addnote'
import NoteItem from './NoteItem'
import { useEffect } from 'react'
import { useRef } from 'react'

function Notes(props) {
    const context=  useContext(noteContext)
const {notes,setnotes,addnote,getnotes}=context
useEffect(() => {
  getnotes()
}, [])
const updatenote=(note)=>{
  ref.current.click()
}
const ref = useRef(null)
    return (
        <>
        <Addnote />
       
<button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{"display":"none"}}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <h1 className='my-3'>Your notes</h1>
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

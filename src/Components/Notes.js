import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import Addnote from './Addnote'
import NoteItem from './NoteItem'

function Notes(props) {
    const context=  useContext(noteContext)
const {notes,setnotes,addnote}=context
    return (
        <>
        <Addnote />
            <h1 className='my-3'>Your notes</h1>
            <div className="row">
            {notes.map(
              (note)=>
              {
                return(
                    
                  <NoteItem note={note} key={note._id}></NoteItem>
                )
              }
            )}
            </div>
        </>
    )
}

export default Notes

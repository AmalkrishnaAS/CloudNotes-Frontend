import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import NoteState from '../Context/notes/NoteState'
import Notes from './Notes'

const Home = () => {
const context=  useContext(noteContext)
const {notes,setnotes}=context
    return (
        <div className='my-3 container'>
            
            <Notes />
        </div>
    )
}

export default Home

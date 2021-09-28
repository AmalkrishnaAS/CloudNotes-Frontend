import React,{useContext} from 'react'
import noteContext from '../Context/notes/noteContext'
import { useEffect } from 'react'

const About = () => {
    const a=useContext(noteContext)
   
    return (
        
        <div>
            <h1>this is about amal and he is in classamal</h1>
        </div>
    )
}

export default About

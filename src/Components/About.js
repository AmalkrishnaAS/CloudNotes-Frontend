import React,{useContext} from 'react'
import noteContext from '../Context/notes/noteContext'
import { useEffect } from 'react'

const About = () => {
    const a=useContext(noteContext)
   
    return (
        
        <div className='container my-5'>
          <h4>
              A Simple User friendly Web App Built with the MERN Stack To allow Users To Store and manage their Notes and reminders
          </h4>
        </div>
    )
}

export default About

import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const axios=require('axios')
let host='https://cloudnotes-backend.herokuapp.com'
const NoteState=(props)=>{
    
      const [notes, setnotes] = useState([])
      
      //delete
      const deletenote=async (id)=>{
       
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        
        
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
        
        });
        const json=response.json()


        console.log('deleting '+id);
        const newnote=notes.filter((note)=>{
          return note._id!==id
        })
        setnotes(newnote)
      }
      //add
      const addnote=async(title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        
        
          headers: {
            'Content-Type': 'application/json',
          
            'auth-token':localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
          body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
    
        
        console.log('adding a note....')
          let note=await response.json()
          setnotes(notes.concat(note))
      }
      const getnotes=async()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
        
          headers: {
            'Content-Type': 'application/json',
          
            'auth-token':localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
      
        });
    
        const json=await response.json()
       console.log(json)
       setnotes([json])
      }
      //edit
      const editnote=async (title,description,id,tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        
        
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
          body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
      const json=response.json()
      


        let newnotes=JSON.parse(JSON.stringify(notes))

        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element._id===id) {
            newnotes[index].title=title;
            newnotes[index].description=description;
            newnotes[index].tag=tag;

            break;
          }
          
        }
        setnotes(newnotes)
      }
      
      
   
    return (
        <NoteContext.Provider value={{notes,setnotes,addnote,deletenote,editnote,getnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

    }
export default NoteState
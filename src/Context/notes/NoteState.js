import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const axios=require('axios')
let host='http://localhost:5000'
const NoteState=(props)=>{
    const notesinitial=[
        
      ]
      const [notes, setnotes] = useState(notesinitial)
      
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
          let note={
            "_id": "613cf8f90efxxxd4127f3d4600b",
            "user": "613c5894fbf3c864aeb3a9f1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-11T18:44:09.874Z",
            "__v": 0
          };
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
       setnotes(json)
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
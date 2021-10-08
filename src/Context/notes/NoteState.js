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
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzU4OTRmYmYzYzg2NGFlYjNhOWYxIn0sImlhdCI6MTYzMTM3OTg3M30.9ZSnDTSYMUlQwQvxdVV2p4poujrFuh3zChvLHxdEoHw'
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
          
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzU4OTRmYmYzYzg2NGFlYjNhOWYxIn0sImlhdCI6MTYzMTM3OTg3M30.9ZSnDTSYMUlQwQvxdVV2p4poujrFuh3zChvLHxdEoHw'
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
          
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzU4OTRmYmYzYzg2NGFlYjNhOWYxIn0sImlhdCI6MTYzMTM3OTg3M30.9ZSnDTSYMUlQwQvxdVV2p4poujrFuh3zChvLHxdEoHw'
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
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        
        
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYzU4OTRmYmYzYzg2NGFlYjNhOWYxIn0sImlhdCI6MTYzMTM3OTg3M30.9ZSnDTSYMUlQwQvxdVV2p4poujrFuh3zChvLHxdEoHw'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
          body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
      const json=response.json()
      




        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element._id===id) {
            element.title=title;
            element.description=description;
            element.tag=tag;
            
          }
          
        }
      }
      
      
   
    return (
        <NoteContext.Provider value={{notes,setnotes,addnote,deletenote,editnote,getnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

    }
export default NoteState
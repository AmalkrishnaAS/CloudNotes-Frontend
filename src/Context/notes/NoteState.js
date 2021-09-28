import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const notesinitial=[
        {
          "_id": "613cf8f90efd4127f3d46009",
          "user": "613c5894fbf3c864aeb3a9f1",
          "title": "mytitle",
          "description": "wake up at 5",
          "tag": "personal",
          "date": "2021-09-11T18:44:09.217Z",
          "__v": 0
        },
        {
          "_id": "613cf8f90efd4127f3d4600b",
          "user": "613c5894fbf3c864aeb3a9f1",
          "title": "mytitle",
          "description": "wake up at 5",
          "tag": "personal",
          "date": "2021-09-11T18:44:09.874Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesinitial)

      //Add a note

      const addnote=(title,description,tag)=>{
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
   
    return (
        <NoteContext.Provider value={{notes,setnotes,addnote}}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState
import { useState } from 'react'
import Header from './Header'
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from './CreateArea'
// import notes from "./notes"
import './App.css'

function App() {
  const [notes, changeNotes] = useState([])
  const [key, changeKey] = useState(0)
  function addNote(title,note){
    changeNotes((prev)=>
      [...prev, {key: key, title: title, content: note}]
    )
    changeKey(key => key +=1)
  }
  function deleteNote(index){
    changeNotes((prev)=> {
       const data = prev.filter((item)=>{
        return item.key != index;
      })
      return data;
    })
  }

  return (
    <>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note)=>
      <Note key={note.key} id={note.key} title={note.title} content={note.content} del ={deleteNote} />
      )}
      <Footer />
    </>
  )
}

export default App

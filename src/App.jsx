import { useState } from 'react'
import Header from './Header'
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {notes.map((note) =>
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
        />
      )}
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import NoteEditor from './components/NoteEditor';
import Note from './components/Note';

function App() {

  const [noteArray, setNoteArray] = useState([]);

  const addNote = (text) => {
    setNoteArray(noteArray.concat(text));
  }

  const renderNotes = () => {
    let notes = []
    for(let text of noteArray){
      notes.push(<Note text = {text}/>);
    }
    return notes;
  }

  return (
    <div className="main-container">
      <NoteEditor onAdd={addNote}/>
      <div className="notes-container">
        {renderNotes()}
      </div>
    </div>
  )
}

export default App

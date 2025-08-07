import { useState } from 'react'
import './App.css'
import NoteEditor from './components/NoteEditor';
import Note from './components/Note';

function App() {

  const [noteArray, setNoteArray] = useState([]);

  const addNote = (data) => {
    setNoteArray(noteArray.concat(data));
  }

  const onClose = (index) => {
    const confirmed = confirm("Are you sure you want to delete this note?");
    if(!confirmed){
      return;
    }
    let notes = noteArray.filter((item,i) => i !== index);
    setNoteArray(notes);
  }

  const renderNotes = () => {
    let notes = noteArray.map((data,index) => <Note key={index} title={data.title} text={data.text} time={data.time} close={() => onClose(index)}/>)
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

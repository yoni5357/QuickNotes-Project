import { useState } from 'react'
import './App.css'
import NoteEditor from './components/NoteEditor';
import Note from './components/Note';
import Modal from 'react-modal'
import EditNote from './components/EditNote';

function App() {

  const [noteArray, setNoteArray] = useState([]);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

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

  const onNoteClick = (index) => {
    setEditIsOpen(true)
    setEditIndex(index);
  }

  const updateNote = (data) => {
    const newArray = [...noteArray];
    newArray[editIndex] = data;
    setNoteArray(newArray);
  }

  const renderNotes = () => {
    let notes = noteArray.map((data,index) =>
       <Note 
        key={index} 
        title={data.title} 
        text={data.text} 
        time={data.time} 
        updatedTime={data.updatedTime}
        close={() => onClose(index)} 
        edit={() => onNoteClick(index)}
        category={data.category}
        />)
    return notes;
  }

  return (
    <div className="main-container">
      <NoteEditor onAdd={addNote}/>
      <div className="notes-container">
        {renderNotes()}
      </div>
      <Modal 
        className="note-edit-container"
        overlayClassName="modal-container"
        isOpen={editIsOpen}
        onRequestClose={() => setEditIsOpen(false)}
        appElement={document.querySelector('.main-container')}
      >
        {editIsOpen && noteArray[editIndex] && (
          <EditNote 
            title={noteArray[editIndex].title}
            text={noteArray[editIndex].text}
            time={noteArray[editIndex].time}
            update={updateNote}/>
        )}
      </Modal>
    </div>
  )
}

export default App

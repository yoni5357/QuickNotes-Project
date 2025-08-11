import { useState ,useEffect} from 'react'
import './App.css'
import NoteEditor from './components/NoteEditor';
import Note from './components/Note';
import Modal from 'react-modal'
import EditNote from './components/EditNote';

function App() {

  const [noteArray, setNoteArray] = useState([]);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [fristMount, setFirstMount] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('notes')){
      setNoteArray(JSON.parse(localStorage.getItem('notes')))
    }
  },[])

  useEffect(() => {
    if(!fristMount){
      localStorage.setItem('notes', JSON.stringify(noteArray));
    }
    setFirstMount(false);
  },[noteArray])

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

  const handleCategoryFilter = (filter) => {
    if(categoryFilter === filter){
      setCategoryFilter("")
    }
    else{
      setCategoryFilter(filter)
    }
  }

  const isClicked = (value) => {
    return value === categoryFilter ? "clicked" : "";
  }

  const renderNotes = () => {
    let notes = noteArray.filter(data => {
      if(!(data.category.includes(categoryFilter))){
        return;
      }
      if(data.title.includes(filter) || data.text.includes(filter)){
        return data;
      }
    }).map((data,index) =>
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
      <div className='filter-section'>
        <input type="text" placeholder='Filter by...' value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button className={isClicked("personal")} onClick={()=>{handleCategoryFilter("personal")}}>Personal</button>
        <button className={isClicked("work")} onClick={()=>{handleCategoryFilter("work")}}>Work</button>
        <button className={isClicked("family")} onClick={()=>{handleCategoryFilter("family")}}>Family</button>
      </div>
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
            data={noteArray[editIndex]}
            update={updateNote}/>
        )}
      </Modal>
    </div>
  )
}

export default App

import { useState } from "react";
import { getNiceTimestamp } from "../util";
import './EditNote.css'

function EditNote({title,text,time,update}){
    const [noteTitle, setNoteTitle] = useState(title);
    const [noteText, setNoteText] = useState(text);

    const handleUpdate = () => {
        update({'title':noteTitle,'text':noteText, 'time':time, 'updatedTime':getNiceTimestamp()})
    }

    return(
        <div className="container">
            <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
            <textarea  value={noteText} onChange={(e) => setNoteText(e.target.value)}></textarea>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default EditNote
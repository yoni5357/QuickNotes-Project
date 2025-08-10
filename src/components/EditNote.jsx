import { useState } from "react";
import { getNiceTimestamp } from "../util";
import './EditNote.css'

function EditNote({data,update}){
    const [noteTitle, setNoteTitle] = useState(data.title);
    const [noteText, setNoteText] = useState(data.text);

    const handleUpdate = () => {
        update({'title':noteTitle,'text':noteText, 'time':data.time,'category':data.category, 'updatedTime':getNiceTimestamp()} )
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
import { useState } from "react"
import "./NoteEditor.css"
import { getNiceTimestamp } from "../util";

function NoteEditor({onAdd}){

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        let data = {'title': title, 'text': text, 'time': getNiceTimestamp()}
        onAdd(data);
        setTitle("");
        setText("");
    }

    return(
        <div className="editor-container">
            <input type="text" value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
            <textarea value={text} placeholder="Your note..." onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default NoteEditor;
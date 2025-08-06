import { useState } from "react"
import "./NoteEditor.css"

function NoteEditor({onAdd}){

    const [text, setText] = useState("")

    const handleAdd = () => {
        onAdd(text);
        setText("");
    }

    return(
        <div className="editor-container">
            <textarea value={text} placeholder="Your note..." onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default NoteEditor;
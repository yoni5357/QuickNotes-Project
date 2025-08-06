import { useState } from "react"

function NoteEditor({onAdd}){

    const [text, setText] = useState("")

    const handleAdd = () => {
        onAdd(text);
        setText("");
    }

    return(
        <div className="editor-container">
            <input type="text-area" value={text} onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default NoteEditor;
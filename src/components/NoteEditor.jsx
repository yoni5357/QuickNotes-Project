import { useState } from "react"
import "./NoteEditor.css"
import { getNiceTimestamp } from "../util";

function NoteEditor({onAdd}){

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("personal");

    const handleAdd = () => {
        let data = {'title': title,
                     'text': text,
                     'time': getNiceTimestamp(),
                     'category': category}
        onAdd(data);
        setTitle("");
        setText("");
    }

    return(
        <div className="editor-container">
            <input type="text" value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
            <textarea value={text} placeholder="Your note..." onChange={(e) => {setText(e.target.value)}}/>
            <div className="bottom-section">
                <button onClick={handleAdd}>Add</button>
                <select id="select-category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="family">Family</option>
                </select>
            </div>
        </div>
    )
}

export default NoteEditor;
import { useState } from "react"
import "./NoteEditor.css"

function NoteEditor({onAdd}){

    const [text, setText] = useState("")

    function getNiceTimestamp(date = new Date()) {
        const month = date.toLocaleString('en-US', { month: 'long' });   // August
        const day   = date.getDate();   
        
        const suffix = (() => {
            // 11th, 12th, 13th are the exceptions
            if (day % 100 >= 11 && day % 100 <= 13) return 'th';
            switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
            }
        })();
        const time  = date.toLocaleString('en-US', {                    // 9:23 AM
        hour:   'numeric',
        minute: '2-digit',
        hour12: true
    });

    return `${month} ${day}${suffix} ${time}`;
    }

    const handleAdd = () => {
        let data = {'text': text, 'time': getNiceTimestamp()}
        onAdd(data);
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
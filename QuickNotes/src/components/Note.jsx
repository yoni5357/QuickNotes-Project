import "./Note.css"
function Note({text}){
    return(
        <div className="note-container">
            <p>{text}</p>
        </div>
    )
}

export default Note;
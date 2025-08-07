import "./Note.css"
function Note({title,text,time,close}){

    return(
        <div className="note-container">
            <div className="top-section">
                <p className="time-stamp">{time}</p>
                <button onClick={()=>close()} className="close-button">X</button>
            </div>
            <h2>{title}</h2>
            <p className="note-text">{text}</p>
        </div>
    )
}

export default Note;
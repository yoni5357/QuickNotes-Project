import "./Note.css"
function Note({title,text,time,updatedTime,close,edit}){

    const handleClose = (e) => {
        e.stopPropagation()
        close()
    }

    return(
        <div className="note-container" onClick={() => edit()}>
            <div className="top-section">
                <button onClick={handleClose} className="close-button">X</button>
            </div>
            <h2>{title}</h2>
            <p className="note-text">{text}</p>
            <div className="bottom-section">
                <p className="time-stamp">created: {time}</p>
                {updatedTime ? <p className="time-stamp">updated: {updatedTime}</p> : <></>}
            </div>
        </div>
    )
}

export default Note;
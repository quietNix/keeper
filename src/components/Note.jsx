import React from "react";

function Note(props) {

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button id="Submit" onClick={() => {
                props.onDelete(props.id);
            }}>Del
            </button>
            <button onClick={()=>{
                props.onOpen(props.id)
            }}>Open</button>
        </div>
    );
}

export default Note;
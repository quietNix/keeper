import React, { Fragment, memo, useState } from "react";
import axios from "axios";
import { serverURL } from "./constants";


function Compose(props) {
    console.log("Compose");

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    async function submitNote(event) {       //contacting server and getting the values.
        event.preventDefault();
        
        if (note.content === "" && note.title === "") return;
        if (note.title === "") note.title = note.content.substring(0, 29);
        if(note.content==="") note.content=note.title;

        const object = await axios.post(serverURL + "/compose", note, { withCredentials: true });
        console.log("Added");console.log(object.data);
        props.onAdd(object.data)
            setNote({
            title: "",
            content: ""
        });
    }

    return (
        <Fragment>
        <div className="Container-fluid" style={{textAlign:"center"}}>
            <form id="ComposeForm" style={{position:"relative", left:"auto", width:"40%"}}>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button id="Submit" onClick={submitNote}>Add</button>
            </form>
            </div>
        </Fragment>
    );
}

// export default Compose;

export default memo(Compose, (prevState, nextState) => prevState.show === nextState.show);

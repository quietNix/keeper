import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "./constants";



function Edit(props) {
        console.log("Edit");


        const [note, setNote] = useState({
            key: "",
            title: "",
            content: ""
        });

        useEffect(() => {
            setNote({
                key: props.note.key,
                title: props.note.title,
                content: props.note.content
            })
        }, [props]);


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
            if (note.content === "") note.content = note.title;
            const object = await axios.post(serverURL + "/recompose", note, { withCredentials: true });
            console.log("edited"); console.log(note); console.log(object.data);
            props.onEdit(object.data.reverse());
            setNote({
                title: "",
                content: ""
            });
            props.onEditComplete();
        }

        return (
            <Fragment>
                <form id="ComposeForm">
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


                    <button id="Submit" onClick={submitNote}>Edit</button>
                </form>
            </Fragment>
        );
};





export default Edit;
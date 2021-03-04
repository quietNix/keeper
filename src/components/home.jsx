import React, { Fragment, useEffect, useState } from "react";
import Note from "./Note";
import Compose from "./Compose";
import Edit from "./Edit";
import axios from "axios";
import Scroll from "./Scroll";
import { serverURL } from "./constants";

function Home() {
    const [Notes, setNotes] = useState([]);
    const [editOn, setEdit] = useState(false);
    const [post, setPost] = useState({});
    const [searchText, setSearchText] = useState("");

    console.log("home");

    //equivalent to componentDidMount
    useEffect(() => {
        findNotes();
    }, []);

    async function findNotes() {
        await axios.get(serverURL + "/home", { withCredentials: true })
            .then(response => {
                console.log("Notes"); console.log(response.data);
                setNotes(response.data.reverse());
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    function addNote(newNote) {

        setNotes((prevNotes) => {
            return [
                newNote, ...prevNotes
            ]
        })
    }

    function deleteNote(id) {
        var post = Notes.filter((noteItem) => {
            return (noteItem._id === id);
        });
        console.log("delete"); console.log(post[0]);
        axios.post(serverURL + "/delete", { postID: post[0]._id }, { withCredentials: true });
        // .then((response) => {
        //     setNotes(response.data);
        // });
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem) => {
                return noteItem._id !== id;
            });
        });
    }

    function openNote(id) {
        const posta = Notes.filter((noteItem) => {
            return (noteItem._id === id);
        });
        const postn = {
            key: posta[0]._id,
            title: posta[0].title,
            content: posta[0].content
        }
        setPost(postn);
        setEdit(true);
    }

    function editNote(updatedNotes) {
        setNotes(updatedNotes);
    }

    


    function UpdateSearchText(event) {
        setSearchText(event.target.value);
    }

    const filteredNotes = Notes.filter((noteItem) => {
        return noteItem.title.toLowerCase().includes(searchText.toLowerCase()) ||
            noteItem.content.toLowerCase().includes(searchText.toLowerCase())
    });
    return (
        <Fragment>
            <div style={{ textAlign: "center" }}>
                <input style={{ width: "70%", height: "2rem", marginTop: "2px", border: "none", borderRadius: "5px", paddingLeft: "10px", boxShadow: "0 2px 5px #ccc" }} onChange={UpdateSearchText} type="search" placeholder="Search Notes" value={searchText} />
            </div>
            {editOn ?
                <Edit
                    note={post}
                    onEditComplete={() => {
                        setEdit(false);
                    }}
                    onEdit={editNote}
                />
                :
                <Compose
                    onAdd={addNote}
                />}
            <Scroll>
                        {searchText === "" ?
                            Notes.map((noteItem) => {
                                return (
                                        <Note
                                            id={noteItem._id}
                                            key={noteItem._id}
                                            title={noteItem.title.substring(0, 29)}
                                            content={noteItem.content.length > 29 ? noteItem.content.substring(0, 25) + "... " : noteItem.content}
                                            //ToDo:  THOUGH IT DOESNT WORK, WE HAVE TO IMPLEMENT SOMEHOW ONLY FIRST CLINE IS VISIBLE IN THE CARD ITSELF
                                            onDelete={deleteNote}
                                            onOpen={openNote}
                                        />
                                );
                            })
                            :
                            filteredNotes.map((noteItem) => {
                                return (
                                    <Note
                                        id={noteItem._id}
                                        key={noteItem._id}
                                        title={noteItem.title.substring(0, 29)}
                                        content={noteItem.content.length > 29 ? noteItem.content.substring(0, 25) + "... " : noteItem.content}
                                        //ToDo:  THOUGH IT DOESNT WORK, WE HAVE TO IMPLEMENT SOMEHOW ONLY FIRST CLINE IS VISIBLE IN THE CARD ITSELF
                                        onDelete={deleteNote}
                                        onOpen={openNote}
                                    />
                                );
                            })
                        }
            </Scroll>
        </Fragment>
    );


}

export default Home;
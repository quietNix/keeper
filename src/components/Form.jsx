import React, { useState } from "react";

function Form({message,  FormSubmit, setMessage, route}) {

    const [credential, SetCredential] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        SetCredential(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function Check(event){
        event.preventDefault();

        console.log(event);
        const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rep = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (credential.username === "" || credential.password === "") {
            setMessage("Please Enter Your Credential");
        } else if (!re.test(credential.username)) {
                setMessage("Enter Valid Email address");
        }else if(!rep.test(credential.password)){
            setMessage("Enter Valid Password");
        }else{
            FormSubmit({username: credential.username, password: credential.password});
        }        
        SetCredential({
            username: "",
            password: ""
        });
    }

    return (
        <div className="container-fluid">
            <br />
            <div className="row" style={{ justifyContent:"center"}}>
                <div className="card" >
                    <h3>{message}</h3>
                    <h1>{route}</h1>

                    <form method="POST">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            className="form-control"
                            name="username"
                            placeholder="email address"
                            value={credential.username}
                        />
                        <br/>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={credential.password}
                        />
                        <button onClick={Check} id="Submit" className="btn btn-light  loginButton">{route}</button>
                    </form>
                </div>
            </div>
                {/* <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body loginForm">
                                <a className="btn btn-light loginButton " href="/auth/google" role="button">
                                    <i className="fab fa-google">Sign In with Google</i>
                                </a>
                            </div>
                        </div>
                    </div> */}
        </div>
    )
}

export default Form;

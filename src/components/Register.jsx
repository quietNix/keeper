import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import { serverURL } from "./constants";
import Form from "./Form"


import { setUserCreated } from "./action";

const mapStateToProps = (state) => {
    return {
        userCreated: state.userCreated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserCreated: (verdict) => dispatch(setUserCreated(verdict))
    }
}

function Register({userCreated, onUserCreated}) {

    const [message, setMessage] = useState("");

    async function FormSubmit(credential) {
        axios.post(serverURL + "/register", credential, { withCredentials: true })
            .then(response => {
                response.data.user?setMessage("User Successfully Created"): setMessage("User Already exist, try logging in");
                console.log("if user already existed", response.data);
                onUserCreated(response.data.user);
            }).catch(error => {
                console.log(error.response);
            })
    }

    if (userCreated) {
        console.log("user created finally",userCreated);
        return <Redirect to= "/login"/>
    }else {
        return (
            <Form
                route="Register"
                message={message}
                FormSubmit={FormSubmit}
                setMessage={setMessage}
            />
        );
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Register);
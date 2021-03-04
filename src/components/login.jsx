import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { serverURL } from "./constants";
import Form from "./Form";


import { setAuthorisationStatus} from "./action";

const mapStateToProps = (state) => {
    return {
        authStatus: state.auth,
        userCreated: state.userCreated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthSet: (verdict) => dispatch(setAuthorisationStatus(verdict))
    }
}

function Login({authStatus, onAuthSet, userCreated}) {

    const[message, setMessage] =useState("");

    useEffect(() => {
        userCreated && setMessage("Verify Your Email Address");
    }, [userCreated]);


    async function FormSubmit(credential) {
        console.log("should not reach if wrong email");
        await axios.post(serverURL + "/login", credential, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (!response.data.user) {
                    setMessage("User doesn't exist");
                    return;
                }
                if (!response.data.verified) {
                    setMessage("Verify Your Email Address");
                    return;
                }
                if (response.data.auth) {
                    setMessage("")
                    onAuthSet(true);
                }
            })
            .catch(error => {
                console.log(error.response);
                setMessage("Wrong Password, Please Try again")
            })
    }

    if (authStatus) {
        return <Redirect to="/" />
    }else{
        return (
            <Form 
                route="Login"
                message={message}
                FormSubmit={FormSubmit}
                setMessage={setMessage}
            />
        );
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Login);
import React, { Fragment } from "react";


function Home(props) {
    return (
        <Fragment>
            <div className="centered">
                <div className="container">
                    <h1>Note Taking App</h1>
                    <p className="lead">Don't take risk keeping a food list in mind.</p>
                    <br />
                    <a className="btn btn-light btn-lg" href="/register" role="button">Register</a>
                    <a className="btn btn-dark btn-lg" href="/login" role="button">Login</a>
                </div>
            </div>
        </Fragment>
        
    );
}



export default Home;
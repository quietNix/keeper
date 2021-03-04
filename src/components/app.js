import React, { Fragment, useEffect } from "react";
import {connect} from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./partials/header";
import Footer from "./partials/footer";
import LoginRegister from "./loginregister";
import Register from "./Register";
import Login from "./login";
import Home from "./home";
import Loading from "./Loading";
import {requestAuth, setAuthorisationStatus} from "./action";



const mapStateToProps=(state)=>{
  return{
      auth:state.auth,
      isPending: state.isPending,
      error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSet: (verdict)=>dispatch(setAuthorisationStatus(verdict)),
    onRequestAuth:()=>dispatch(requestAuth())
  }
}

function App({ auth, isPending, error, onRequestAuth}) {

  useEffect(()=>{
    if(!auth ) onRequestAuth();
  }, [auth, onRequestAuth])

  return (
    <Fragment >
      <Header/>
      <Switch>
        {/* {
          isPending ?
            <Route exact={true} path="/" component={Loading} />
            :
            auth ?
              <Route exact={true} path="/" component={Home} />
              :
              <Route exact={true} path="/" component={LoginRegister} />
        } */}
      {error? <h1>ERRoR</h1>:
          isPending ?
            <Route exact={true} path="/" component={Loading} />
            :
            auth ?
              <Route exact={true} path="/" component={Home} />
              :
              <Route exact={true} path="/" component={LoginRegister} />
      }
        <Route exact={true} path="/register" component={Register} />
        <Route exact={true} path="/login" component={Login} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect high order function
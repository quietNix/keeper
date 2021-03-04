import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthorisationStatus } from "../action";
import { serverURL } from "../constants";

const mapStateToProps = (state) => {
  return {
    authStatus: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSet: (verdict) => dispatch(setAuthorisationStatus(verdict))
  }
}

function Header({ authStatus, onAuthSet }) {

  function logout() {
    axios.get(serverURL + "/logout", { withCredentials: true })
      .then(response => {
        onAuthSet(false);
      }).catch(error => {
        console.log(error.response);
      })
  }

    return <header>
      <h1 style={{ display: "inline-block" }}>Keeper</h1>
      {authStatus && <button onClick={logout} className="LogoutButton">Logout</button>}
    </header>
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
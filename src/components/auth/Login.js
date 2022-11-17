import React from "react";
import "./Login.css";
import google from "./google.png";
import whatsapp from "./whatsapp.png";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebaseConfig";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const singin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src={whatsapp} alt="Google" />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={singin}>
          Sign In With
          <img src={google} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default Login;

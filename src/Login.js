import React from "react";
import { useHistory } from 'react-router-dom';
import App from './App';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Login() {
    let history = useHistory();

    const redirect = () => {
        history.push('/')
      }

    



    return (
        <div>
        <button onClick={redirect}>Redirect</button>
        
        </div>
    );
}
           
        
        

        export default Login;
import React from "react";
import "./LoginPage.css"
const LoginPage = () => {
    return(
        <>
            <div className="container">
                <div className="loginview">
                <input type="text" name="contact" id="contact" placeholder="Contact" />
                <input type="text" name="otp" id="otp" placeholder="otp" /> 
                <input type="button" name="login" id="login" value={"login"}/>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
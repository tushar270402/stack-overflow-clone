import { useState } from "react"
import './Auth.css'
import logo from '../../../assets/logo-stackoverflow.png'
import AboutAuth from "./AboutAuth";


export default function Auth() {

    let [isSignin, setIssignin] = useState(false);

    let handleSwitch = ()=>{
        setIssignin( !isSignin )
    }

    return (
        <section className="auth-section">
            { isSignin && <AboutAuth/>}
            <div className="auth-container-2">
                {!isSignin && <img src={logo} alt="logo" className="login-logo"></img>}
                <form>
                    {
                        isSignin && (<label htmlFor="username" >
                            <h4>Display Name</h4>
                            <input type="text" name="username" id="username"/>
                        </label>)
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name="email" id="email"/>
                    </label>
                    <label htmlFor="password">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h4>Password</h4>
                            { !isSignin && <p style={{fontSize: "13px", color: "blue"}}>Forgot Password?</p> } 
                        </div>
                        <input type="password" name="password" id="password" />
                        {
                            isSignin && <p style={{color : "#666767", fontSize: "13px"}}>Password must contain atleast 8 characters, <br/>including atleast 1 letter and number</p>
                        }
                    </label>
                    {
                        isSignin && (
                            <label htmlFor="check">
                                <input type="checkbox" id="check" style={{height:"15px"}}/> 
                                <p style={{color : "#666767", fontSize: "13px"}}>Opt-in to recieve occasional,<br/>product updates, user research invitations,<br/>company announcements, and digest</p>
                            </label>
                        )
                    }
                    <button type="submit" className="Auth-btn">{ isSignin ?"Sign Up"  : "Log In"}</button>
                    { 
                        isSignin && (
                            <p style={{color : "#666767", fontSize: "13px"}}>By clicking "Sign Up", You agree to our 
                                <span style={{color : "blue"}}> terms of <br/>service</span>, 
                                <span style={{color : "blue"}}> privacy policy</span> and 
                                <span style={{color : "blue"}}> cookie policy</span> </p>
                        )
                    }
                </form>
                <p>
                    { isSignin ? "Already have an account ?" : "Dont have an account?" }
                    <button type="button" className="handle-switch-btn" onClick={handleSwitch}>{ isSignin ? "Log In" : "Sign Up"}</button>
                </p>
            </div>
        </section>
    )
}  
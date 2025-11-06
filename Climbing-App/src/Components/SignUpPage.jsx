import React from "react"
import Navbar from "./NavBar"
import { Link } from "react-router-dom";
import './Main.css'


function SignUp(){
    return(
        <div>
            <Navbar />
            <h1 className="sign-up">Sign Up Below</h1>
            <form className= "flex-item">
                  <label for="username">Username: </label>
                  <input type="text" id="username" name="username" required/>
                  <br/>
                  <label for="email">Email: </label>
                  <input type="email" id="email" name="email" required/>
                  <br/>
                  <label for="password">Password: </label>
                  <input type="password" id="password" name="password" required/>
                  <br/>
                  <Link to="/create">
                  <button className = "submit">Submit</button>
                  </Link>
                  
            </form>
            <img className= "signup-image" src = "https://climbsoill.com/wp-content/uploads/2024/07/gravity-lab-climb-so-ill-st-charles-768x768.webp"/>                
        </div>

    )
}

export default SignUp;

//need to make sure that form actually has validation and button does not work unless input is correct
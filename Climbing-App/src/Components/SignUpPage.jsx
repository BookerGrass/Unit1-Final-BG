import React from "react"
import Navbar from "./NavBar"

function SignUp(){
    return(
        <div>
            <Navbar />
            <h1>Sign Up Below</h1>
            <form>
                  <label for="username">Username:</label>
                  <input type="text" id="username" name="username" required/>
                  <br/>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required/>
                  <br/>
                  <label for="password">Password:</label>
                  <input type="password" id="password" name="password" required/>
                  <br/>
                  <button className = "submit">Submit</button>
                  <img src = "https://climbsoill.com/wp-content/uploads/2024/07/gravity-lab-climb-so-ill-st-charles-768x768.webp"/>                
            </form>
        </div>

    )
}

export default SignUp
import React from "react"
import Navbar from "./NavBar"
import "./LandingScreen.css"
  
function LandingScreen(){

    return(
<div>
<Navbar />
<div className= "home-image">
  <img src="https://npr.brightspotcdn.com/dims4/default/a95eb8c/2147483647/strip/true/crop/1000x563+0+52/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwmu%2Ffiles%2F201607%2Fclimbsoill2.jpg"/>
  <div className="centered"><h1>Welcome To Climb Buddy!</h1>  
  <h2>Sign Up Here</h2>
  <button className = "get-started">Get Started</button>
  </div>

</div>

</div>
);
};

export default LandingScreen;
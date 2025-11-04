import React from "react"
import Navbar from "./NavBar"

function HomePage(){
    return(
        <div>
            <Navbar />
                <div className= "home-image">
                    <img src="https://npr.brightspotcdn.com/dims4/default/a95eb8c/2147483647/strip/true/crop/1000x563+0+52/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwmu%2Ffiles%2F201607%2Fclimbsoill2.jpg"/>
                    <div className="centered"><h1>Welcome Back</h1></div>
                </div>
                <h2>Achivements</h2>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                <h2>In Progress</h2>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                <h2>Positive Quote of the Day</h2>
                <p>"Go You"</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"/>
        </div>

    )
}

export default HomePage
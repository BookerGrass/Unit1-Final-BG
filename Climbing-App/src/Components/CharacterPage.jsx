import React from "react"
import Navbar from "./NavBar"

function CreateBuddy(){
    return(
        <div>
            <Navbar />
            <h1>Create Your Buddy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <label for="animalDropdown">Choose an animal:</label>
                    <select name="animalDropdown" id="animalDropdown">
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="lizard">Lizard</option>
                    </select>
                <br/>
                <label for="colorDropdown">Choose an color:</label>
                    <select name="colorDropdown" id="colorDropdown">
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="green">Green</option>
                    </select>
                <br/>
            <img src="https://www.catbehaviourist.com/wp-content/uploads/2015/11/cat-in-tree-1.jpg"/>
            <br/>
            <button className = "save-buddy">Save Your Buddy</button>
        </div>

    )
}

export default CreateBuddy
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import './Main.css'


function CreateBuddy() {

  const [selectedImage, setSelectedImage] = useState("cat");
  

  const imageOptions = {
    cat: "https://www.catbehaviourist.com/wp-content/uploads/2015/11/cat-in-tree-1.jpg",
    dog: "https://gripped.com/wp-content/uploads/2018/03/Biscuit-Dog.jpg",
    lizard: "https://images.pexels.com/photos/17020788/pexels-photo-17020788/free-photo-of-a-lizard-climbing-on-the-rock.jpeg",
  };


  const handleChange = (e) => {
    setSelectedImage(e.target.value);
  };



  return (
    <div>
      <Navbar />
    <div className='flex-item'>
      <h1>Create Your Buddy</h1>
      <p>
        Here you can pick what your Lil Guy will look like!
      </p>

      <label htmlFor="animalDropdown">Choose an animal: </label>
      <select id="animalDropdown" onChange={handleChange} value={selectedImage}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="lizard">Lizard</option>
      </select>
            <Link to ="/home">
        <button className="save-buddy">Save Your Buddy</button>
      </Link>
    </div>

      <div className="image-container">
        <img
          src={imageOptions[selectedImage]}
          alt={selectedImage}
          className="climb-image"
        />
      </div>

</div>

  );
}

export default CreateBuddy;

//Gotta figure out how to send selected picture to home page
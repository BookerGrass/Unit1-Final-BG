import React, { useState } from "react";
import Navbar from "./NavBar";

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

      <h1>Create Your Buddy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>

      <label htmlFor="animalDropdown">Choose an animal:</label>
      <select id="animalDropdown" onChange={handleChange} value={selectedImage}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="lizard">Lizard</option>
      </select>

      <div className="image-container">
        <img
          src={imageOptions[selectedImage]}
          alt={selectedImage}
          className="climb-image"
        />
      </div>

      <button className="save-buddy">Save Your Buddy</button>
    </div>
  );
}

export default CreateBuddy;
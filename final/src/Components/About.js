import React from 'react';
import pic from "./Images/aboutus.jpg"
const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pic} // Replace with the actual image path
            alt="About Us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Welcome to our recipe website! We are passionate about cooking and
            sharing delicious recipes with food enthusiasts like you. Our team
            of chefs and home cooks works tirelessly to curate the best recipes
            from various cuisines and cultures around the world.
          </p>
          <p>
            Whether you're a seasoned chef or just starting your culinary
            journey, our collection of recipes has something for everyone. From
            quick and easy weeknight dinners to impressive gourmet dishes, we've
            got you covered.
          </p>
          <p>
            Join us on this mouthwatering adventure, and let's explore the
            world of flavors together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

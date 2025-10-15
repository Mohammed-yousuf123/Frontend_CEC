import React from "react";
import profilePic from "../assets/water-image.jpg";

const ProfileCard = () => {
  return (
    <div style={{ border: "5px solid #4f3838ff", padding: "20px", width: "200px", textAlign: "center" }}>
      <img src={profilePic} alt="Profile" style={{ width: "100px", borderRadius: "50%" }} />
      <h3>John Doe</h3>
      <p>Web Developer</p>
    </div>
  );
};

export default ProfileCard;
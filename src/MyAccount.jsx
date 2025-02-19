import React from "react";
import "./MyAccount.css"; // Import CSS file
import myImage from "./my-image.jpg"; 

const MyAccount = () => {
  return (
    <div className="account-container">
      <h1 className="account-title">Created by</h1>
      <img
        src={myImage} // Replace with your image URL
        alt="Profile"
        className="profile-image"
      />
      <h2 className="account-name">Ramachandra reddy</h2>
      <p className="account-email">prcreddy222@gmail.com</p> 
      <p  className="account-email">6303421628</p>
    </div>
  );
};

export default MyAccount;

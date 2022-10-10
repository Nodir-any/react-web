import React from 'react';
import "./App.css";

  
const Footer = () => {
  return (
    <div className="body-footer">
	<h2 className="footer-text">Footer</h2>
      <div>
        <div className="columns">
          <div className="cols for-margin">
            <h3>About Us</h3>
            <a href="#">Aim</a>
            <a href="#">Vision</a>
			<a href="#">Mumbai</a>
          </div>
          <div className="cols">
            <h3>Services</h3>
            <a href="#">Writing</a>
            <a href="#">Coding</a>
			<a href="#">Mumbai</a>
          </div>
          <div className="cols">
            <h3>Contact Us</h3>
            <a href="#">Ahemdabad</a>
            <a href="#">Indore</a>
            <a href="#">Mumbai</a>
          </div>
          <div className="cols">
            <h3>Social Media</h3>
            <a href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h1>Binary World</h1>
        <p>BhindwarG Copyright © {year}</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.instagram.com/bhindwar.g/" target={"blank"}>Instagram</a>
          <a href="https://www.linkedin.com/in/gaurav-kumar-11615220a/" target={"blank"}>LinkedIn</a>
          <a href="https://github.com/gauravbhindwar" target={"blank"}>GitHub</a>
          <a href="https://www.facebook.com/BhindwarG/" target={"blank"}>Facebook</a>
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;

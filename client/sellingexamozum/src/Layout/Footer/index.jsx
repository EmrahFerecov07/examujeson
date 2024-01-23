import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div className="tasty">
        <h2>Tasty</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="op">
        <h2>Opening Hours</h2>
        <p>
          Monday: 08: - 22:00 Tuesday: 08: - 22:00 Wednesday: 08: - 22:00
          Thursday: 08: - 22:00 Friday: 08: - 22:00 Saturday: 08: - 22:00
          Sunday: 08: - 22:00
        </p>
      </div>
      <div className="ci">
        <h2>Contact Information</h2>
        <p>
          198 West 21th Street, Suite 721 New York NY 10016 + 1235 2355 98
          info@yoursite.com email@email.com
        </p>
      </div>
      <div className="ns">
        <h2>Newsletter</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
      </div>
    </section>
  );
};

export default Footer;

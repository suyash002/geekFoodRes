import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-logo">
        <i className="fa-solid fa-burger"></i>
        <span>logoipsum</span>
      </div>

      <div className="footer-description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
      </div>

      <div className="footer-links">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">History</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>

      <div className="footer-socials">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-solid fa-basketball"></i>
      </div>
    </section>
  );
};

export default Footer;
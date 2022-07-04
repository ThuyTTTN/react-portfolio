import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container d-inline-flex">
        <h6 className="footer-name">&copy; Thuy Nguyen 2022</h6>
        <div className="footer-icons">
          <a href="https://github.com/ThuyTTTN" className="p-3">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="www.linkedin.com/in/thuy-nguyen-a2333031" className="p-3">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="/" className="p-3">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

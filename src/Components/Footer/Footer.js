import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid container-footer py-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <h2> About us</h2>
          <p>
            We are a young company always
            <br /> looking for new and creative <br />
            ideas to help you with our
            <br /> products in your everyday work.
          </p>
          <p>© Digi Store</p>
        </div>
        <div className="col-12 col-md-4">
          <h2>Contact</h2>
          <div className="footer-contact mb-3">
            <span>
              <i className="fa fa-map-marker-alt"></i>Iran, mazandaran, sari
            </span>
            <span>
              <i className="fa fa-phone"></i>phone: +98 921 921 9921
            </span>
            <span>
              <i className="fa fa-envelope"></i>Email: alikameli0123@gmail.com
            </span>
          </div>
          <form className="form-contorol">
            <div class="input-group">
              <input type="text" />
              <div class="input-group-prepend">
                <input
                  type="button"
                  className="btn btn-warning footer-subscrib"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-4">
          <h2>Link</h2>
          <div className="footer-link">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">How it Works</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

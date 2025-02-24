import React from "react";
import "../../assets/css/bootstrap.min.css";
// import '../../assets/css/font-awesome-pro.css';
import "../../assets/css/flaticon_saasify.css";
import "../../assets/css/animate.css";
import "../../assets/css/sal.css";
import "../../assets/css/odometer.min.css";
import "../../assets/css/meanmenu.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css";

export default function HeroSection() {
  return (
    <>
      <section
        className="tj-hero-section"
        data-bg-image="/images/banner/bg-group-3.svg"
      >
        <div className="tj-circle-box">
          <span className="circle-1" />
          <span className="circle-2" />
          <span className="circle-3" />
          <span className="circle-4" />
          <span className="circle-5" />
          <span className="circle-6" />
          <span className="circle-7" />
          <span className="circle-8" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content-area text-center">
                <div className="tj-sec-heading text-center">
                  <span className="sub-title">
                    #1 CRA Certified Tax file Engine
                  </span>
                  <h1 className="title">
                    Quality Solution to Make your TAX Filing easier
                  </h1>
                  <p className="desc">
                    Do it yourself with expert help and mentoring. Take your
                    device and let’s start your filing
                  </p>
                </div>
                <div className="flex mx-auto gap-3 w-fit">
                  <div className="tj-choose-us-button">
                    <a
                      className="tj-black-btn"
                      href="https://app.chatfiler.ca/2023"
                    >
                      {" "}
                      FILE MY RETURNS (E file)
                    </a>
                  </div>
                  <div className="tj-choose-us-button">
                    <a
                      className="tj-black-btn"
                      href="https://app.chatfiler.ca/2023"
                    >
                      {" "}
                      FILE MY RETURNS (netfile)
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-lg-image shake-y text-center">
                <img src="/images/banner/dashboard.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

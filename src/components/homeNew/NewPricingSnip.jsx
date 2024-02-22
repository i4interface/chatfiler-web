import React from 'react'
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/font-awesome-pro.css';
import '../../assets/css/flaticon_saasify.css';
import '../../assets/css/animate.css';
import '../../assets/css/sal.css';
import '../../assets/css/odometer.min.css';
import '../../assets/css/meanmenu.css';
import '../../assets/css/swiper.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

export default function NewPricingSnip() {
  return (
    <>
<section className="tj-price-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="tj-sec-heading text-center">
          <span className="sub-title"> Choose your Plan</span>
          <h2 className="title">Should you Use Our Software?</h2>
          <p className="desc">
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div className="tj-price-item">
          <div className="price-top-header">
            <div className="price-content">
              <h6 className="title">Basic Plan</h6>
              <div className="price">30$ <span className="month"> /month</span></div>
            </div>
            <div className="price-icon">
              <i className="flaticon-earning" />
            </div>
          </div>
          <div className="price-list">
            <ul className="list-gap">
              <li><i className="flaticon-checkmark" /> 1000 User Activities</li>
              <li><i className="flaticon-checkmark" /> Unlimited Access</li>
              <li><i className="flaticon-checkmark" /> No Hidden Charge</li>
              <li><i className="flaticon-checkmark" /> 03 Time Updates</li>
              <li><i className="flaticon-checkmark" /> Figma Source File</li>
              <li><i className="flaticon-checkmark" /> Many More Facilities</li>
            </ul>
          </div>
          <div className="tj-price-button text-center">
            <a className="tj-transparent-btn" href="#"> Get The Plan Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="tj-price-item price-active">
          <div className="price-top-header">
            <div className="price-content">
              <h6 className="title">Enterprise Plan</h6>
              <div className="price">99$ <span className="month"> /month</span></div>
            </div>
            <div className="price-icon">
              <i className="flaticon-gold-ingots" />
            </div>
          </div>
          <div className="price-list">
            <ul className="list-gap">
              <li><i className="flaticon-checkmark" /> 5000 User Activities</li>
              <li><i className="flaticon-checkmark" /> Unlimited Access</li>
              <li><i className="flaticon-checkmark" /> No Hidden Charge</li>
              <li><i className="flaticon-checkmark" /> 03 Time Updates</li>
              <li><i className="flaticon-checkmark" /> Figma Source File</li>
              <li><i className="flaticon-checkmark" /> Many More Facilities</li>
            </ul>
          </div>
          <div className="tj-price-button text-center">
            <a className="tj-transparent-btn" href="#"> Get The Plan Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="tj-price-item">
          <div className="price-top-header">
            <div className="price-content">
              <h6 className="title">Team Plan</h6>
              <div className="price">50$ <span className="month"> /month</span></div>
            </div>
            <div className="price-icon">
              <i className="flaticon-management" />
            </div>
          </div>
          <div className="price-list">
            <ul className="list-gap">
              <li><i className="flaticon-checkmark" /> 3000 User Activities</li>
              <li><i className="flaticon-checkmark" /> Unlimited Access</li>
              <li><i className="flaticon-checkmark" /> No Hidden Charge</li>
              <li><i className="flaticon-checkmark" /> 03 Time Updates</li>
              <li><i className="flaticon-checkmark" /> Figma Source File</li>
              <li><i className="flaticon-checkmark" /> Many More Facilities</li>
            </ul>
          </div>
          <div className="tj-price-button text-center">
            <a className="tj-transparent-btn" href="#"> Get The Plan Now</a>
          </div>
        </div>
      </div>
    </div>
    <div className="price-shape pulse">
      <img src="/assets/images/shape/sec-shape2.svg" alt="Shape" />
    </div>
  </div>
  <div className="price-overly">
    <img src="/assets/images/shape/overly-5.svg" alt="Shape" />
  </div>
  <div className="price-shape1">
    <img src="/assets/images/shape/sec-shape1.svg" alt="Shape" />
  </div>
  <div className="price-shape2">
    <img src="/assets/images/shape/sec-shape7.svg" alt="Shape" />
  </div>
</section>

    </>
  )
}

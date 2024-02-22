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

export default function NewPricingSnip() {
  return (
    <>
      <section className="tj-price-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tj-sec-heading text-center">
                <span className="sub-title"> Choose your Plan</span>
                <h2 className="title">Get ChatFiler at Best Price.</h2>
                <p className="desc">
                File your tax at your convenience even though you don't have any expertise in it, because we got you covered. Our expert team will review your file and provide you with expert knowledge, suggestions and tips to save your taxes.
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
                    <div className="price">
                    1.49$ <span className="month"> /return (excl. tax)</span>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-earning" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    <li>
                      <i className="flaticon-checkmark" /> Upto 1 return per plan
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Covers employment, unemployment, & pension Income.
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> AI powered Slip Scanning
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Video Tutorials
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Amend & Refile
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Save Data from Previous Years
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />Tuition Fees, Medical Receipts, Donation Slips, Rent Paid
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />Unlock more features by upgrading to Chatfiler Plus
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a className="tj-transparent-btn" href="#">
                    {" "}
                    Get The Plan Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="tj-price-item price-active">
                <div className="price-top-header">
                  <div className="price-content">
                    <h6 className="title">Premium Plans</h6>
                    <div className="price">
                    49.99$ - 129$ <span className="month"> (excl. Tax)</span>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-management" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    <li>
                      <i className="flaticon-checkmark" /> Dedicated guide session
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Chat Support for Tax & Technical Issues.
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Customized Tax Savings Tips for your scenario.
                    </li>

                    <li>
                       and many more...
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a className="tj-transparent-btn" href="/pricing">
                    {" "}
                    Explore Premium Plans
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="tj-price-item">
                <div className="price-top-header">
                  <div className="price-content">
                    <h6 className="title">Plus Plan</h6>
                    <div className="price">
                    29.99$ <span className="month"> /2 returns (excl. tax)</span>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-gold-ingots" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    <li>
                      <i className="flaticon-checkmark" /> Upto 2 returns per plan
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Include everything in basic plan
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Mostly ideal for families
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Audit Assistance
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Chat Support for Tax & Technical issues
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Unlimited Personalized Tax Support during the season
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Know your refund before
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />Year around email support

                    </li>
                    <li>
                      <i className="flaticon-checkmark" />Easy to use with expert chat support
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a className="tj-transparent-btn" href="#">
                    {" "}
                    Get The Plan Now
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="price-shape pulse">
            <img src="/images/shape/sec-shape2.svg" alt="Shape" />
          </div>
        </div>
        <div className="price-overly">
          <img src="/images/shape/overly-5.svg" alt="Shape" />
        </div>
        <div className="price-shape1">
          <img src="/images/shape/sec-shape1.svg" alt="Shape" />
        </div>
        <div className="price-shape2">
          <img src="/images/shape/sec-shape7.svg" alt="Shape" />
        </div>
      </section>
    </>
  );
}

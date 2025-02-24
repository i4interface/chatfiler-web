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
                  File your tax at your convenience even though you don't have
                  any expertise in it, because we got you covered. Our expert
                  team will review your file and provide you with expert
                  knowledge, suggestions and tips to save your taxes.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="tj-price-item">
                <div className="price-top-header">
                  <div className="price-content">
                    <h6 className="title">
                      {/* Basic Plan */}
                      Self filing
                    </h6>
                    <div className="price">
                      {/* Pay What You Want{" "} */}
                       $9.99
                      <span className="month">
                        {/* even $0 */}
                        {/* $9.99 */}
                      </span>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-earning" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    {/* <li>
                      <i className="flaticon-checkmark" /> Upto 1 return per
                      plan
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Covers employment,
                      unemployment, & pension Income.
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> AI powered Slip
                      Scanning
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Video Tutorials
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Amend & Refile
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Save Data from
                      Previous Years
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />
                      Tuition Fees, Medical Receipts, Donation Slips, Rent Paid
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />
                      Unlock more features by upgrading to Chatfiler Plus
                    </li> */}

                    <li>
                      <i className="flaticon-checkmark" />
                      Process- You complete and file your return entirely
                      yourself.
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a
                    className="tj-transparent-btn"
                    href="https://app.chatfiler.ca/2023"
                  >
                    {" "}
                    Get Self filing
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="tj-price-item price-active">
                <div className="price-top-header">
                  <div className="price-content">
                    <h6 className="title">
                      {/* Plus Plan */}
                      Assisted self filing
                    </h6>
                    <div className="price">
                      $29.99{" "}
                      <span className="month">
                        {/* /2 returns (excl. tax) */}
                      </span>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-gold-ingots" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    {/* <li>
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
                    </li> */}

                    <li>
                      <i className="flaticon-checkmark" />
                      Chat Support
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />
                      File Review by Tax Professional
                    </li>
                    <li>
                      <i className="flaticon-checkmark" />
                      Process - You Complete your return with chat support and a
                      final review from a tax professional.
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a
                    className="tj-transparent-btn"
                    href="https://app.chatfiler.ca/2023"
                  >
                    {" "}
                    Get Assisted self filing
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="tj-price-item">
                <div className="absolute inset-0 left-auto right-0 lg:-right-7 -top-3">
                  <a
                    className="rounded-lg py-2 px-3 text-xs font-semibold bg-black text-white hover:text-black hover:bg-white mt-6 transition-all duration-500"
                    aria-label="Get started with the Starter plan"
                    href="https://app.chatfiler.ca/2023"
                  >
                    Best choice
                  </a>
                </div>
                <div className="price-top-header">
                  <div className="price-content">
                    <h6 className="title">
                      {/* Premium Plans */}
                      Professional filing
                    </h6>
                    <div className="price flex items-center  ">
                      {/* $49.99 - $129 <span className="month"> (excl. Tax)</span> */}
                      <div>$34.99</div>
                      <div className="text-white bg-[#ee1c25] text-base w-fit p-1 rounded-lg ml-4">
                        for students - $19.99
                      </div>
                    </div>
                  </div>
                  {/* <div className="price-icon">
                    <i className="flaticon-management" />
                  </div> */}
                </div>
                <div className="price-list">
                  <ul className="list-gap">
                    {/* <li>
                      <i className="flaticon-checkmark" /> Dedicated guide
                      session
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Chat Support for Tax
                      & Technical Issues.
                    </li>
                    <li>
                      <i className="flaticon-checkmark" /> Customized Tax
                      Savings Tips for your scenario.
                    </li>

                    <li>and many more...</li> */}

                    <li>
                      <i className="flaticon-checkmark" /> Chat Support
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> File Review by Tax
                      Professional
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> Personalized Tax
                      Savings Tips
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> Proactive File
                      Verification & Consultation
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> Unlimited T4s
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> Audit Assistance
                    </li>

                    <li>
                      <i className="flaticon-checkmark" /> Process - You provide
                      your information and tax slips; a professional prepares
                      and files your return.
                    </li>
                  </ul>
                </div>
                <div className="tj-price-button text-center">
                  <a className="tj-transparent-btn" href="/pricing">
                    {" "}
                    Explore Professional filing
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

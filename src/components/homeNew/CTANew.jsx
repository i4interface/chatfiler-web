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

export default function CTANew() {
  return (
    <>
 <section className="tj-cta-section-two shake-y">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="cta-content-two">
          <div className="cta-text">
            <h2 className="title">Chat with us and file your taxes now!</h2>
            <div className="active-button">
              <ul className="list-gap">
                <li className="list-1"><i className="flaticon-hand" /> Netfile your return directly to CRA</li>
                <li className="list-3"><i className="flaticon-hand" /> Import tax slips from CRA</li>
                <li className="list-2"><i className="flaticon-support" /> 24/7 chat support</li>
                
              </ul>
            </div>
            <p className="desc">
            Chat filer is easy to use, fast & reliable tax software. Take your own device, select a plan and start filing your tax, We will assist you!!
            </p>
            <br />

          </div>
          <div className="tj-choose-us-button">
              <a className="tj-primary-black-btn" href="https://app.chatfiler.ca/2023"> Get Started</a>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cta-overly">
    <img src="/images/shape/overly-14.svg" alt="Image" />
  </div>
  <div className="tj-star-group">
    <img className="icon-1" src="/images/icon/star-5.png" alt="Icon" />
    <img className="icon-2" src="/images/icon/star-6.png" alt="Icon" />
    <img className="icon-3" src="/images/icon/star-7.png" alt="Icon" />
    <img className="icon-4" src="/images/icon/star-8.png" alt="Icon" />
  </div>
</section>

    </>
  )
}

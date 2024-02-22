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

export default function CTASection() {
  return (
    <>
<section className="tj-cta-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="tj-cta-content-one">
          <div className="tj-sec-heading">
            <h2 className="title">Starthing with ChatFiler is easy, fast.</h2>
            <p className="desc">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters,
            </p>
            <div className="tj-cta-button">
              <a className="tj-white-btn" href="/login"> Get started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="cta-group-image text-end">
          <div className="group-part-1">
            <div className="image-1 pulse">
              <img src="/images/cta/cta-2.png" alt="Image" />
            </div>
            <div className="image-2 pulse">
              <img src="/images/cta/cta-3.png" alt="Image" />
            </div>
          </div>
          <div className="group-part-2">
            <div className="active-text">
              <i className="fa-light fa-check" /> Free for 15 days, no credit card requied
            </div>
            <img className="image-3 pulse" src="/images/cta/cta-1.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="cta-shape">
    <img src="/images/shape/sec-shape3.svg" alt="Shape" />
  </div>
  <div className="cta-shape2 pulse">
    <img src="/images/shape/sec-shape4.svg" alt="Shape" />
  </div>
</section>

    </>
  )
}

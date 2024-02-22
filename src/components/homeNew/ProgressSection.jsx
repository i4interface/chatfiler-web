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

export default function ProgressSection() {
  return (
    <>
<section className="tj-progress-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="progress-content-one">
          <div className="tj-sec-heading">
            <h2 className="title">Simple Steps to gain maximum refunds</h2>
            {/* <p className="desc">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p> */}
                        <div className="choose-list">
              <ul className="list-gap">
                <li><i className="flaticon-checkmark" />Real-Time Guidance</li>
                <li>
                  <i className="flaticon-checkmark" />All device friendly
                </li>
                <li>
                  <i className="flaticon-checkmark" />Real-time Support
                </li>
                <li>
                  <i className="flaticon-checkmark" />24/7 chat support
                </li>
                <li>
                  <i className="flaticon-checkmark" />Save most of your Accountant fees.
                </li>

 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="progress-group-image d-flex flex-wrap align-items-start flex-column">
          <img className="group-1 shake-y" src="/images/progress/progress-1.png" alt="Image" />
          {/* <img className="group-2 pulse" src="/images/progress/progress-2.png" alt="Image" /> */}
          {/* <img className="group-3 pulse" src="/images/progress/progress-3.png" alt="Image" /> */}
        </div>
      </div>
    </div>
  </div>
  <div className="progress-shape">
    <img src="/images/shape/sec-shape.svg" alt="Shape" />
  </div>
  <div className="tj-circle-box3">
    <span className="circle-1" />
    <span className="circle-2" />
    <span className="circle-3" />
    <span className="circle-4" />
  </div>
</section>

    </>
  )
}

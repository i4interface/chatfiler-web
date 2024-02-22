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

export default function AboutSection() {
  return (
    <>
<section className="tj-choose-us-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="choose-group-image">
          <img className="image-1 shake-y" src="/images/choose/choose.png" alt="Image" />
          {/* <img className="image-2 pulse" src="/images/choose/choose-1.png" alt="Image" /> */}
          {/* <img className="image-3 pulse" src="/images/choose/choose-2.png" alt="Image" /> */}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="tj-choose-content-one">
          <div className="tj-sec-heading-two">
            <span className="sub-title"> Why Choose Us</span>
            <h2 className="title">Simplify your NetFiling Experience</h2>
            {/* <p className="desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            </p> */}
            <div className="choose-list">
              <ul className="list-gap">
                <li><i className="flaticon-checkmark" /> Simplicity at its Core</li>
                <br />
                <li>
                  <i className="flaticon-checkmark" /> Accessible Anytime, Anywhere
                </li>
                <br />
                <li>
                  <i className="flaticon-checkmark" />Real-time Support
                </li>
                <br />
                <li>
                  <i className="flaticon-checkmark" />Security First
                </li>
                <br />
                <li>
                  <i className="flaticon-checkmark" />Automated Guidance
                </li>
                <br />
                <li>
                  <i className="flaticon-checkmark" />Time-Efficient
                </li>
                <br />
                <li>
                  <i className="flaticon-checkmark" />Year-Round Updates
                </li>

 
              </ul>
            </div>
            <div className="tj-choose-us-button">
              <a className="tj-black-btn" href="/login"> GET STARTED</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="choose-overly">
    <img src="/images/shape/overly-9.svg" alt="Shape" />
  </div>
  <div className="tj-star-group">
    <img className="icon-1" src="/images/icon/star-5.png" alt="Icon" />
    <img className="icon-2" src="/images/icon/star-6.png" alt="Icon" />
    <img className="icon-3" src="/images/icon/star-7.png" alt="Icon" />
    <img className="icon-4" src="/images/icon/star-8.png" alt="Icon" />
  </div>
  <div className="tj-star-group tj-star-group-1">
    <img className="icon-1" src="/images/icon/star-5.png" alt="Icon" />
    <img className="icon-2" src="/images/icon/star-6.png" alt="Icon" />
    <img className="icon-3" src="/images/icon/star-7.png" alt="Icon" />
    <img className="icon-4" src="/images/icon/star-8.png" alt="Icon" />
  </div>
  <div className="tj-star-group tj-star-group-2">
    <img className="icon-1" src="/images/icon/star-5.png" alt="Icon" />
    <img className="icon-2" src="/images/icon/star-6.png" alt="Icon" />
    <img className="icon-3" src="/images/icon/star-7.png" alt="Icon" />
    <img className="icon-4" src="/images/icon/star-8.png" alt="Icon" />
  </div>
</section>

    </>
  )
}

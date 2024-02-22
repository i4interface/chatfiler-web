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


export default function HomeContact() {
  return (
    <>
 <section className="tj-contact-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="tj-contact-content-one">
          <div className="tj-sec-heading">
            <span className="sub-title"> Contact us</span>
            <h2 className="title">Have cool project Get in touch!</h2>
            <p className="desc">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters,
            </p>
          </div>
          <div className="image-box hover-shape-border">
            <img className="img-1" src="/images/progress/contact-image.png" alt="Image" />
            <div className="testimonial-item-shape">
              <span className="border-shadow shadow-1" />
              <span className="border-shadow shadow-2" />
            </div>
            <div className="box-shape pulse">
              <img src="/images/shape/sec-shape5.svg" alt="Shape" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="tj-contact-box">
          <div className="form-input">
            <i className="flaticon-user" />
            <input className="input-fill" type="text" id="name" name="name" placeholder="Name" required />
          </div>
          <div className="form-input">
            <i className="flaticon-telephone" />
            <input className="input-fill" type="tel" id="phone" name="phone" placeholder="Phone" required />
          </div>
          <div className="form-input">
            <i className="flaticon-mail" />
            <input className="input-fill" type="email" id="emailOne" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-input">
            <i className="flaticon-objective" />
            <input className="input-fill" type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-input">
            <i className="flaticon-assessment" />
            <input className="input-fill" type="text" id="note" name="note" placeholder="How can we help you? Feel free to get touch!" required />
          </div>
          <div className="tj-contact-button">
            <button className="tj-primary-btn contact-btn" type="submit" value="submit">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-bg-shape">
    <img src="/images/shape/sec-shape6.svg" alt="Shape" />
  </div>
  <div className="sec-overly-1">
    <img src="/images/shape/overly-1.svg" alt="Shape" />
  </div>
  <div className="sec-overly-2">
    <img src="/images/shape/overly-2.svg" alt="Shape" />
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

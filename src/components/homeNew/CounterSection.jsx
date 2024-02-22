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

export default function CounterSection() {
  return (
    <>
<section className="tj-counter-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="counter-content-box">
          <div className="counter-item">
            <div className="tj-count"><span className="odometer" dataCount={100}>5</span>k</div>
            <span className="sub-title"> Files</span>
          </div>
          <div className="counter-item">
            <div className="tj-count"><span className="odometer" dataCount={66}>92</span>%</div>
            <span className="sub-title"> Completion</span>
          </div>
          <div className="counter-item">
            <div className="tj-count"><span className="odometer" dataCount={828}>8</span>k</div>
            <span className="sub-title"> Users</span>
          </div>
          <div className="counter-item">
            <div className="tj-count"><span className="odometer" dataCount={100}>100</span>%</div>
            <span className="sub-title"> Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

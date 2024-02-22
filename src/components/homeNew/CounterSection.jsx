import React, { useEffect, useRef } from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the effect only once when it comes into view
  });

  const odometerRefFiles = useRef(null);
  const odometerRefCompletion = useRef(null);
  const odometerRefUsers = useRef(null);
  const odometerRefSuccessRate = useRef(null);

  useEffect(() => {
    if (inView) {
      // Initialize Odometer when the section is in view
      const odometerFiles = new Odometer({
        el: odometerRefFiles.current,
        value: 0, // Initial value
        format: '(,ddd)', // Customize the format as needed
      });
      odometerFiles.update(odometerRefFiles.current.dataset.count); // Set the target value

      const odometerCompletion = new Odometer({
        el: odometerRefCompletion.current,
        value: 0, // Initial value
        format: '(,ddd)', // Customize the format as needed
      });
      odometerCompletion.update(odometerRefCompletion.current.dataset.count); // Set the target value

      const odometerUsers = new Odometer({
        el: odometerRefUsers.current,
        value: 0, // Initial value
        format: '(,ddd)', // Customize the format as needed
      });
      odometerUsers.update(odometerRefUsers.current.dataset.count); // Set the target value

      const odometerSuccessRate = new Odometer({
        el: odometerRefSuccessRate.current,
        value: 0, // Initial value
        format: '(,ddd)', // Customize the format as needed
      });
      odometerSuccessRate.update(odometerRefSuccessRate.current.dataset.count); // Set the target value
    }
  }, [inView]);

  return (
    <section className="tj-counter-section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-content-box">
              <div className="counter-item">
                <div className="tj-count">
                  <span className="odometer" ref={odometerRefFiles} data-count={5}>
                    0
                  </span>
                  k
                </div>
                <span className="sub-title"> Files</span>
              </div>
              <div className="counter-item">
                <div className="tj-count">
                  <span className="odometer" ref={odometerRefCompletion} data-count={92}>
                    0
                  </span>
                  %
                </div>
                <span className="sub-title"> Completion</span>
              </div>
              <div className="counter-item">
                <div className="tj-count">
                  <span className="odometer" ref={odometerRefUsers} data-count={8}>
                    0
                  </span>
                  k
                </div>
                <span className="sub-title"> Users</span>
              </div>
              <div className="counter-item">
                <div className="tj-count">
                  <span className="odometer" ref={odometerRefSuccessRate} data-count={100}>
                    0
                  </span>
                  %
                </div>
                <span className="sub-title"> Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

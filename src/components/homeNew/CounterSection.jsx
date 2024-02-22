import React, { useEffect } from 'react';
import Odometer from 'odometer'; // Import the odometer library
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
  useEffect(() => {
    // Initialize the odometer
    const odometerElements = document.querySelectorAll('.odometer');
    odometerElements.forEach((odometerElement) => {
      const odometerInstance = new Odometer({
        el: odometerElement,
        value: 0, // Initial value
        format: '(,ddd)', // You can customize the format
      });
      odometerInstance.update(odometerElement.dataset.count); // Set the target value
    });
  }, []);

  return (
    <>
      <section className="tj-counter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-content-box">
                <div className="counter-item">
                  <div className="tj-count"><span className="odometer" data-count={5}>0</span>k</div>
                  <span className="sub-title"> Files</span>
                </div>
                <div className="counter-item">
                  <div className="tj-count"><span className="odometer" data-count={92}>0</span>%</div>
                  <span className="sub-title"> Completion</span>
                </div>
                <div className="counter-item">
                  <div className="tj-count"><span className="odometer" data-count={8}>0</span>k</div>
                  <span className="sub-title"> Users</span>
                </div>
                <div className="counter-item">
                  <div className="tj-count"><span className="odometer" data-count={100}>0</span>%</div>
                  <span className="sub-title"> Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

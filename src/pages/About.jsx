import React from 'react'

const About = () => {
  return (
    <>
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 ps-lg-0">
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="./images/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-lg-6 about-text">
              <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
              <h1 className="mb-5">Quick Transport and Logistics Solutions</h1>
              <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="row g-4 mb-5">
                <div className="col-sm-6">
                  <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                  <h5>Global Coverage</h5>
                  <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                  <h5>On Time Delivery</h5>
                  <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                </div>
              </div>
              <a href="/" className="btn btn-primary py-3 px-5">Explore More</a>
            </div>
          </div>
        </div>
      </div>
{/* fact  */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
              <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
              <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div className="bg-primary p-4 mb-4">
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">1234</h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div className="bg-secondary p-4">
                    <i className="fa fa-ship fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">1234</h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-success p-4">
                    <i className="fa fa-star fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">1234</h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

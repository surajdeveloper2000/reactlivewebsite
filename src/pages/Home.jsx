import React from 'react'

const Home = () => {
  return (
    <>
      {/* hero section start */}
      
      {/* hero section end  */}

      {/* about section start  */}
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
      {/* about section start  */}

      {/* fact section start  */}
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
      {/* fact section end  */}

      {/* services section start  */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-1.jpg" alt='service-1' />
                </div>
                <h4 className="mb-3">Air Freight</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-2.jpg" alt='service-2' />
                </div>
                <h4 className="mb-3">Ocean Freight</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i class="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-3.jpg" alt='service-3' />
                </div>
                <h4 className="mb-3">Road Freight</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-4.jpg" alt='service-4' />
                </div>
                <h4 className="mb-3">Train Freight</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-5.jpg" alt='service-5' />
                </div>
                <h4 className="mb-3">Customs Clearance</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/service-6.jpg" alt='service-6' />
                </div>
                <h4 className="mb-3">Warehouse Solutions</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="/"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services section end  */}

      {/* Features Section start  */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text">
              <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
              <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
              <div className="d-flex mb-5">
                <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>Worldwide Service</h5>
                  <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                </div>
              </div>
              <div className="d-flex mb-5">
                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                <div class="ms-4">
                  <h5>On Time Delivery</h5>
                  <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                </div>
              </div>
              <div className="d-flex mb-0">
                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0">
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src="./images/feature.jpg" alt="feature-box" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section End  */}

      {/* pricing section start  */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
            <h1 className="mb-5">Perfect Pricing Plan</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Basic Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top">$</small>49.00<small
                      className="align-bottom">/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                  <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                  <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                  <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                  <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Standard Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top">$</small>99.00<small
                      className="align-bottom">/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                  <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                  <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                  <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                  <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Advanced Plan</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top">$</small>149.00<small
                      className="align-bottom">/ Month</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                  <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                  <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                  <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                  <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing section end  */}

      {/* quote section start  */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <h6 className="mb-3">Get A Quote</h6>
              <h1 className="mb-5">Request A Free Qoute!</h1>
              <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="bg-light text-center p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control border-0" placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control border-0" placeholder="Your Email" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control border-0" placeholder="Your Mobile" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0">
                        <option selected="">Select A Freight</option>
                        <option value="1">Freight 1</option>
                        <option value="2">Freight 2</option>
                        <option value="3">Freight 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* quote section end  */}

      {/* team start  */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Expert Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/team-1.jpg" alt="team-1" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/team-2.jpg" alt="team-2" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/team-3.jpg" alt="team-3" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item p-4">
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src="./images/team-4.jpg" alt="team-4" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <p>Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team end */}
    </>
  )
}

export default Home

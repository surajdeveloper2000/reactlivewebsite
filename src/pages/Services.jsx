import React from 'react'

const Services = () => {
  return (
    <>
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

    </>
  )
}

export default Services

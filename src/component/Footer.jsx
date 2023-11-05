import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4>Adders</h4>
                            <p className='mb-2'>
                                <i class="fa-solid fa-location-dot"></i>
                                123 street New York USA
                            </p>
                            <p className='mb-2'>
                                <i class="fa-solid fa-phone"></i>
                                6498169846238
                            </p>
                            <p className='mb-2'>
                                <i class="fa-solid fa-envelope"></i>
                                info@gmail.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook"></i></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div className="Services">
                                <h4>Services</h4>
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Air Freight</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Sea Freight</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Road Freight</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Logistic Solutions</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Industry solutions</a><br />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="quick-links">
                                <h4>Quick Links</h4>
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">About Us</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Contact Us</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Our Services</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Term And Codition</a><br />
                                <i className="fa-solid fa-angle-right"></i>
                                <a href="/">Support</a><br />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="newsletter">
                                <h4>Newsletter</h4>
                                <p>123 street New York USA</p>
                                <div className="position-relative mx-auto">
                                    <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="/">Logistica</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <a className="border-bottom" href="/">Suraj Singh</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

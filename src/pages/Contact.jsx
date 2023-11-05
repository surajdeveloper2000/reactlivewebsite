import React from 'react'


const Contact = () => {
  return (
    <>
      {/* contact end  */}
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container contact-page py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-md-6 contact-form">
              <h6 className="text-secondary text-uppercase">Get In Touch</h6>
              <h1 className="mb-4">Contact For Any Query</h1>
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
              <div className="bg-light p-4">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 pe-lg-0">
              <div className="position-relative h-100">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5767.947867902437!2d76.71388293769012!3d30.728454215505675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693717612018!5m2!1sen!2sin"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact end  */}

    </>
  )
}

export default Contact

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<>
  {/* START FOOTER 05 */}
  <footer
    className="section-custom-bg"
    data-bg_opacity=".9"
    data-bg_color="#edf0f2"
    data-bg_position="center bottom"
  >
    <section className="footer-widget-area pb-0">
      <section
        className="footer-widget-area pb-0"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="container-fluid  ">
          <div className="row">
            {/* ABOUT US */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <div className="sidebar-widget-wrapper">
                  <div
                    className="textwidget about-footer"
                    style={{ marginLeft: 50 }}
                  >
                    <div className="footer-about-text">
                      <a href="#">
                        <img
                          src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751286134/final_morling_global_1_agosra.png"
                          alt=""
                          className="footer-logo img-responsive"
                        />
                      </a>
                      <p className="clearfix text-dark-color">
                        Morling Global Pvt. Ltd. offers professional computer
                        and laptop repair services at our retail locations
                        throughout the world.
                      </p>
                    </div>
                    <div className="social-icons margin-top-24 text-light-color">
                      <a href="/">
                 
                <i class="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="/">
                     <i class="fa-brands fa-twitter"></i>
                      </a>
                   
                      <a href="/">
                 <i class="fa-brands fa-instagram"></i>
                      </a>
                      <a href="/">
                        <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* OPENING HOURS */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget text-dark-color">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3 className="text-dark-color">OPENING HOURS</h3>
                  </div>
                  <div className="textwidget">
                    <ul className="opening-shedule">
                      <li className="text-dark-color">
                        <span>Sat - Tues :</span>
                        <div className="float-right">6.00 AM - 10.00 PM</div>
                      </li>
                      <li className="text-dark-color">
                        <span>Wed - Thurs :</span>
                        <div className="float-right">8.00 AM - 6.00 PM</div>
                      </li>
                      <li className="text-dark-color">
                        <span>Friday :</span>
                        <div className="float-right">6.00 AM - 10.00 PM</div>
                      </li>
                      <li className="text-dark-color">
                        <span>Sunday :</span>
                        <div className="float-right">Closed</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTACT US */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget text-dark-color">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3 className="text-dark-color">CONTACT US</h3>
                  </div>
                  <div className="textwidget">
                    <i className="fa fa-location-arrow fa-contact" />
                    <p className="text-dark-color">
                      H. NO. 15/C, GALI NO. 9 GAGAN VIHAR, BADARPUR, NEW DELHI,
                      <br />
                        Delhi, India - 110044
                    </p>
                    <i className="fa fa-phone fa-contact" />
                    <p className="text-dark-color">
                      Office: 9891915598
                      <br />
                      Cell: 7004379646
                    </p>
                    <p className="text-dark-color">
                   <i class="fa-solid fa-envelope" style={{background: "#2867c3", color: "#fff", marginRight:"10px", marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                <a href="mailto:support@morlingglobal.in">support@morlingglobal.in</a>
                      <br />
                                   <i class="fa-solid fa-envelope" style={{background: "#2867c3", color: "#fff", marginRight:"10px", marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                      <a href="mailto:help@morlingglobal.in">help@morlingglobal.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* IMPORTANT LINKS */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget text-dark-color">
                <div className="sidebar-widget-wrapper">
                  <div className="footer-widget-header clearfix">
                    <h3 className="text-dark-color">Important Links</h3>
                  </div>
                  <div className="textwidget">
                    <Link href="/privary-policy" className="text-dark-color">
                    <i class="fa-solid fa-angles-right" style={{background: "#2867c3", color: "#fff", marginRight:"10px", marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                      Privacy Policy
                    </Link>
                    <br />
                    <Link
                      to="/terms-and-conditions"
                      className="text-dark-color"
                    >
                          <i class="fa-solid fa-angles-right" style={{background: "#2867c3", color: "#fff", marginRight:"10px",marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                      Terms and Conditions
                    </Link>
                    <br />
                    <Link to="/refund-policy" className="text-dark-color">
                        <i class="fa-solid fa-angles-right" style={{background: "#2867c3", color: "#fff", marginRight:"10px", marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                      Refund Policy
                    </Link>
                    <br />
                    <Link to="/faqs" className="text-dark-color">
                        <i class="fa-solid fa-angles-right" style={{background: "#2867c3", color: "#fff", marginRight:"10px", marginBottom:"10px", padding:"8px", borderRadius: "5px"}}></i>
                      FAQs
                    </Link>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container-fluid */}
      </section>
      {/* end .container  */}
    </section>
    {/*  end .footer-widget-area  */}
    {/*FOOTER CONTENT  */}
    <section className="footer-contents">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 clearfix text-center  border-top-1-dark">
            <p className="copyright-text text-dark-color pt-4">
              Copyright © 2025. All right reserved by Morling Global Pvt. Ltd.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
  {/* BACK TO TOP BUTTON  */}
  <a id="backTop" data-icon="">
    Back To Top
  </a>
</>

  )
}

export default Footer
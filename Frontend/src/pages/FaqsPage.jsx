import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const FaqsPage = () => {
  return (
    <>
    <Navbar/>
    <>
  {/*  PAGE HEADING */}
  <section className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h3>FAQ</h3>
          <p className="page-breadcrumb">
            <a href="#">Home</a>/ FAQ
          </p>
        </div>
      </div>
      {/* end .row  */}
    </div>
    {/* end .container  */}
  </section>
  {/* end .page-header  */}
  {/* SECTION FAQ */}
  <section className="section-content-block" id="faq-1">
    <div className="container">
      <div className="row section-heading-wrapper">
        <div className="col-md-12 col-sm-12 text-center">
          <h4 className="heading-alt-style text-capitalize text-dark-color">
            Frequently Asked Questions
          </h4>
          <span className="heading-separator heading-separator-horizontal" />
          <h2 className="subheading-alt-style">
            Morling Global Pvt Ltd – Common Questions &amp; Answers
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="faq-layout" id="accordion">
            {/* FAQ 1 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq1"
                  >
                    1. What services does Morling Global Pvt Ltd offer?
                  </a>
                </p>
              </div>
              <div id="faq1" className="panel-collapse collapse">
                <div className="panel-body">
                  We offer a wide range of services including:
                  <ul>
                    <li>IT infrastructure setup and support</li>
                    <li>
                      Hardware supply (computers, servers, networking equipment)
                    </li>
                    <li>Annual Maintenance Contracts (AMC) for IT systems</li>
                    <li>Corporate and technical training</li>
                    <li>Website development and design</li>
                    <li>
                      Custom software development for web, mobile, and desktop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq2"
                  >
                    2. How can I request a service or consultation?
                  </a>
                </p>
              </div>
              <div id="faq2" className="panel-collapse collapse">
                <div className="panel-body">
                  You can contact us via:
                  <ul>
                    <li>Phone: +91 9891915598</li>
                    <li>Email: info@morlingglobal.in</li>
                    <li>
                      Office Visit: A25, Sector 59, Noida, Uttar Pradesh, India
                    </li>
                    <li>
                      Or fill out the contact form on our website:{" "}
                      <a href="https://www.morlingglobal.in" target="_blank">
                        www.morlingglobal.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq3"
                  >
                    3. What is your cancellation and refund policy?
                  </a>
                </p>
              </div>
              <div id="faq3" className="panel-collapse collapse">
                <div className="panel-body">
                  Clients may request a cancellation or refund within 3 days of
                  service initiation or purchase. After that, refunds are not
                  guaranteed and will depend on the nature and stage of the
                  project. For more details, refer to our Cancel and Refund
                  Policy.
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq4"
                  >
                    4. Do you provide on-site support for IT services or AMC?
                  </a>
                </p>
              </div>
              <div id="faq4" className="panel-collapse collapse">
                <div className="panel-body">
                  Yes, we provide both on-site and remote support depending on
                  your service agreement and location. On-site support is
                  available primarily within Noida and surrounding regions.
                </div>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq5"
                  >
                    5. Can you customize websites or software as per my business
                    needs?
                  </a>
                </p>
              </div>
              <div id="faq5" className="panel-collapse collapse">
                <div className="panel-body">
                  Absolutely. We specialize in custom website development and
                  tailor-made software solutions based on your specific business
                  requirements, workflows, and industry standards.
                </div>
              </div>
            </div>
            {/* FAQ 6 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq6"
                  >
                    6. What is included in your AMC (Annual Maintenance
                    Contract)?
                  </a>
                </p>
              </div>
              <div id="faq6" className="panel-collapse collapse">
                <div className="panel-body">
                  Our AMC packages typically include:
                  <ul>
                    <li>Regular maintenance and health check-ups</li>
                    <li>Software updates and patches</li>
                    <li>Troubleshooting and technical support</li>
                    <li>Emergency response for critical issues</li>
                  </ul>
                  Custom AMC plans can be designed based on your IT
                  infrastructure size and support needs.
                </div>
              </div>
            </div>
            {/* FAQ 7 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq7"
                  >
                    7. What industries do you serve?
                  </a>
                </p>
              </div>
              <div id="faq7" className="panel-collapse collapse">
                <div className="panel-body">
                  We work with clients across various sectors including:
                  <ul>
                    <li>Education &amp; Training</li>
                    <li>Corporate &amp; Small Businesses</li>
                    <li>Retail &amp; E-commerce</li>
                    <li>Healthcare</li>
                    <li>Government &amp; NGOs</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FAQ 8 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq8"
                  >
                    8. Do you offer training programs online?
                  </a>
                </p>
              </div>
              <div id="faq8" className="panel-collapse collapse">
                <div className="panel-body">
                  Yes, we offer both in-person and online training for
                  individuals and organizations. Topics include software tools,
                  IT fundamentals, cybersecurity, and more.
                </div>
              </div>
            </div>
            {/* FAQ 9 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq9"
                  >
                    9. How long does it take to develop a website or software?
                  </a>
                </p>
              </div>
              <div id="faq9" className="panel-collapse collapse">
                <div className="panel-body">
                  Project timelines vary depending on complexity. Here’s a
                  general estimate:
                  <ul>
                    <li>Basic Website: 7–15 business days</li>
                    <li>Custom Website with CMS: 15–30 business days</li>
                    <li>Custom Software: 30–90+ business days</li>
                  </ul>
                  Exact duration will be discussed during the consultation
                  phase.
                </div>
              </div>
            </div>
            {/* FAQ 10 */}
            <div className="panel panel-default faq-box">
              <div className="panel-heading">
                <p className="panel-title">
                  <a
                    className="accordion-toggle collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#faq10"
                  >
                    10. Do you provide post-development support?
                  </a>
                </p>
              </div>
              <div id="faq10" className="panel-collapse collapse">
                <div className="panel-body">
                  Yes, we provide post-launch support and maintenance for
                  websites and software projects, including bug fixes, updates,
                  backups, and security patches.
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end .faq-layout */}
        </div>
      </div>{" "}
      {/* end .row */}
    </div>{" "}
    {/* end .container */}
  </section>
  {/* end .faq-layout */}
  {/*  SECTION CTA 04 */}
  <section className="cta-layout-02 section-primary-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <h2 className="text-light-color">
            Do you have any question? Feel free to contact.
          </h2>
          <p className="text-light-color">
            Bring your valuable laptop, pc, mobile, gaming device or smart
            phone. We will happy to serve our best to you.
          </p>
        </div>
        {/*  end .col-md-8  */}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <a
            className="btn btn-theme btn-square btn-theme-invert"
            href="contact.html"
          >
            CONTACT WITH US
          </a>
        </div>
        {/*  end .col-md-4  */}
      </div>
      {/*  end .row  */}
    </div>
  </section>
</>

    <Footer/>
    </>
  )
}

export default FaqsPage
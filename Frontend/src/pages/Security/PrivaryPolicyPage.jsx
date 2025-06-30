import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const PrivaryPolicyPage = () => {
  return (
  <>
  <Navbar/>
  <>
  {/* PAGE HEADING */}
  <section className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h3>Privacy Policy</h3>
          <p className="page-breadcrumb">
            <a href="index.html">Home</a> / Privacy Policy
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* PRIVACY POLICY CONTENT */}
  <section className="privacy-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="privacy-content">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="effective-date">Effective Date: June 27, 2025</p>
            <p className="privacy-text">
              At <span className="company-name">Morling Global Pvt Ltd</span>,
              accessible from www.morlingglobal.in, we value your privacy and
              are committed to protecting your personal information. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your data.
            </p>
            <h2 className="section-heading">1. Information We Collect</h2>
            <p className="privacy-text">
              We may collect the following types of information:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, etc., provided via forms or
                communication.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, pages visited, time and date of visit, etc.
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies to improve
                your experience on our website.
              </li>
            </ul>
            <h2 className="section-heading">2. How We Use Your Information</h2>
            <p className="privacy-text">We use the collected information to:</p>
            <ul className="privacy-list">
              <li>Respond to inquiries and provide support.</li>
              <li>Improve our website and services.</li>
              <li>
                Send updates, newsletters, or marketing materials (with your
                consent).
              </li>
              <li>Comply with legal obligations.</li>
            </ul>
            <h2 className="section-heading">3. Sharing Your Information</h2>
            <div className="highlight-box">
              <p className="privacy-text">
                <strong>We do not sell your personal data.</strong> We may share
                your information with:
              </p>
            </div>
            <ul className="privacy-list">
              <li>
                Trusted third-party service providers assisting in our
                operations.
              </li>
              <li>Law enforcement or regulators when legally required.</li>
            </ul>
            <h2 className="section-heading">4. Data Security</h2>
            <p className="privacy-text">
              We implement appropriate security measures to protect your
              information from unauthorized access, alteration, or disclosure.
            </p>
            <h2 className="section-heading">5. Your Rights</h2>
            <p className="privacy-text">You may:</p>
            <ul className="privacy-list">
              <li>
                Request access to or correction of your personal information.
              </li>
              <li>Withdraw consent for marketing communications.</li>
              <li>
                Request deletion of your data, subject to legal obligations.
              </li>
            </ul>
            <div className="highlight-box">
              <p className="privacy-text">
                <strong>
                  To exercise any of these rights, please contact us at
                  info@morlingglobal.in or call us at +91 9891915598.
                </strong>
              </p>
            </div>
            <h2 className="section-heading">6. External Links</h2>
            <p className="privacy-text">
              Our website may contain links to third-party websites. We are not
              responsible for their content or privacy practices.
            </p>
            <h2 className="section-heading">7. Changes to This Policy</h2>
            <p className="privacy-text">
              We may update this Privacy Policy occasionally. Changes will be
              posted on this page with an updated "Effective Date."
            </p>
            {/* Contact Information */}
            <div className="contact-info">
              <h3>
                <i className="fa fa-envelope" /> Contact Us
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-detail">
                    <i className="fa fa-building" />
                    <div>
                      <strong>Morling Global Pvt Ltd</strong>
                      <br />
                      A25, Sector 59, Noida, Uttar Pradesh, India
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-detail">
                    <i className="fa fa-phone" />
                    <div>
                      <strong>Phone:</strong> +91 9891915598
                    </div>
                  </div>
                  <div className="contact-detail">
                    <i className="fa fa-envelope" />
                    <div>
                      <strong>Email:</strong> info@morlingglobal.in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  <Footer/>
  </>
  )
}

export default PrivaryPolicyPage
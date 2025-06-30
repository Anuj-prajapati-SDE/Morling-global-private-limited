import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const RefundPolicyPage = () => {
  return (
    <>
  <Navbar/>

  <>
  {/* PAGE HEADING */}
  <section className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h3>Cancel &amp; Refund Policy</h3>
          <p className="page-breadcrumb">
            <a href="index.html">Home</a> / Cancel &amp; Refund Policy
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* REFUND POLICY CONTENT */}
  <section className="refund-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="refund-content">
            <h1 className="refund-title">Cancel and Refund Policy</h1>
            <p className="effective-date">Effective Date: June 27, 2025</p>
            <p className="refund-text">
              At <span className="company-name">Morling Global Pvt Ltd</span>,
              we strive to provide high-quality services and ensure customer
              satisfaction. However, if you are not satisfied with our services
              or wish to cancel a purchase, please review the following policy.
            </p>
            <div className="deadline-box">
              <h4>
                <i className="fa fa-clock-o" /> Important Deadline
              </h4>
              <span className="deadline-number">3</span>
              <p>
                Days from purchase or service initiation to request cancellation
              </p>
            </div>
            <h2 className="section-heading">1. Cancellation Policy</h2>
            <ul className="refund-list">
              <li>
                You may request a cancellation within <strong>3 days</strong>{" "}
                from the date of purchase or service initiation.
              </li>
              <li>
                Cancellation requests must be sent to{" "}
                <strong>info@morlingglobal.in</strong> with your order/service
                details.
              </li>
              <li>
                After the 3-day window, cancellations will not be eligible.
              </li>
            </ul>
            <div className="warning-box">
              <p className="refund-text">
                <i className="fa fa-exclamation-triangle warning-icon" />
                <strong>Important:</strong> Make sure to submit your
                cancellation request within the 3-day period to be eligible for
                consideration.
              </p>
            </div>
            <h2 className="section-heading">2. Refund Policy</h2>
            <ul className="refund-list">
              <li>
                If your cancellation request is approved within the 3-day
                period, a full or partial refund (as applicable) will be
                processed.
              </li>
              <li>
                Refunds will be issued to the original payment method within{" "}
                <strong>7–10 business days</strong> after approval.
              </li>
              <li>We reserve the right to refuse a refund if:</li>
            </ul>
            <div className="highlight-box">
              <h4 style={{ color: "#e74c3c", marginBottom: 15 }}>
                Refund Refusal Conditions:
              </h4>
              <ul className="sub-list">
                <li>Services have already been rendered or completed.</li>
                <li>The request is made after the 3-day period.</li>
                <li>Terms of service or agreement have been violated.</li>
              </ul>
            </div>
            <h2 className="section-heading">
              3. Non-Refundable Items or Services
            </h2>
            <p className="refund-text">
              The following items and services are generally non-refundable:
            </p>
            <ul className="refund-list">
              <li>
                Fees for fully delivered services, consultations, or third-party
                costs are non-refundable.
              </li>
              <li>
                Digital products or customized services once initiated may also
                be non-refundable, unless otherwise stated.
              </li>
            </ul>
            <h2 className="section-heading">
              4. How to Apply for a Cancellation or Refund
            </h2>
            <div className="process-box">
              <h4>
                <i className="fa fa-list-check" /> Required Information for
                Request
              </h4>
              <p className="refund-text">
                To request a cancellation or refund, please contact us with the
                following details:
              </p>
              <ul className="refund-list">
                <li>Full Name</li>
                <li>Order/Invoice Number</li>
                <li>Date of Purchase</li>
                <li>Reason for Cancellation or Refund</li>
              </ul>
            </div>
            <div className="highlight-box">
              <h4 style={{ color: "#2c3e50", marginBottom: 15 }}>
                <i className="fa fa-envelope" /> Contact Information for
                Requests
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <p className="refund-text">
                    <strong>Email:</strong> info@morlingglobal.in
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="refund-text">
                    <strong>Phone:</strong> +91 9891915598
                  </p>
                </div>
              </div>
            </div>
            <div className="warning-box">
              <p className="refund-text">
                <i className="fa fa-info-circle warning-icon" />
                <strong>Processing Note:</strong> All refund requests will be
                reviewed individually. Processing time may vary depending on the
                complexity of your request and payment method used.
              </p>
            </div>
            {/* Contact Information */}
            <div className="contact-info">
              <h3>
                <i className="fa fa-headphones" /> Customer Support
              </h3>
              <p style={{ marginBottom: 20 }}>
                For any questions regarding cancellations or refunds, our
                customer support team is here to help.
              </p>
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

export default RefundPolicyPage

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const ComprehensiveHardwareAndSoftwareAmcServices = () => {
  return (
    <>
    <Navbar />
    <>
  <section
    className="section-content-block section-custom-bg parallax"
    id="services"
    data-bg_img="https://res.cloudinary.com/dobfsabnz/image/upload/v1751328503/service_custom_bg_wmuekj.jpg"
    data-bg_color="#FFFFFF"
    data-bg_opacity="0.5"
    data-stellar-background-ratio="0.9"
    style={{
      backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://res.cloudinary.com/dobfsabnz/image/upload/v1751328503/service_custom_bg_wmuekj.jpg")',
      backgroundOrigin: "initial, initial",
      backgroundClip: "initial, initial",
      backgroundColor: "initial",
      backgroundPosition: "0% 0%, 0% 0%",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "inherit",
      backgroundSize: "cover",
      overflow: "hidden"
    }}
  >
    <div className="container">
      <div className="row section-heading-wrapper">
        <div className="col-md-12 col-sm-12 text-center">
          <h4 className="heading-alt-style text-capitalize text-dark-color">
            Comprehensive Hardware and Software AMC Services
          </h4>
          <span className="heading-separator heading-separator-horizontal" />
          <h2 className="subheading-alt-style pl-lg-5 pl-0 pr-lg-5 pr-0">
            At Morling Global Pvt. Ltd., we offer Annual Maintenance Contracts
            (AMC) for both hardware and software, ensuring your systems remain
            efficient, secure, and reliable throughout the year. Our AMC
            solutions are tailored to meet the unique needs of businesses,
            providing peace of mind with proactive maintenance and prompt
            support.
          </h2>
        </div>
        {/* end .col-sm-12  */}
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327739/laptop-repair_hvzsqj.avif" alt="service" />
              <span className="fa fa-wrench" />
            </figure>
            <div className="service-content">
              <h3>Laptop Repair</h3>
              <p>
                We offer comprehensive laptop repair services, including
                processor, motherboard, RAM, HDD upgrades, and keyboard repairs.
                Our skilled technicians deliver fast, reliable solutions to
                restore your laptop’s performance and ensure seamless operation.
              </p>
              <a
                href="viewdetails.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327768/proceser_kekddb.jpg" alt="service" />
              <span className="fa fa-compress" />
            </figure>
            <div className="service-content">
              <h3>Processor Repair</h3>
              <p>
                We specialize in processor repairs, addressing overheating,
                performance issues, and system crashes. Our expert technicians
                ensure fast, reliable repairs to restore your laptop's
                functionality and efficiency
              </p>
              <a
                href="processor.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327808/moterboard_srb9yb.jpg" alt="service" />
              <span className="fa fa-address-card" />
            </figure>
            <div className="service-content">
              <h3>Motherboard Fix</h3>
              <p>
                Our motherboard repair services fix power failures, damaged
                circuits, and other common issues. We provide thorough
                diagnosƟcs and precise repairs to restore your laptop’s
                performance and reliability
              </p>
              <a
                href="motherboard.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327839/ram_asjlsn.jpg" alt="service" />
              <span className="fa fa-th-list" />
            </figure>
            <div className="service-content">
              <h3>RAM Installation</h3>
              <p>
                Upgrade your laptop’s performance with professional RAM
                installation. We help boost your system’s speed and multitasking
                ability, ensuring smooth and efficient performance for all your
                computing needs.
              </p>
              <a
                href="raminstallation.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327882/hddupgrade_n5rh31.jpg" alt="service" />
              <span className="fa fa-hard-of-hearing" />
            </figure>
            <div className="service-content">
              <h3>HDD Upgrade</h3>
              <p>
                Our HDD upgrade service enhances storage and performance. We
                replace old hard drives with faster, higher-capacity ones,
                giving you more space and improving your laptop’s overall speed
                and responsiveness.
              </p>
              <a
                href="hdd.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327911/keybordrepair_segsed.jpg" alt="service" />
              <span className="fa fa-key" />
            </figure>
            <div className="service-content">
              <h3>Keyboard Repair</h3>
              <p>
                If your keyboard malfuncƟons, our expert repair service quickly
                resolves issues like unresponsive or broken keys. We replace
                faulty keyboards to restore smooth, efficient typing
                functionality for your laptop.
              </p>
              <a
                href="keyboard.html"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
      </div>
      {/*  end .row  */}
    </div>
    {/*  end .container  */}
  </section>
  <>
  <section
    className="section-content-block section-custom-bg"
    data-bg_img="https://res.cloudinary.com/dobfsabnz/image/upload/v1751326950/process_bg_1_bt0zq9.jpg"
    data-bg_color="#2bb6d3"
    data-bg_opacity={0}
    style={{
      background:
        'linear-gradient( rgba(43,182,211,0),  rgba(43,182,211,0) ), url("https://res.cloudinary.com/dobfsabnz/image/upload/v1751326950/process_bg_1_bt0zq9.jpg")',
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "inherit",
      backgroundSize: "cover",
      overflow: "hidden"
    }}
  >
    <div className="container">
      <div className="row section-heading-wrapper section-heading-wrapper-alt">
        <div className="col-md-8 offset-md-2 col-sm-12 col-sm-offset-0 text-center">
          <h4>How It Works?</h4>
          <span className="heading-separator" />
          <h2>THREE STEPS SOLUTION</h2>
        </div>
        {/* end .col-sm-12  */}
      </div>
      <div
        className="row wow fadeInUp text-center animated"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div
            className="process-step-1 block-primary-bg wow fadeIn theme-custom-box-animation theme-custom-box-shadow animated"
            data-wow-delay="0.20s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeIn"
            }}
          >
            <i className="fa fa-laptop text-light-color" />
            <h3 className="text-light-color">Bring The Device</h3>
            <div className="process-info text-light-color">
              Experienced service department ready to handle all of your auto
              service needs.
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div
            className="process-step-1 block-white-bg wow fadeIn theme-custom-box-animation theme-custom-box-shadow animated"
            data-wow-delay="0.40s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeIn"
            }}
          >
            <i className="fa fa-wrench text-primary-color" />
            <h3>Diagnose The Problem</h3>
            <div className="process-info">
              Experienced service department ready to handle all of your auto
              service needs.
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div
            className="process-step-1 block-black-bg wow fadeIn theme-custom-box-animation theme-custom-box-shadow animated"
            data-wow-delay="0.60s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeIn"
            }}
          >
            <i className="fa fa-handshake-o text-primary-color" />
            <h3 className="text-light-color">Return Repaired Device</h3>
            <div className="process-info text-light-color">
              Experienced service department ready to handle all of your auto
              service needs.
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
      </div>
      {/*  end .row */}
      <div
        className="row counter-inline-container wow zoomIn animated"
        style={{ visibility: "visible", animationName: "zoomIn" }}
      >
        <div className="col-lg-3 col-6">
          <div className="counter-block-2 counter-border">
            <i className="icon fa fa-users" />
            <div className="count-info">
              <span className="counter">12</span>
              <span className="counter-postfix">+</span>
              <p className="text-capitalize">Years Service</p>
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12 */}
        <div className="col-lg-3 col-6">
          <div className="counter-block-2 counter-border">
            <i className="icon fa fa-smile-o" />
            <div className="count-info">
              <span className="counter">90</span>
              <span className="counter-postfix">+</span>
              <p className="text-capitalize">Happy Buyers</p>
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12 */}
        <div className="col-lg-3 col-6">
          <div className="counter-block-2 counter-border">
            <i className="icon fa fa-forumbee" />
            <div className="count-info">
              <span className="counter">99</span>
              <span className="counter-postfix">%</span>
              <p className="text-capitalize">Devices Fixed</p>
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12 */}
        <div className="col-lg-3 col-6">
          <div className="counter-block-2 counter-border">
            <i className="icon fa fa-smile-o" />
            <div className="count-info">
              <span className="counter">1275</span>
              <p className="text-capitalize">Happy Customers</p>
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12 */}
      </div>
      {/*  end .row  */}
    </div>
    {/*  end .container  */}
  </section>
  <section className="cta-layout-02 section-primary-bg clearfix">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <h2 className="text-light-color">
            Do you need assistance to repair your computer?
          </h2>
          <p>
            We will happy to serve our best to you. Just bring your valuable
            desktop, laptop, Macbook, tab or gaming computer. Our experts will
            be happy to assist you.
          </p>
        </div>
        {/*  end .col-md-8  */}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <a
            className="btn btn-theme btn-semi-rounded btn-theme-invert wow bounce animated"
            href="contact.html"
            style={{ visibility: "visible", animationName: "bounce" }}
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

</>

    <Footer />
    </>
  )
}

export default ComprehensiveHardwareAndSoftwareAmcServices
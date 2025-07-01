import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const RecruitTrainAndDeploysServices = () => {
  return (
    <>
    <Navbar/>
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
      backgroundPosition: "0% 137.471px, 0%",
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
            Our Recruit and Deploy Services
          </h4>
          <span className="heading-separator heading-separator-horizontal" />
          <h2 className="subheading-alt-style pl-lg-5 pl-0 pr-lg-5 pr-0">
            At Morling Global Pvt. Ltd., we provide end to end Recruit, Train
            and Deploy solutions to help business build a skilled and productive
            workforce. Our Comprehensive approach ensures you get candidates who
            are not only qualified but also trained to meet your specific
            business requirements, ready to contribute from day one.
          </h2>
          <h3>Our RTD Services</h3>
        </div>
        {/* end .col-sm-12  */}
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751326136/recruitment_pmxvx7.avif" alt="service" />
              <span className="fa fa-wrench" />
            </figure>
            <div className="service-content">
              <h3>Recruit</h3>
              <p style={{ textAlign: "start" }}>
                We source and screen top talent from a vast pool of candidates
                using advanced recruitment strategies. Our focus is on
                identifying individuals with the right skills, attitude, and
                potential to fit seamlessly into your organization.
              </p>
              {/*<a href="viewdetails.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
              {/*  Details</a>*/}
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327344/training_deapiy.jpg" alt="service" />
              <span className="fa fa-compress" />
            </figure>
            <div className="service-content">
              <h3>Train</h3>
              <p style={{ textAlign: "start" }}>
                Candidates undergo specialized training programs tailored to
                your organization’s needs. Training covers both technical skills
                (e.g., software development, networking, hardware management)
                and soft skills (e.g., communication, teamwork). Focus on
                industry standards, tools, and practices to ensure candidates
                are job-ready, Deploy
              </p>
              {/*<a href="processor.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
              {/*  Details</a>*/}
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure>
              <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751326174/deploy_imwm2s.jpg" alt="service" />
              <span className="fa fa-address-card" />
            </figure>
            <div className="service-content">
              <h3>Deploy</h3>
              <p style={{ textAlign: "start" }}>
                After successful training, candidates are deployed directly to
                your workplace, fully prepared to handle their roles. We ensure
                a smooth onboarding process and offer ongoing support to both
                employees and employers.
              </p>
              {/*<a href="motherboard.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
              {/*  Details</a>*/}
            </div>
          </article>
        </div>
        {/*  end .col-lg-4 col-sm-12  */}
        {/*  end .col-lg-4 col-sm-12  */}
        {/*  end .col-lg-4 col-sm-12  */}
        {/*  end .col-lg-4 col-sm-12  */}
      </div>
      {/*  end .row  */}
    </div>
    {/*  end .container  */}
  </section>
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
          <h4>Benifits Of Our Recruit , Train and Deploy Model</h4>
          <span className="heading-separator" />
          {/* <h2>THREE STEPS SOLUTION</h2> */}
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
            <h3 className="text-light-color">Customized workforce Solutions</h3>
            <div className="process-info text-light-color">
              Candidates trained to meet your specific project or organizational
              requirements.
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
            <h3>Reduced Time to Hire</h3>
            <div className="process-info">
              Pre-trained and job-ready candidates help save time and resources.
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
            <h3 className="text-light-color">High Retention Rates</h3>
            <div className="process-info text-light-color">
              Focused training ensures candidates are well-prepared and
              committed to their roles.
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
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
            <h3 className="text-light-color">Cost Effective Solutions</h3>
            <div className="process-info text-light-color">
              Eliminates the need for extensive in-house training programs.
            </div>
          </div>
        </div>
        {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
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
            <h3 className="text-light-color">Scalability</h3>
            <div className="process-info text-light-color">
              Easily scale your workforce based on project demands or business
              growth.
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
            Do you need assistance to Software Development Services?
          </h2>
          <p>
            At Morling Global, we combine creativity, technology, and business
            acumen to deliever software that empowers your business. Whether you
            need a simple application or a complex enterprise solution, we are
            dedicated to turning your vision into reality.
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

    <Footer></Footer>
    </>
  )
}

export default RecruitTrainAndDeploysServices
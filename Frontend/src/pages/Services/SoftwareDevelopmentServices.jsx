import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const SoftwareDevelopmentServices = () => {
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
          Our Software Development Services Include
        </h4>
        <span className="heading-separator heading-separator-horizontal" />
        <h2 className="subheading-alt-style pl-lg-5 pl-0 pr-lg-5 pr-0">
          At Morling Global Pvt. Ltd., we specialize in delivering innovative
          and scalable software solutions that drive business success. With a
          deep understanding of modern technologies and industry trends, our
          team of expert developers is committed to crafting custom software
          tailored to meet your unique business needs.{" "}
        </h2>
      </div>
      {/* end .col-sm-12  */}
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-12">
        <article className="service-block-1 text-center">
          <figure>
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751329126/custom_okx6it.avif" alt="service" />
            <span className="fa fa-wrench" />
          </figure>
          <div className="service-content">
            <h3>Custom Software Development</h3>
            <p>
              Tailored software solutions designed to streamline your
              operations, enhance efficiency, and meet your specific
              requirements.{" "}
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
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751326096/webapp_lpqhzt.jpg" alt="service" />
            <span className="fa fa-compress" />
          </figure>
          <div className="service-content">
            <h3>Web Application Development:</h3>
            <p>
              Responsive, secure, and feature-rich web applications to support
              your business goals and improve user engagement.{" "}
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
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751329199/mobileapp_kv6oj2.avif" alt="service" />
            <span className="fa fa-address-card" />
          </figure>
          <div className="service-content">
            <h3>Mobile App Development</h3>
            <p>
              Cutting-edge mobile applications for Android and iOS platforms,
              ensuring seamless user experiences and robust functionality.{" "}
            </p>
            {/*<a href="motherboard.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
            {/*  Details</a>*/}
          </div>
        </article>
      </div>
      {/*  end .col-lg-4 col-sm-12  */}
      <div className="col-lg-4 col-sm-6 col-12">
        <article className="service-block-1 text-center">
          <figure>
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751329271/interprise_mfefni.jpg" alt="service" />
            <span className="fa fa-th-list" />
          </figure>
          <div className="service-content">
            <h3>Enterprise Software Solutions</h3>
            <p>
              Scalable and efficient software designed to optimize enterprise
              processes and improve organizational performance.{" "}
            </p>
            {/*<a href="raminstallation.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
            {/*  Details</a>*/}
          </div>
        </article>
      </div>
      {/*  end .col-lg-4 col-sm-12  */}
      <div className="col-lg-4 col-sm-6 col-12">
        <article className="service-block-1 text-center">
          <figure>
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751329299/software-support_ejffgo.jpg" alt="service" />
            <span className="fa fa-hard-of-hearing" />
          </figure>
          <div className="service-content">
            <h3>Software Maintenance and Support</h3>
            <p>
              Comprehensive support to keep your software running smoothly,
              including updates, performance tuning, and troubleshooting.{" "}
            </p>
            {/*<a href="hdd.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
            {/*  Details</a>*/}
          </div>
        </article>
      </div>
      {/*  end .col-lg-4 col-sm-12  */}
      <div className="col-lg-4 col-sm-6 col-12">
        <article className="service-block-1 text-center">
          <figure>
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751329332/integration_lxbk40.jpg" alt="service" />
            <span className="fa fa-key" />
          </figure>
          <div className="service-content">
            <h3>Integration Services</h3>
            <p>
              Smooth integration of new software with your existing systems,
              ensuring uninterrupted workflows and enhanced capabilities.{" "}
            </p>
            {/*<a href="keyboard.html" class="btn btn-theme btn-small btn-inline btn-semi-rounded">View*/}
            {/*  Details</a>*/}
          </div>
        </article>
      </div>
      {/*  end .col-lg-4 col-sm-12  */}
    </div>
    {/*  end .row  */}
  </div>
  {/*  end .container  */}
</section>

  
  {/*  SECTION CTA 04 */}
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
            className="btn btn-theme btn-semi-rounded btn-theme-invert wow bounce"
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

export default SoftwareDevelopmentServices
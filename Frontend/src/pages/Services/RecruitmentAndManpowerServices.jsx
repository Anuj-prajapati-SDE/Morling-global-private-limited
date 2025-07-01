import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const RecruitmentAndManpowerServices = () => {
  return (
    <>
    <Navbar />
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
          Our Recruitment and Manpower Services
        </h4>
        <span className="heading-separator heading-separator-horizontal" />
        <h2 className="subheading-alt-style pl-lg-5 pl-0 pr-lg-5 pr-0">
          At Morling Global Pvt. Ltd., we excel in providing comprehensive
          recruitment and manpower solutions to meet the evolving needs of
          businesses across various industries. Our dedicated team of
          professionals ensures that you have acess to the right talent at the
          right time enabling your business to thrive in a competative
          landscape.
        </h2>
        <h6 className="heading-alt-style text-capitalize text-dark-color">
          Our Recruitment and Manpower Services Include
        </h6>
      </div>
      {/* end .col-sm-12  */}
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-12">
        <article className="service-block-1 text-center">
          <figure>
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751328648/talent_jirush.jpg" alt="service" />
            <span className="fa fa-wrench" />
          </figure>
          <div className="service-content">
            <h3>Talent Acquisition</h3>
            <p>
              Efficient recruitment solutions to identify and onboard top-tier
              tailored to your specific requirements.
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
            <img style={{minWidth:"130%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751328723/staffing_hqn0zj.jpg" alt="service" />
            <span className="fa fa-compress" />
          </figure>
          <div className="service-content">
            <h3>Permanent Staffing</h3>
            <p>
              Providing long-term staffing solutions that align with your
              organizational culture and goals.
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
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751328683/staff_zlqtom.jpg" alt="service" />
            <span className="fa fa-address-card" />
          </figure>
          <div className="service-content">
            <h3>Temporary and Contract Staffing</h3>
            <p>
              Flexible workforce solutions to manage seasonal demands,special
              projects,or temporary workforce shortages
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
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751328757/placement_veief5.jpg" alt="service" />
            <span className="fa fa-th-list" />
          </figure>
          <div className="service-content">
            <h3>Executive Search and Placement</h3>
            <p>
              Identifying and recruiting experienced professionals and leaders
              who can drive your organization's success
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
            <img style={{minWidth:"75%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751326136/recruitment_pmxvx7.avif" alt="service" />
            <span className="fa fa-hard-of-hearing" />
          </figure>
          <div className="service-content">
            <h3>Industry-Specific Recruitment</h3>
            <p>
              Expertise in sourcing talent for diverse industries,including
              IT,healthcare, manufacturing,retail, and more.
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
            <img style={{minWidth:"100%"}}  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327311/trainingsupport_my0dax.jpg" alt="service" />
            <span className="fa fa-key" />
          </figure>
          <div className="service-content">
            <h3>Onboarding and Training Support</h3>
            <p>
              Ensuring a seamless transition for new hires with support for
              Onboarding and tailored training program.
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
<section className="cta-layout-02 section-primary-bg clearfix">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <h2 className="text-light-color">
          Do you need assistance to Recruitment and Manpower Services?
        </h2>
        <p>
          At Morling Global, we understand that human capital is the foundation
          of any successful organization Whether you are looking for permanent
          employees, temporary staff , or specialized talent ,our recruitment
          and manpower services are designed to help you build a
          dynamic,capable, and committed workforce.
        </p>
      </div>
      {/*  end .col-md-8  */}
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
        <a
          className="btn btn-theme btn-semi-rounded btn-theme-invert wow bounce"
          href="contact.html"
          style={{ visibility: "visible" }}
        >
          CONTACT WITH US
        </a>
      </div>
      {/*  end .col-md-4  */}
    </div>
    {/*  end .row  */}
  </div>
</section>

    <Footer />
    </>
  )
}

export default RecruitmentAndManpowerServices
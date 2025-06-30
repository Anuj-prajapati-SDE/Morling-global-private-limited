import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>
    
    <Navbar/>
    {/* ENHANCED HERO BANNER SECTION WITH DYNAMIC ELEMENTS */}
    <>
      <section className="hero-banner-section">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#heroCarousel" data-slide-to="1"></li>
            <li data-target="#heroCarousel" data-slide-to="2"></li>
          </ol> */}
          
          <div className="carousel-inner">
            {/* Slide 1 - Main Intro */}
            <div className="carousel-item active " style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("images/gallery_5.jpg")',
              backgroundSize: "100% 100%",
              backgroundPosition: 'center center',
              height: '98vh',
              backgroundAttachment: 'fixed'
            }}>
              <div className="container h-100 ">
                <div className="row h-100 align-items-start   mt-5">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="banner-content text-white animate__animated animate__fadeInUp animate__delay-0.5s">
                      <span className="badge badge-pill  mb-3 px-3 py-2" style={{background: "#2867c3", color: "#fff"}}>Trusted Since 2011</span>
                      <h1 className="hero-title mb-4">
                        <span className="d-block mb-2" style={{color:"#fff"}}>Leading Provider of</span>
                        <span className="text-gradient font-weight-bold">
                          Recruitment & IT Solutions
                        </span>
                      </h1>
                      <p className="lead mb-5">Delivering exceptional technology infrastructure and recruitment services to power your business growth and innovation.</p>
                      <div className="banner-buttons" >
                        <a href="#form" className="btn  btn-lg px-4 py-2 me-3 mb-3 mb-sm-0 btn-hover-effect" style={{background: "#2867c3", color: "#fff"}}>
                          <i className="fa fa-calendar-check-o me-2"></i> Book Appointment
                        </a>
                        <a href="#services" className="btn btn-outline-light btn-lg px-4 py-2 btn-hover-effect-light">
                          <i className="fa fa-info-circle me-2"></i> Explore Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Slide 2 - IT Solutions */}
            <div className="carousel-item" style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("images/img1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '98vh',
              backgroundAttachment: 'fixed'
            }}>
              <div className="container h-100">
                <div className="row h-100 align-items-start   mt-5">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="banner-content text-white animate__animated animate__zoomIn">
                      <span className="badge badge-pill mb-3 px-3 py-2"  style={{background: "#2867c3", color: "#fff"}}>Enterprise Solutions</span>
                      <h1 className="hero-title mb-4">
                        <span className="d-block mb-2" style={{color:"#fff"}}>Innovative IT Solutions</span>
                        <span className="text-gradient font-weight-bold">
                          Driving Business Growth
                        </span>
                      </h1>
                      <p className="lead mb-5">Comprehensive hardware installation, software development, and technical support services tailored to enhance your operational efficiency.</p>
                      <div className="banner-buttons">
                        <a href="#about" className="btn  btn-lg px-4 py-2 me-3 mb-3 mb-sm-0 btn-hover-effect"  style={{background: "#2867c3", color: "#fff"}}>
                          <i className="fa fa-users me-2"></i> Discover Our Story
                        </a>
                        <a href="#form" className="btn btn-outline-light btn-lg px-4 py-2 btn-hover-effect-light">
                          <i className="fa fa-paper-plane me-2"></i> Get in Touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Slide 3 - Recruitment */}
            <div className="carousel-item" style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("images/img3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '98vh',
              backgroundAttachment: 'fixed'
            }}>
              <div className="container h-100">
                <div className="row h-100 align-items-start mt-5">
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="banner-content text-white animate__animated animate__slideInUp">
                      <span className="badge badge-pill  mb-3 px-3 py-2"  style={{background: "#2867c3", color: "#fff"}}>Expert Recruitment</span>
                      <h1 className="hero-title mb-4">
                        <span className="d-block mb-2" style={{color:"#fff"}}>Strategic Talent</span>
                        <span className="text-gradient font-weight-bold">
                          Acquisition Solutions
                        </span>
                      </h1>
                      <p className="lead mb-5">Connecting organizations with exceptional talent through our specialized recruitment and manpower solutions.</p>
                      <div className="banner-buttons " >
                        <a href="#services" className="btn btn-lg px-4 py-2 me-3 mb-3 mb-sm-0 btn-hover-effect"  style={{background: "#2867c3", color: "#fff"}}>
                          <i className="fa fa-briefcase me-2"></i> Our Expertise
                        </a>
                        <a href="#testimonials" className="btn btn-outline-light btn-lg px-4 py-2 btn-hover-effect-light">
                          <i className="fa fa-star me-2"></i> Client Success Stories
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="shape-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Custom navigation arrows */}
          <button className="carousel-control-prev custom-carousel-control" type="button" data-target="#heroCarousel" data-slide="prev">
            <span className="carousel-nav-icon">
              <i className="fa fa-angle-left"></i>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next custom-carousel-control" type="button" data-target="#heroCarousel" data-slide="next">
            <span className="carousel-nav-icon">
              <i className="fa fa-angle-right"></i>
            </span>
            <span className="sr-only">Next</span>
          </button>
        </div>

        {/* Enhanced Feature Highlights */}
        <div className="container feature-highlights">
          <div className="row g-4">
            <div className="col-lg-4 col-md-4 col-12 mb-4 mb-lg-0">
              <div className="feature-card bg-white rounded shadow p-4 h-100 d-flex flex-column text-center transform-on-hover">
                <div className="feature-icon-wrapper mb-4">
                  <div className="feature-icon-bg">
                    <i className="fa fa-check-circle fa-3x text-primary"  style={{ color: "#2867c3"}}></i>
                  </div>
                </div>
                <h4 className="feature-title mb-3">Premium Quality</h4>
                <p className="mb-4 flex-grow-1 text-muted">Delivering excellence with meticulous attention to detail and unwavering commitment to customer satisfaction.</p>
                <div className="feature-footer">
                  <span className=" fw-bold" style={{ color: "#2867c3"}}>100% Guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12 mb-4 mb-lg-0">
              <div className="feature-card bg-white rounded shadow p-4 h-100 d-flex flex-column text-center transform-on-hover">
                <div className="feature-icon-wrapper mb-4">
                  <div className="feature-icon-bg">
                    <i className="fa fa-users fa-3x text-primary"></i>
                  </div>
                </div>
                <h4 className="feature-title mb-3">Expert Professionals</h4>
                <p className="mb-4 flex-grow-1 text-muted">Skilled specialists with extensive industry experience delivering innovative solutions for complex challenges.</p>
                <div className="feature-footer">
                  <span className=" fw-bold"  style={{ color: "#2867c3"}}>Certified Experts</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12">
              <div className="feature-card bg-white rounded shadow p-4 h-100 d-flex flex-column text-center transform-on-hover">
                <div className="feature-icon-wrapper mb-4">
                  <div className="feature-icon-bg">
                    <i className="fa fa-rocket fa-3x text-primary"></i>
                  </div>
                </div>
                <h4 className="feature-title mb-3">Fast Delivery</h4>
                <p className="mb-4 flex-grow-1 text-muted">Swift turnaround times without compromising on quality, ensuring timely delivery of all projects and services.</p>
                <div className="feature-footer">
                  <span className=" fw-bold"  style={{ color: "#2867c3"}}>On-Time Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS */}
        <style jsx>{`
          .hero-banner-section {
            position: relative;
            margin-bottom: 100px;
          }
          
          .feature-highlights {
            margin-top: -70px;
            position: relative;
            z-index: 10;
          }
          
          .hero-title {
            font-size: 3.5rem;
            line-height: 1.2;
            font-weight: 800;
            letter-spacing: -0.5px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          
          .text-gradient {
            background: linear-gradient(45deg, #2867c3, #4e9eff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
          }
          
          .banner-content {
            padding: 40px;
            
            border-radius: 15px;
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          
          .btn-hover-effect {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 1;
          }
          
          .btn-hover-effect:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.2);
            transition: all 0.4s ease;
            z-index: -1;
          }
          
          .btn-hover-effect:hover:before {
            left: 0;
          }
          
          .btn-hover-effect-light:hover {
            background-color: rgba(255,255,255,0.2);
          }
          
          .feature-card {
            transition: all 0.4s ease;
            border-top: 5px solid transparent;
          }
          
          .feature-card:hover {
            transform: translateY(-15px);
            border-top: 5px solid #2867c3;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          }
          
          .feature-icon-wrapper {
            position: relative;
            height: 90px;
            width: 90px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .feature-icon-bg {
            height: 90px;
            width: 90px;
            background-color: rgba(40, 103, 195, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          
          .feature-card:hover .feature-icon-bg {
            background-color: rgba(40, 103, 195, 0.2);
            transform: scale(1.1);
          }
          
          .transform-on-hover {
            transition: all 0.4s ease;
          }
          
          .transform-on-hover:hover {
            transform: translateY(-15px);
          }
          
          .shape-divider {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
          }
          
          .custom-carousel-control {
            width: 50px;
            height: 50px;
            background: rgba(0,0,0,0.3);
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          #heroCarousel:hover .custom-carousel-control {
            opacity: 1;
          }
          
          .carousel-control-prev {
            left: 20px;
          }
          
          .carousel-control-next {
            right: 20px;
          }
          
          .carousel-nav-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
          }
          
          @media (max-width: 992px) {
            .hero-title {
              font-size: 2.5rem;
            }
          }
          
          @media (max-width: 768px) {
            .carousel-item {
              height: 100vh !important;
            }
            
            .hero-title {
              font-size: 2rem;
            }
            
            .banner-content {
            margin-top: 15%;
              text-align: center;
              padding: 20px;
            }
            
            .banner-buttons {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            .feature-highlights {
              margin-top: 20px;
            }
            
            .custom-carousel-control {
              display: none;
            }
          }
        `}</style>
      </section> 
     
      {/* ENHANCED ABOUT SECTION WITH MODERN LAYOUT */}
      <section className="section-content-block about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2">
              <div className="about-content-wrapper pe-lg-4 mt-5 mt-lg-0">
                <div className="section-heading">
                  <span className="section-subtitle  fw-bold mb-2 d-block"  style={{color: "#2867c3"}}>ABOUT OUR COMPANY</span>
                  <h2 className="section-title mb-4">Morling Global Pvt. Ltd.</h2>
                  <div className="section-line mb-4"></div>
                </div>
                
                <div className="about-content">
                  <p className="lead mb-4">
                    Established in 2011, Morling Global Pvt. Ltd. has emerged as a trusted leader in recruitment, IT solutions, hardware and software development services across diverse industry sectors.
                  </p>
                  
                  <div className="collapse" id="moreContent">
                    <div className="about-mission mb-4">
                      <h4 className="mb-3"><i className="fa fa-bullseye text-primary me-2"></i> Our Mission</h4>
                      <p>
                        We are dedicated to delivering innovative and reliable solutions that drive business growth, enhance operational efficiency, and create lasting value for our clients and stakeholders.
                      </p>
                    </div>
                    
                    <div className="about-expertise mb-4">
                      <h4 className="mb-3"><i className="fa fa-trophy text-primary me-2"></i> Our Expertise</h4>
                      <div className="expertise-list">
                        <div className="expertise-item d-flex mb-3">
                          <div className="expertise-icon me-3">
                            <span className="badge rounded-circle bg-primary-soft p-2">01</span>
                          </div>
                          <div className="expertise-text">
                            <h5 className="mb-1">Recruitment and Manpower Services</h5>
                            <p className="mb-0">Providing skilled and qualified professionals across diverse industries.</p>
                          </div>
                        </div>
                        
                        <div className="expertise-item d-flex mb-3">
                          <div className="expertise-icon me-3">
                            <span className="badge rounded-circle bg-primary-soft p-2">02</span>
                          </div>
                          <div className="expertise-text">
                            <h5 className="mb-1">IT Services</h5>
                            <p className="mb-0">Comprehensive IT services including consulting, network management, cybersecurity and cloud services.</p>
                          </div>
                        </div>
                        
                        <div className="expertise-item d-flex mb-3">
                          <div className="expertise-icon me-3">
                            <span className="badge rounded-circle bg-primary-soft p-2">03</span>
                          </div>
                          <div className="expertise-text">
                            <h5 className="mb-1">Hardware and Software Development</h5>
                            <p className="mb-0">End-to-end development solutions that are scalable, secure, and tailored to your needs.</p>
                          </div>
                        </div>
                        
                        <div className="expertise-item d-flex">
                          <div className="expertise-icon me-3">
                            <span className="badge rounded-circle bg-primary-soft p-2">04</span>
                          </div>
                          <div className="expertise-text">
                            <h5 className="mb-1">Training Services</h5>
                            <p className="mb-0">Comprehensive training programs in both IT and non-IT domains for workforce development.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="about-values mb-4">
                      <h4 className="mb-3"><i className="fa fa-heart text-primary me-2"></i> Our Values</h4>
                      <div className="row">
                        <div className="col-md-6 col-12 mb-3">
                          <div className="value-item text-center p-3 rounded bg-light">
                            <i className="fa fa-check-circle text-primary mb-2"></i>
                            <h5>Quality</h5>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                          <div className="value-item text-center p-3 rounded bg-light">
                            <i className="fa fa-clock-o text-primary mb-2"></i>
                            <h5>On-time Delivery</h5>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                          <div className="value-item text-center p-3 rounded bg-light">
                            <i className="fa fa-lightbulb-o text-primary mb-2"></i>
                            <h5>Innovation</h5>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                          <div className="value-item text-center p-3 rounded bg-light">
                            <i className="fa fa-shield text-primary mb-2"></i>
                            <h5>Integrity</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="btn  mt-3" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#moreContent" 
                    aria-expanded="false" 
                    aria-controls="moreContent"
                     style={{background: "#2867c3", color: "#fff"}}
                  >
                    <span className="collapse-text"  >Read More</span>
                    <i className="fa fa-angle-down ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
              <div className="about-image-wrapper position-relative">
                <div className="about-image-main p-3 bg-white shadow rounded">
                  <img
                    src="images/img4.jpg"
                    alt="About Morling Global"
                    className="img-fluid rounded"
                  />
                </div>
                
                <div className="about-experience-badge">
                  <div className="badge-inner">
                    <span className="years">12+</span>
                    <span className="text">Years of Experience</span>
                  </div>
                </div>
                
                <div className="about-stats-card card shadow position-absolute">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div className="stats-icon me-3">
                        <i className="fa fa-smile-o text-primary"></i>
                      </div>
                      <div className="stats-text">
                        <h3 className="mb-0">1275+</h3>
                        <p className="mb-0">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="about-stats-card-2 card shadow position-absolute">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center">
                      <div className="stats-icon me-3">
                        <i className="fa fa-check-circle text-primary"></i>
                      </div>
                      <div className="stats-text">
                        <h3 className="mb-0">99%</h3>
                        <p className="mb-0">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <div className="highlights-wrapper">
                <div className="row">
                  <div className="col-md-4 col-12 mb-4">
                    <div className="highlight-card d-flex align-items-center p-4 rounded shadow-sm bg-white">
                      <div className="highlight-icon me-4">
                        <div className="icon-bg">
                          <i className="fa fa-wrench "  style={{ color: "#2867c3"}}></i>
                        </div>
                      </div>
                      <div className="highlight-content">
                        <h5 className="mb-2">Free Estimation</h5>
                        <p className="mb-0">No extra charge for diagnosis and cost estimation by our expert technicians.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 col-12 mb-4">
                    <div className="highlight-card d-flex align-items-center p-4 rounded shadow-sm bg-white">
                      <div className="highlight-icon me-4">
                        <div className="icon-bg">
                          <i className="fa fa-users "  style={{ color: "#2867c3"}}></i>
                        </div>
                      </div>
                      <div className="highlight-content">
                        <h5 className="mb-2">Customer Satisfaction</h5>
                        <p className="mb-0">We ensure quality work and guaranteed satisfaction with every project we deliver.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 col-12 mb-4">
                    <div className="highlight-card d-flex align-items-center p-4 rounded shadow-sm bg-white">
                      <div className="highlight-icon me-4">
                        <div className="icon-bg">
                          <i className="fa-solid fa-business-time"  style={{ color: "#2867c3"}}></i>
                        </div>
                      </div>
                      <div className="highlight-content">
                        <h5 className="mb-2">On Time Delivery</h5>
                        <p className="mb-0">We deliver quality results and expert service within our committed timeframe.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .about-section {
            position: relative;
            overflow: hidden;
          }
          
          .section-subtitle {
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
          }
          
          .section-line {
            width: 70px;
            height: 3px;
            background: linear-gradient(to right, #2867c3, #4e9eff);
          }
          
          .about-image-wrapper {
            margin-bottom: 30px;
          }
          
          .about-experience-badge {
            position: absolute;
            top: -20px;
            right: 20px;
            width: 120px;
            height: 120px;
            background: #2867c3;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 10px 20px rgba(40, 103, 195, 0.3);
            z-index: 2;
          }
          
          .badge-inner {
            text-align: center;
          }
          
          .badge-inner .years {
            font-size: 2rem;
            font-weight: 700;
            display: block;
            line-height: 1;
          }
          
          .badge-inner .text {
            font-size: 12px;
          }
          
          .about-stats-card {
            right: -15px;
            bottom: 30px;
            min-width: 180px;
            z-index: 1;
            background: white;
            border-radius: 8px;
          }
          
          .about-stats-card-2 {
            left: 0;
            top: 20px;
            min-width: 180px;
            z-index: 1;
            background: white;
            border-radius: 8px;
          }
          
          .stats-icon i {
            font-size: 2rem;
          }
          
          .expertise-list {
            padding-left: 0;
          }
          
          .bg-primary-soft {
            background-color: rgba(40, 103, 195, 0.1);
            color: #2867c3;
          }
          
          .highlight-card {
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }
          
          .highlight-card:hover {
            transform: translateY(-5px);
            border-left: 3px solid #2867c3;
          }
          
          .icon-bg {
            width: 60px;
            height: 60px;
            background-color: rgba(40, 103, 195, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
          }
          
          @media (max-width: 992px) {
            .about-experience-badge {
              width: 100px;
              height: 100px;
            }
            
            .badge-inner .years {
              font-size: 1.5rem;
            }
            
            .section-title {
              font-size: 2rem;
            }
          }
          
          @media (max-width: 768px) {
            .about-stats-card, .about-stats-card-2 {
              position: relative !important;
              left: auto;
              right: auto;
              top: auto;
              bottom: auto;
              margin-top: 15px;
              width: 100%;
            }
            
            .about-experience-badge {
              top: 10px;
              right: 10px;
            }
            
            .about-image-main {
              margin-bottom: 50px;
            }
          }
        `}</style>
      </section>
      </>
      {/*  SECTION SERVICE 01 */}

  <section
  className="section-content-block section-custom-bg parallax"
  id="services"
  data-bg_img="images/service_custom_bg.jpg"
  data-bg_color="#FFFFFF"
  data-bg_opacity="0.5"
  data-stellar-background-ratio="0.9"
  style={{
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/service_custom_bg.jpg")',
    backgroundOrigin: "initial, initial",
    backgroundClip: "initial, initial",
    backgroundColor: "initial",
    backgroundPosition: "0% -28.6887px, 0%",
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
          Our Services
        </h4>
        <span className="heading-separator heading-separator-horizontal" />
        {/* <h2 class="subheading-alt-style pl-lg-5 pl-0 pr-lg-5 pr-0">
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut laoreet orci tortor sed dignissim urna ullamcorper sit amet.
  </h2> */}
      </div>
      {/* end .col-sm-12  */}
    </div>
    <div className="container">
      <div className="row">
        {/* Service Block 1 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"100%"}} src="images/home_1_slider_1.jpg" alt="Hardware Services" />
              <span className="service-icon fa fa-wrench" />
            </figure>
            <div className="service-content">
              <h3>Hardware Installation, Repair, and Maintenance Services</h3>
              <p style={{ textAlign: "left" }}>
                At Morling Global Pvt. Ltd., we take pride in being one of the
                most trusted names in hardware installation, repair, and
                maintenance. With years of expertise and a team of highly
                skilled professionals, we deliver top-notch solutions tailored
                to meet the diverse needs of our clients.
              </p>
              <a
                href="/hardware_installation_repair_and_maintenance_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/* Service Block 2 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"100%"}} src="images/lane.avif" alt="Broadband Services" />
              <span className="service-icon fa fa-compress" />
            </figure>
            <div className="service-content">
              <h3>
                Broadband Installation, Shifting, and Technical Support Services
              </h3>
              <p style={{ textAlign: "left" }}>
                At Morling Global Pvt. Ltd., we understand the importance of
                uninterrupted and reliable internet connectivity in today's
                digital era. Whether you're setting up a new broadband
                connection, relocating to a new location, or facing technical
                challenges, our expert team is here to provide seamless support.
              </p>
              <a
                href="/broadband_installation_shifting_and_technical_support_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/* Service Block 3 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"100%"}} src="images/webapp.jpg" alt="Software Development" />
              <span className="service-icon fa fa-address-card" />
            </figure>
            <div className="service-content">
              <h3>Software Development Services</h3>
              <p style={{ textAlign: "left" }}>
                At Morling Global Pvt. Ltd., we specialize in delivering
                innovative and scalable software solutions that drive business
                success. With a deep understanding of modern technologies and
                industry trends, our team of expert developers is committed to
                crafting custom software tailored to meet your unique business
                needs.
              </p>
              <a
                href="/software_development_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
        {/* Service Block 4 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"100%"}} src="images/recruitment.avif" alt="Recruitment Services" />
              <span className="service-icon fa fa-th-list" />
            </figure>
            <div className="service-content">
              <h3>Recruitment and Manpower Services</h3>
              <p style={{ textAlign: "left" }}>
                At Morling Global Pvt. Ltd., we excel in providing comprehensive
                recruitment and manpower solutions to meet the evolving needs of
                businesses across various industries. Our dedicated team of
                professionals ensures that you have access to the right talent
                at the right time, enabling your business to thrive in a
                competitive landscape.
              </p>
              <a
                href="/recruitment_and_manpower_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details 
              </a>
            </div>
          </article>
        </div>
        {/* Service Block 5 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"120%"}} src="images/deploy.jpg" alt="RTD Services" />
              <span className="service-icon fa fa-hard-of-hearing" />
            </figure>
            <div className="service-content">
              <h3>Recruit, Train, and Deploy Services</h3>
              <p style={{ textAlign: "start" }}>
                At Morling Global Pvt. Ltd., we provide end-to-end Recruit,
                Train, and Deploy (RTD) solutions to help businesses build a
                skilled and productive workforce. Our comprehensive approach
                ensures you get candidates who are not only qualified but also
                trained to meet We focus on delivering customized training
                programs that align with your organization's goals, ensuring
                maximum productivity and growth.
              </p>
              <a
                href="/recruit_train_and_deploy_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              > 
                View Details
              </a>
            </div>
          </article>
        </div>
        {/* Service Block 6 */}
        <div className="col-lg-4 col-sm-6 col-12">
          <article className="service-block-1 text-center">
            <figure className="service-image">
              <img style={{minWidth:"100%"}} src="images/service_6.jpg" alt="AMC Services" />
              <span className="service-icon fa fa-key" />
            </figure>
            <div className="service-content">
              <h3>Comprehensive Hardware and Software AMC Services</h3>
              <p style={{ textAlign: "left" }}>
                At Morling Global Pvt. Ltd., we offer Annual Maintenance
                Contracts (AMC) for both hardware and software, ensuring your
                systems remain efficient, secure, and reliable throughout the
                year. Our AMC solutions are tailored to meet the unique needs of
                businesses, providing peace of mind with proactive maintenance
                and prompt support.
              </p>
              <a
                href="/comprehensive_hardware_and_software_amc_services"
                className="btn btn-theme btn-small btn-inline btn-semi-rounded"
              >
                View Details
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
    {/*  end .row  */}
  </div>
  {/*  end .container  */}
</section>


<>
  {/* PROCESS SECTION 02*/}
 <section
  className="section-content-block section-custom-bg"
  data-bg_img="images/process_bg_1.jpg"
  data-bg_color="#2bb6d3"
  data-bg_opacity={0}
  style={{
    background:
      'linear-gradient( rgba(43,182,211,0),  rgba(43,182,211,0) ), url("images/process_bg_1.jpg")',
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
            Simply bring your device to us, where we will collect all necessary
            details and ensure a smooth process for diagnosis and repair.
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
            Our experienced technicians perform a comprehensive diagnostic
            check, idenƟfying the root cause of the problem to ensure a precise
            and effective Solution for your device.
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
          <i class="fa-solid fa-screwdriver-wrench"  style={{ color: "#fff", fontSize: "4rem"}}></i>
          <h3 className="text-light-color">Return Repaired Device</h3>
          <div className="process-info text-light-color">
            AŌer thorough repairs and testing, we will return your device in
            optimal working condition, ready for immediate use, ensuring your
            satisfaction and trust in our service.
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
        <div className="counter-block-2 counter-border flex">
          <i class="fa-solid fa-face-smile"  style={{ color: "#2867c3", fontSize:"2rem"}}></i>
         
            <span className="counter count-info">90</span>
            <span className="counter-postfix">+</span>
            <p className="text-capitalize">Happy Buyers</p>
         
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

  {/*  end .section-content-block */}
</>
<>
  {/* /*  SECTION APPOINTMENT   06*/} 
    <section 
      className="section-content-block section-secondary-bg section-custom-bg" 
      id="form"
      data-bg_img="images/blog_thumb_1.jpg"
      data-bg_color="#f8f8f8"
      data-bg_opacity="0.8"
      style={{
        background: 'linear-gradient(rgba(248, 248, 248, 0.8), rgba(248, 248, 248, 0.8)), url("images/appointment_bg.jpg")',
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "inherit",
        backgroundSize: "cover",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="appointment-form-wrapper light-layout  margin-bottom-24 clearfix theme-custom-no-box-shadow d-lg-inline-flex">
            <div className="col-lg-4 col-12">
              <div className="appointment-form-heading text-left">
                <h2 className="form-title text-capitalize margin-top-24">
                  Request Booking
                </h2>
                <p>
                  Please fill out the booking form and very soon we will contact
                  with you to schedule an appointment.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <form className="appoinment-form margin-top-42 wow fadeInLeft">
                <div className="container">
                  <div className="row">
                    <div className="form-group col-lg-6 col-12">
                      <input
                        id="your_name"
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        required=""
                        data-msg="This field is required."
                      />
                    </div>
                    <div className="form-group col-lg-6 col-12">
                      <input
                        id="your_email"
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        required=""
                        data-msg="This field is required."
                      />
                    </div>
                    <div className="form-group col-lg-6 col-12">
                      <input
                        id="your_phone"
                        className="form-control"
                        placeholder="Phone"
                        type="text"
                        required=""
                        data-msg="This field is required."
                      />
                    </div>
                    <div className="form-group col-lg-6 col-12">
                      <div className="select-style">
                        <select
                          className="form-control"
                          name="your_service_type"
                          id="your_service_type"
                          required=""
                        >
                          <option value="">AVAILABLE SERVICES</option>
                          <option value="hardware_installation_repair_and_maintenance_services">
                            Hardware Installation, Repair, and Maintenance
                            Services
                          </option>
                          <option value="broadband_installation_shifting_and_technical_support_services">
                            Broadband Installation, Shifting, and Technical
                            Support Services
                          </option>
                          <option value="software_development_services">
                            Software Development Services
                          </option>
                          <option value="recruitment_and_manpower_services">
                            Recruitment and Manpower Services
                          </option>
                          <option value="recruit_train_and_deploys_services">
                            Recruit, Train, and Deploy Services
                          </option>
                          <option value="comprehensive_hardware_and_software_amc_services">
                            Comprehensive Hardware and Software AMC Services
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        id="textarea_message"
                        className="form-control"
                        rows={3}
                        placeholder="Your Message..."
                        required=""
                        data-msg="This field is required."
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-xs-12 text-left">
                      <button
                        id="btn_submit"
                        className="btn btn-lg btn-theme btn-semi-rounded btn-theme-invert"
                        type="submit"
                      >
                        Get Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* end .appointment-form-wrapper  */}
        </div>
        {/*  end .row  */}
      </div>
      {/* End .container */}
      </section>
      </>
<>
      {/* TESTIMONIALS SECTION */}
      <section className="section-content-block section-pure-white-bg border-top-1-light">
        <div className="container">
          <div className="row section-heading-wrapper">
            <div className="col-md-12 col-sm-12 text-center">
              <h4 className="heading-alt-style text-capitalize">Customer Testimonials</h4>
              <span className="heading-separator heading-separator-horizontal" />
              <p className="subheading-text">What our clients say about our services and solutions</p>
            </div>
          </div>
        </div>

        <div className="container theme-custom-box-shadow">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block no-padding">
              <figure className="testimonial-image h-100">
                <img
                  src="images/testimony_feat_img.jpg"
                  alt="Happy Customers"
                  className="img-fluid h-100"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </div>
            <div className="col-lg-7 col-12 py-4">
              <div className="testimonial-slider">
                <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {/* Testimonial 1 */}
                    <div className="carousel-item active">
                      <div className="testimonial-item p-4">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            "Morling Global provided exceptional IT services for our company. Their team quickly resolved our network issues and implemented security measures that have prevented any further disruptions. The level of professionalism and expertise they demonstrated was outstanding."
                          </p>
                          <div className="testimonial-author d-flex align-items-center mt-4">
                            <div className="author-image mr-3">
                              <img 
                                src="images/user_1.jpg" 
                                alt="Testimonial Author" 
                                className="img-fluid rounded-circle"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                              />
                            </div>
                            <div className="author-info">
                              <h5 className="mb-1">Rajiv Sharma</h5>
                              <p className="mb-0 text-muted">CTO, Tech Solutions Ltd</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial 2 */}
                    <div className="carousel-item">
                      <div className="testimonial-item p-4">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            "We engaged Morling Global for our recruitment needs and were impressed with the quality of candidates they provided. Their thorough screening process and understanding of our requirements helped us find the perfect match for our team. Highly recommended!"
                          </p>
                          <div className="testimonial-author d-flex align-items-center mt-4">
                            <div className="author-image mr-3">
                              <img 
                                src="images/user_2.jpg" 
                                alt="Testimonial Author" 
                                className="img-fluid rounded-circle"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                              />
                            </div>
                            <div className="author-info">
                              <h5 className="mb-1">Priya Patel</h5>
                              <p className="mb-0 text-muted">HR Manager, Global Innovations</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial 3 */}
                    <div className="carousel-item">
                      <div className="testimonial-item p-4">
                        <div className="testimonial-content">
                          <p className="testimonial-text">
                            "The broadband installation service from Morling Global was seamless and efficient. Their technicians were knowledgeable, arrived on time, and completed the setup with minimal disruption. The internet speed is exactly as promised, and their after-service support has been prompt and helpful."
                          </p>
                          <div className="testimonial-author d-flex align-items-center mt-4">
                            <div className="author-image mr-3">
                              <img 
                                src="images/user_3.jpg" 
                                alt="Testimonial Author" 
                                className="img-fluid rounded-circle"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                              />
                            </div>
                            <div className="author-info">
                              <h5 className="mb-1">Amit Kumar</h5>
                              <p className="mb-0 text-muted">Business Owner, Kumar Enterprises</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="carousel-controls mt-3">
                  
                    
                    <div className="carousel-navigation d-flex justify-content-end">
                      <a className="carousel-control-prev position-relative" href="#testimonialCarousel" role="button" data-slide="prev">
                        <span className="fa fa-angle-left fa-2x text-primary" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next position-relative" href="#testimonialCarousel" role="button" data-slide="next">
                        <span className="fa fa-angle-right fa-2x text-primary" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-layout-02 section-primary-bg clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <h2 className="text-light-color">
                Do you need assistance to repair your computer?
              </h2>
              <p>
                We will be happy to serve our best to you. Just bring your valuable
                desktop, laptop, Macbook, tablet or gaming computer. Our experts will
                be happy to assist you.
              </p>
            </div>
            {/* end .col-md-8 */}
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

export default HomePage
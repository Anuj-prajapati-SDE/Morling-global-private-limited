import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import './AboutPage.css'; // Make sure to create this CSS file

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      
      
      <section className="about-section" id="about">
        <div className="container">

       
      

          {/* Section 1 */}
          <div className="about-card">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="content-box">
                     <h1>About <span className="highlight">Us</span></h1>
                  <h2 style={{color:'#2867c3'}}>Morling Global Pvt. Ltd.</h2>
                  <h4>Who We Are</h4>
                  <p>
                    Morling Global Pvt Ltd is a forward-thinking company dedicated to
                    delivering innovative solutions across various industries, with a
                    global reach and a focus on exceptional customer service. We
                    specialize in offering tailored services and products designed to
                    meet the unique needs of businesses in today's fast-paced and
                    competitive environment.
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="image-container">
                  <img
                    src="images/img4.jpg"
                    alt="Morling Global"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 2 */}
          <div className="about-card alt-bg">
            <div className="row align-items-center flex-lg-row-reverse">
              <div className="col-lg-6 col-md-12">
                <div className="content-box">
                  <h2 style={{color:'#2867c3'}}>Our Mission</h2>
                  <h4>What Drives Us</h4>
                  <p>
                    At Morling Global Pvt Ltd, our mission is to deliver high-quality,
                    impactful solutions that help businesses thrive in the global
                    marketplace. We strive to understand the unique needs and challenges
                    of our clients and provide innovative solutions that drive growth,
                    efficiency, and success.
                  </p>
                 
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="image-container">
                  <img
                    src="images/trainingsupport.jpg"
                    alt="Our Mission"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 3 */}
          <div className="about-card">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="content-box">
                  <h2 style={{color:'#2867c3'}}>Our Expertise</h2>
                  <h4>What We Do Best</h4>
                  <ul className="expertise-list">
                    <li><span className="expertise-badge">01</span> Recruitment and Manpower Services: Providing skilled and qualified manpower.</li>
                    <li><span className="expertise-badge">02</span> IT Services: Optimizing technology infrastructure through consulting, network management, cybersecurity, and more.</li>
                    <li><span className="expertise-badge">03</span> Hardware and Software Development: Offering end-to-end solutions.</li>
                    <li><span className="expertise-badge">04</span> Training Services (IT &amp; Non-IT): Empowering individuals with necessary skills.</li>
                  </ul>
                
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="image-container">
                  <img
                    src="images/training.jpg"
                    alt="Our Expertise"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutPage;

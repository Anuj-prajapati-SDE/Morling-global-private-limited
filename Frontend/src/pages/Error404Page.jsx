import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Error404Page = () => {
  return (
 <>
 <Navbar/>
 <>
  {/*  PAGE HEADING */}
  <section className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h3>404 Page</h3>
          <p className="page-breadcrumb">
            <i className="fa fa-angle-double-left" />
            <a href="#">Back To Home</a>
          </p>
        </div>
      </div>
      {/* end .row  */}
    </div>
    {/* end .container  */}
  </section>
  {/* end .page-header  */}
  {/*  MAIN CONTENT  */}
  <section className="section-content-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="message-container-404 text-center">
            <figure className="text-center">
              <img src="https://res.cloudinary.com/dobfsabnz/image/upload/v1751327436/404_img_add1n7.jpg" alt="" />
            </figure>
            <p className="message-text-404">
              <strong>WHOPPS ! ! !</strong>
              <br />
              We could not find the page you are looking for.
              <br />
              Please check to make sure you have typed the URL correctly.
            </p>
            {/* end 404-message-text  */}
            <a href="#" className="btn btn-lg btn-service">
              Back to home page
            </a>
          </div>
        </div>
        {/*  end col-sm-12  */}
      </div>
      {/* end row  */}
    </div>
    {/*  end container */}
  </section>
  {/* end .main-content  */}
</>

<Footer/>
 </>
  )
}

export default Error404Page
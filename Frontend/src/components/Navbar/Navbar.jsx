import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
<>
  {/*  HEADER STYLE  02*/}
  <header className={`main-header-2 clearfix ${isSticky ? 'sticky-header' : ''}`} data-sticky_header="true">
    <section className="header-wrapper navgiation-wrapper">
      <div className="header-top">
        <div className="container">
          <div className="nav-head">
            <a href="/" className="navbar-brand">
              <img src="images/final morling global (1).png" alt="Logo"/>
            </a>
            
            {/*  New Code For Menu */}
            <div
              id="menu_area"
              className="menu-area border-bottom-1p-solid-light"
            >
              <div className="container">
                <div className="row">
                  <nav className="navbar navbar-light navbar-expand-lg mainmenu col-lg-9 col-12">
                    <button
                      className="navbar-toggler custom-toggler"
                      type="button"
                      onClick={toggleMobileMenu}
                      aria-controls="navbarSupportedContent"
                      aria-expanded={isMobileMenuOpen}
                      aria-label="Toggle navigation"
                    >
                      <span className={`navbar-toggler-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                    <div
                      className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
                      id="navbarSupportedContent"
                    > 
                      <ul className="navbar-nav mr-auto">
                        <li className="">
                          <a href="/" onClick={closeMobileMenu}>
                            HOME
                            <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li>
                          <a href="/about-us" title="About Us" onClick={closeMobileMenu}>
                            ABOUT US
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            SERVICES
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="/hardware_installation_repair_and_maintenance_services" onClick={closeMobileMenu}>
                                Hardware Installation, Repair, and Maintenance
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="/broadband_installation_shifting_and_technical_support_services" onClick={closeMobileMenu}>
                                Broadband Installation, Shifting, and Technical
                                Support Services
                              </a>
                            </li>
                            <li>
                              <a href="/software_development_services" onClick={closeMobileMenu}>
                                Software Development Services
                              </a>
                            </li>
                            <li>
                              <a href="/recruitment_and_manpower_services" onClick={closeMobileMenu}>
                                Recruitment and Manpower Services
                              </a>
                            </li>
                            <li>
                              <a href="/recruit_train_and_deploys_services" onClick={closeMobileMenu}>
                                Recruit, Train, and Deploy Services
                              </a>
                            </li>
                            <li>
                              <a href="/comprehensive_hardware_and_software_amc_services" onClick={closeMobileMenu}>
                                Comprehensive Hardware and Software AMC Services
                              </a>
                            </li>
                          </ul>
                        </li>
                        
                        <li>
                          <a href="/contact" title="Contact" onClick={closeMobileMenu}>
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </div>
      {/* end header-top  */}
    </section>
  </header>
  {/* end main-header  */}

  <style jsx>{`
    .sticky-header {
      position: fixed !important;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      animation: slideDown 0.3s ease-in-out;
    }

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    .logo-img {
      max-height: 50px;
      width: auto;
      transition: all 0.3s ease;
    }

    .sticky-header .logo-img {
      max-height: 40px;
    }

    .custom-toggler {
      border: none;
      background: transparent;
      padding: 4px 8px;
      position: relative;
    }

    .custom-toggler:focus {
      box-shadow: none;
      outline: none;
    }

    .navbar-toggler-icon {
      display: flex;
      flex-direction: column;
      width: 24px;
      color: "gray"
      height: 18px;
      position: relative;
      background: none;
    }

    .navbar-toggler-icon span {
      display: block;
      height: 2px;
      width: 100%;
      background: #333;
      margin: 3px 0;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    .navbar-toggler-icon.open span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .navbar-toggler-icon.open span:nth-child(2) {
      opacity: 0;
    }

    .navbar-toggler-icon.open span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    @media (max-width: 991.98px) {
      .navbar-collapse {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        margin-top: 10px;
        position: absolute;
        top: 100%;
  
        right: 0;
        width: 100vw;
        z-index: 1000;
      }

      .navbar-nav {
        width: 100%;
      }

      .navbar-nav li {
        margin: 8px 0;
        border-bottom: 1px solid #eee;
        padding-bottom: 8px;
      }

      .navbar-nav li:last-child {
        border-bottom: none;
      }

      .navbar-nav a {
        padding: 12px 16px !important;
        font-weight: 500;
        color: #333 !important;
        border-radius: 6px;
        transition: all 0.3s ease;
      }

      .navbar-nav a:hover {
        background: #f8f9fa;
        color: #007bff !important;
        transform: translateX(5px);
      }

      .dropdown-menu {
        position: static !important;
        float: none;
        width: 100%;
        margin-top: 8px;
        border: none;
        box-shadow: inset 0 0 0 1px #eee;
        background: #f8f9fa;
      }

      .dropdown-menu li {
        border-bottom: 1px solid #ddd;
        margin: 0;
        padding: 0;
      }

      .dropdown-menu a { 
        padding: 10px 20px !important;
        font-size: 14px !important;
      }

      .nav-head {
        position: relative;
      }
    }

    @media (max-width: 576px) {
      .container {
        padding: 0 15px;
      }

      .navbar-collapse {
        margin: 10px -15px 0 -15px;
        border-radius: 0;
      }

      .logo-img {
        max-height: 40px;
      }

      .sticky-header .logo-img {
        max-height: 35px;
      }
    }
  `}</style>
</>

  )
}

export default Navbar
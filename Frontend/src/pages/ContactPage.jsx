import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 992;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              color: "#2867c3",
              marginBottom: "15px",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            We'd love to hear from you. Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Contact Content */}
        <div
          style={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          {/* Form Section */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              padding: "30px",
              transition: "transform 0.3s ease",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                color: "#333",
                margin: 0,
              }}
            >
              Say hello to us
            </h2>
            <div
              style={{
                height: "3px",
                width: "80px",
                backgroundColor: "#2867c3",
                margin: "15px 0 25px",
              }}
            />

            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    fontSize: "1rem",
                    minHeight: "120px",
                    resize: "vertical",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#2867c3",
                  color: "white",
                  border: "none",
                  padding: "14px 28px",
                  fontSize: "1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 10px rgba(40,103,195,0.3)",
                  display: "inline-block",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              padding: "30px",
              transition: "transform 0.3s ease",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                color: "#333",
                margin: 0,
              }}
            >
              Our locations
            </h2>
            <div
              style={{
                height: "3px",
                width: "80px",
                backgroundColor: "#2867c3",
                margin: "15px 0 25px",
              }}
            />

            <div
              style={{
                width: "100%",
                height: "300px",
                marginBottom: "20px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.761714418877!2d77.36513467495581!3d28.606924485244026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557e6cc86cb%3A0x508ab9aee5024096!2sSmartBrains%20Engineers%20and%20Technologist%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1731669445898!5m2!1sen!2sin"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>

            <div style={{ marginTop: "25px" }}>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <span
                  style={{
                    color: "#2867c3",
                    marginRight: "15px",
                    fontSize: "18px",
                  }}
                >
                  📍
                </span>
                <p style={{ color: "#555", margin: 0 }}>
                  H. NO. 15/C, GALI NO. 9 GAGAN VIHAR, BADARPUR, NEW DELHI,
                  Delhi, India - 110044
                </p>
              </div>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <span
                  style={{
                    color: "#2867c3",
                    marginRight: "15px",
                    fontSize: "18px",
                  }}
                >
                  📞
                </span>
                <p style={{ color: "#555", margin: 0 }}>+91 7004379646</p>
              </div>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <span
                  style={{
                    color: "#2867c3",
                    marginRight: "15px",
                    fontSize: "18px",
                  }}
                >
                  ✉️
                </span>
                <p style={{ color: "#555", margin: 0 }}>
                  support@morlingglobal.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <div
  id="cont-1"
  style={{ display: "flex", gap: 20, margin: "auto 10% 10% 10%" }}
>
  <div style={{ width: "100%" }}>
    <h2 style={{ margin: 10 }}>Say hello to us</h2>
    <hr
      style={{
        backgroundColor: "#767778",
        height: 2,
        margin: 10,
        width: "90%",
        marginBottom: "5%"
      }}
    />
    <form>
      <input
        type="text"
        placeholder="Name"
        style={{
          width: "90%",
          margin: 10,
          border: "none",
          borderBottom: "1px solid black"
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Email"
        style={{
          width: "90%",
          margin: 10,
          border: "none",
          borderBottom: "1px solid black"
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Subject"
        style={{
          width: "90%",
          margin: 10,
          border: "none",
          borderBottom: "1px solid black"
        }}
      />{" "}
      <br />
      <textarea
        placeholder="Message"
        style={{
          width: "90%",
          margin: 10,
          border: "none",
          borderBottom: "1px solid black",
          height: 100
        }}
        defaultValue={""}
      />
      <br />
      <button
        type="submit"
        style={{
          textAlign: "center",
          padding: 10,
          border: "1px solid white",
          backgroundColor: "#2867c3",
          color: "white",
          marginLeft: "2%"
        }}
      >
        Send Now
      </button>
    </form>
  </div>
  <div style={{ marginTop: 10 }}>
    <h2 style={{ margin: 10 }}>Our locations</h2>
    <hr style={{ backgroundColor: "#767778", height: 2, marginBottom: "5%" }} />
    {/* Google Map iframe */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.761714418877!2d77.36513467495581!3d28.606924485244026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557e6cc86cb%3A0x508ab9aee5024096!2sSmartBrains%20Engineers%20and%20Technologist%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1731669445898!5m2!1sen!2sin"
      width={600}
      height={350}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

    <Footer/>
    </>
  )
}

export default ContactPage
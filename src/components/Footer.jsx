import React from "react";
import "./Footer.css";
import { MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

function Footer() {
  return (
    <footer style={{textAlign: "center", backgroundColor: "grey", marginBottom: "0px", color:"white"}}>
      <p style={{ marginBottom: 0, padding: "2px", fontSize: "15PX" }}>For assistance:  <FiPhoneCall size={25} /> +91-9619792288 <MdEmail size={25} /> experts@lawtarazoo.com</p>
    </footer>
  );
}

export default Footer;

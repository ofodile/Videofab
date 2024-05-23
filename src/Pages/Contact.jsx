import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Pages.css'
import Footer from '../Components/Footer.jsx'

const Contact = () => {
  
  
  return (
    <>
      <h2 className="about">Contact Us</h2>
      <p className="about-paragraph"> Email:  support@Exclusivefab.com</p>
      <p className="about-paragraph">Website:  Exclusivefab.com</p>
      <p className="about-paragraph"> Twitter(X):  @exclusivefab</p>
      <div className="foot">
       <Footer />
      </div>
    </>
  );
}

export default Contact;

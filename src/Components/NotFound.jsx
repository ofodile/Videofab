import React from 'react';
import {Link} from 'react-router-dom'
import Footer from './Footer.jsx'
import Categories from './Categories.jsx'
import '../Css/NotFound.css';

const NotFound = () => {
  return ( 
  <div className="NotFound-Container">
      <h2 className="NotFound-text"> 404 -Page Not Found</h2>
      <p className="NotFound-paragraph"> Sorry, the page you are looking for does not exist. Maybe try one of the categories below?</p>
       <Categories />
       <Footer/>
    </div>
  );
};

export default NotFound;
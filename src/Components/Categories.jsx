import React from 'react';
import {Link} from 'react-router-dom'
import Footer from './Footer.jsx'
import '../Css/More_Categories.css';
import { useScrollRestoration } from 'use-scroll-restoration';



const Categories = () =>{
  
  const { ref,setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 100,
    persist: 'sessionStorage',
  });
  
  const setReset  = () => {
    setScroll({ y: 0 });
  }
  
  
  return(
    <>
    <h3 className="cate-heading">Categories</h3>
      <ul className="categories">
         <li className="cate" onClick={setReset}><Link to="/African">Africa</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Anal">Anal</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Amateur">Amateur</Link></li>
          <li className="cate" onClick={setReset}><Link to="/Arab">Arab</Link></li>
          <li className="cate" onClick={setReset}><Link to="/Asian">Asian</Link></li>
          <li className="cate" onClick={setReset}><Link to="/BDSM">BDSM</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Big-Ass">Big Ass</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Big-Dick">Big Dick</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Big-Tits">Big Tits</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Black">Black</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Blonde">Blonde</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Blowjob">Blowjob</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Bmw">BMW</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Bondage">Bondage</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Brunette">Brunette</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Bukkake">Bukkake</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Couple">Couple</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Cowgirl">Cowgirl</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Creampie">Creampie</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Cum">Cum</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Cumshot">Cumshot</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Ebony">Ebony</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Family">Family</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Female-Orgasm">Female Orgasm</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Fetish">Fetish</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Fingering">Fingering</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Fisting">Fisting</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Footjob">Footjob</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Gangbang">Gangbang</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Handjob">Handjob</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Homemade">Homemade</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Hardcore">Hardcore</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Indian">Indian</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Interracial">Interracial</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Japanese">Japanese</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Latina">Latina</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Lesbian">Lesbian</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Lingerie">Lingerie</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Massage">Massage</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Masturbation">Masturbation</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Mature">Mature</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Milf">Milf</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Nurses">Nurses</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Orgy">Orgy</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Outdoor">Outdoor</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Pissing">Pissing</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Public">Public</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Pussy">Pussy</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Red-Head">Red Head</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Romantic">Romantic</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Rough-Sex">Rough Sex</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Sleep">Sleep</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Small-Tits">Small Tits</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Squirt">Squirt</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Striptease">Striptease</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Teen">Teen</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Threesome">Threesome</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Toys">Toys</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Virgin">Virgin</Link></li>
         <li className="cate" onClick={setReset}><Link to="/Yoga">Yoga</Link></li>
      </ul>
      <Footer />
    </>
    )
}

export default Categories;
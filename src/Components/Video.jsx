import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import RelatedPost from "./RelatedPost.jsx"
import Footer from "./Footer.jsx"
import "../Css/Video.css"
import { useScrollRestoration } from 'use-scroll-restoration';


const Video = () => {
  
  const { ref,setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 100,
    persist: 'sessionStorage',
  });
  
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { videoID, videoTitle } = useParams()


  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://www.eporner.com/api/v2/video/id/?id=${videoID}&thumbsize=medium&format=json`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []); 
   
  console.log(data)

  if (data !== null && typeof data === 'object') {
    const { title, embed, keywords} = data;
    
    
    const setReset  = () => {
    setScroll({ y: 0 });
  }
  

return (
  <div className="main-video-container">
    <div className="video-container">
       <div className="box1">
           {title.length > 60 ? (
              <h1 className="video-title">{title.substring(0, 60) + "..."}</h1>
                ) : (
               <h1 className="video-title">{title}</h1>
           )}
           <iframe
            src={embed}
            title="Example iframe"
            frameBorder="0"
            allowFullScreen
           ></iframe>
           <RelatedPost />
       </div>
       <div className="ads">Banner Ads Space</div>
    </div>
    <div className="footer-div">
    <div className="native-ads">Native Ads Space</div>
       <ul>
          <li className="tag-list" onClick={setReset}><Link to="/Anal" className="tags">Anal</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/African" className="tags">Africa</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/Blowjob" className="tags">Blowjob</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/Fingering" className="tags">Fingering</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/Teen" className="tags">Teen</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/lesbian" className="tags">lesbian</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Masturbation" className="tags">Masturbation</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Black" className="tags">Black</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Big-Dick" className="tags">Big Dick</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Amateur" className="tags">Amateur</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/BMW" className="tags">BMW</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Cowgirl" className="tags">Cowgirl</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Arab" className="tags">Arab</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Ebony" className="tags">Ebony</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Family" className="tags">Family</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Cum" className="tags">Cum</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Footjob" className="tags">Footjob</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Yoga" className="tags">Yoga</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Handjob" className="tags">Handjob</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Gangbang" className="tags">Gangbang</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Sleep" className="tags">Sleep</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Orgy" className="tags">Orgy</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Milf" className="tags">Milf</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Indian" className="tags">Indian</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Cum" className="tags">Cum</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Creampie" className="tags">Creampie</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Nurses" className="tags">Nurses</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Romantic" className="tags">Romantic</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Pussy" className="tags">Pussy</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Toys" className="tags">Toys</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Fetish" className="tags">Fetish</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Japanese" className="tags">Japanese</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Interracial" className="tags">Interracial</Link></li>
          <li className="tag-list" onClick={setReset}><Link to="/Striptease" className="tags">Striptease</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Cumshot" className="tags">Cumshot</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Lingerie" className="tags">Lingerie</Link></li> 
          <li className="tag-list" onClick={setReset}><Link to="/Virgin" className="tags">Virgin</Link></li> 
       </ul>
    </div>
    <Footer />
  </div>
  );
  } else {
    console.error("Data is null or not an object. Unable to destructure 'title'."); 
    return null; // Or you can render a loading/error message here
  }
}

export default Video;
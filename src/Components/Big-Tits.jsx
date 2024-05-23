import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import { useScrollRestoration } from 'use-scroll-restoration';

const BigTits = () => {
  
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(parseInt(new URLSearchParams(location.search).get('query')) || 1);
  const Category = "Big-Tits";
  
  const { ref,setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 100,
    persist: 'sessionStorage',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      const URL = `https://www.eporner.com/api/v2/video/search/?query=${Category}&per_page=500&page=${query}&thumbsize=big&order=top-monthy&gay=0&lq=1&format=json`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const filteredVideos = json.videos.filter(video => video.length_sec <= 1800);
        setData({ videos: filteredVideos });
      } catch (error) {
        setError(error);
      } finally {
        setLoadingData(false);
      } 
    }; 
    fetchData();
  }, [query, Category, location.search]);
  
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.videos) {
    return <div className="loading">No data available yet</div>;
  }
  if (loadingData) {
    return <div className="loading">Loading...</div>;
  }

  let linksToShow;
  if (query <= 3) {
    linksToShow = Array.from({ length: Math.min(5, 100) }, (_, index) => index + 1);
  } else {
    let startLink = Math.max(1, query - 1);
    let endLink = Math.min(startLink + 4, 100);
    linksToShow = Array.from({ length: endLink - startLink + 1 }, (_, index) => startLink + index);
  }

  const handlePrevBtn = () => {
    const prevQuery = query > 1 ? query - 1 : 1;
    setQuery(prevQuery);
    navigate(`/${Category}?query=${prevQuery}`);
    setScroll({ y: 0 });
  };

  const handleNextBtn = () => {
    const nextQuery = query < 100 ? query + 1 : 100;
    setQuery(nextQuery);
    navigate(`/${Category}?query=${nextQuery}`);
    setScroll({ y: 0 });
  };

  const handleOneBtn = () => {
    setQuery(1);
    navigate(`/${Category}?query=1`);
    setScroll({ y: 0 });
  };

  const handleLinkBtn = (value) => {
    setQuery(value);
    navigate(`/${Category}?query=${value}`);
    setScroll({ y: 0 });
  };

  return (
    <div ref={ref} style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <h2 className="category-heading">Big Tits Category</h2>
      <div className="container">
        {data.videos.slice(0, 40).map((video, index) => (
          <div key={index} className="video-box">
            <Link to={`/Video/${video.id}/${video.title.replace(/ /g, '-')}`}>
              <div className="img-container">
                <img src={video.default_thumb.src} alt="img" />
                <p className="video-time">{video.length_min}</p>
              </div>
              {video.title.length > 60 ? (
                <h3>{video.title.substring(0, 60) + "..."}</h3>
              ) : (
                <h3>{video.title}</h3>
              )}
            </Link>
            <Link to={`/${Category}?query=${query}`}><p>{Category}</p></Link>
          </div>
        ))}
      </div>
      <div className="ul">
        <button className={query > 1 ? "next-button" : "button" } onClick={handlePrevBtn}><FaArrowLeft size={15} className="next-icon" /></button>
        <button className={query > 3 ? "button-one" : "button-off"} onClick={handleOneBtn}>1</button>
        {linksToShow.map((value) => (
          <button 
            key={value} 
            className={value === query ? "active-link" : "link"} 
            onClick={() => handleLinkBtn(value)}>{value}
          </button>
        ))}
        <button className={query < 100 ? "next-button" : "button" } onClick={handleNextBtn}><FaArrowRight size={15} className="next-icon" /></button>
      </div>
      <Footer />
    </div>
  );
};

export default BigTits;
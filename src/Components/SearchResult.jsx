import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RelatedPost from "./RelatedPost.jsx";
import Footer from "./Footer.jsx";
import Video from "./Video.jsx";
import '../Css/Category.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useScrollRestoration } from 'use-scroll-restoration';

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const urlPage = parseInt(queryParams.get('page'), 10) || 1; // Parse page from URL or default to 1
  const [page, setPage] = useState(urlPage); // Initialize page state from URL

  const { ref, setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 100,
    persist: 'sessionStorage',
  });

  // Effect to update page state when URL changes
  useEffect(() => {
    if (urlPage !== page) {
      setPage(urlPage);
    }
  }, [urlPage]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=500&page=${page}&thumbsize=big&order=latest&gay=0&lq=1&format=json`;

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
        setLoading(false);
      }
    };

    setLoading(true);
    fetchData();
  }, [query, page]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.videos) return <div className="loading">No data available yet</div>;

  const linksToShow = Array.from({ length: Math.min(5, 100) }, (_, index) => {
    if (page <= 3) return index + 1;
    const startLink = Math.max(1, page - 1);
    return startLink + index;
  }).slice(0, Math.min(5, 100));

  const handlePrevBtn = () => {
    const prevPage = Math.max(page - 1, 1);
    setPage(prevPage);
    navigate(`?query=${query}&page=${prevPage}`, { replace: true });
    setScroll({ y: 0 });
  };

  const handleNextBtn = () => {
    const nextPage = Math.min(page + 1, 100);
    setPage(nextPage);
    navigate(`?query=${query}&page=${nextPage}`, { replace: true });
    setScroll({ y: 0 });
  };

  const handleOneBtn = () => {
    setPage(1);
    navigate(`?query=${query}&page=1`, { replace: true });
    setScroll({ y: 0 });
  };

  const handleLinkBtn = (value) => {
    setPage(value);
    navigate(`?query=${query}&page=${value}`, { replace: true });
    setScroll({ y: 0 });
  };

  return (
    <div ref={ref} style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <h2 className="category-heading">Search Results For: {query}</h2>
      <div className="container">
        {data.videos.slice(0, 40).map((video, index) => (
          <div key={index} className="video-box">
            <Link to={`/Video/${video.id}/${video.title.replace(/ /g, '-')}`}>
              <div className="img-container">
                <img src={video.default_thumb.src} alt="img" />
                <p className="video-time">{video.length_min}</p>
              </div>
              <h3>{video.title.length > 60 ? `${video.title.substring(0, 60)}...` : video.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="ul">
        <button className={page > 1 ? "next-button" : "button"} onClick={handlePrevBtn}>
          <FaArrowLeft size={15} className="next-icon" />
        </button>
        <button className={page > 3 ? "button-one" : "button-off"} onClick={handleOneBtn}>
          1
        </button>
        {linksToShow.map((value) => (
          <button
            key={value}
            className={value === page ? "active-link" : "link"}
            onClick={() => handleLinkBtn(value)}
          >
            {value}
          </button>
        ))}
        <button className={page < 100 ? "next-button" : "button"} onClick={handleNextBtn}>
          <FaArrowRight size={15} className="next-icon" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;

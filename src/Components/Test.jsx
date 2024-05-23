import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Test = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { testID } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://www.eporner.com/api/v2/video/id/?id=${testID}&thumbsize=medium&format=json`;
      console.log(URL)
      console.log(testID)
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
    const { title, embed, } = data;
    console.log(title);

    return (
      <>
        <div>
          <h3>{title}</h3>
        </div>
      </>
    )
  } else {
    console.error("Data is null or not an object. Unable to destructure 'title'.");
    return null; // Or you can render a loading/error message here
  }
}

export default Test



// Here is the rewritten code with the added functionality to store and restore the scroll position:
// 
// ```
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from './Footer.jsx';

const Teen = () => {
  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(parseInt(new URLSearchParams(location.search).get('query')) || 1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const Category = "Teen";

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      const URL = `(link unavailable);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  }, [scrollPosition]);

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
    setScrollPosition(window.scrollY);
    setLoadingData(true);
    const prevQuery = query > 1 ? query - 1 : 1;
    setQuery(prevQuery);
    navigate(`/${Category}?query=${prevQuery}`);
  };

  const handleNextBtn = () => {
    setScrollPosition(window.scrollY);
    setLoadingData(true);
    const nextQuery = query < 100 ? query + 1 : 100;
    setQuery(nextQuery);
    navigate(`/${Category}?query=${nextQuery}`);
  };

  const handleOneBtn = () => {
    setScrollPosition(window.scrollY);
    setLoadingData(true);
    setQuery(1);
    navigate(`/${Category}?query=1`);
  };

  const handleLinkBtn = (value) => {
    setScrollPosition(window.scrollY);
    setLoadingData(true);
    setQuery(value);
    navigate(`/${Category}?query=${value}`);
  };

  return (
    <>
      <h2>Teen Category</h2>
      <div className="container">
        {Object.keys(data.videos).slice(0, 40).map((key) => (
          <div key={key} className="video-box">
            <Link to={`/Video/${data.videos[key].id}?query=${query}`}>
              <div className="img-container">
                <img src={data.videos[key].default_thumb.src} alt="img" />
                <p className="video-time">{data.videos[key].length_min}</p>
              </div>
              {data.videos[key].title.length > 60 ? (
                <h3>{data.videos[key].title.substring(0, 60) + "..."}</h3>
              ) : (
                <h3>{data.videos[key].title}</h3>
              )}
            </Link>
            <Link to={`/${Category}?query=${query}`}><p>{Category}</p></Link>
          </div>
        ))}
      </div>
      <div className="ul">
        <button className
```



const App = () => {
  return ( 
    <> 
    <BrowserRouter>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="anal" element={<Anal />} />
        <Route path="ebony" element={<Ebony />} />
        <Route path="milf" element={<Milf />} />
        <Route path="teen" element={<Teen />} /> 
        <Route path="categories" element={<Categories />} />
        <Route path="lesbian" element={<Lesbian />} /> 
        <Route path="Masturbation" element={<Masturbation />} />
        <Route path="relatedpost" element={<RelatedPost />} />
        <Route path="searchresult" element={<SearchResult />} />
        <Route path="video/:videoID/:videoTitle" element={<Video / >} />
      </Routes>
    </BrowserRouter>
    </>
    
    
    
  );
};
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import '../Css/RelatedPost.css';
import Footer from './Footer.jsx'

const RelatedPost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
const Categorys = ["lesbain", "ebony", "milf", "teen", "squirt", "blowjob"];

function getRandomCategory(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  
  return array[randomIndex];
} 

const randomCategory = getRandomCategory(Categorys);


 
  useEffect(() => {
  const fetchData = async () => {
      const URL = `https://www.eporner.com/api/v2/video/search/?query=${randomCategory}&per_page=500&page=1&thumbsize=big&order=latest&gay=0&lq=1&format=json`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      // Filter out videos with length greater than 30 minutes
      const filteredVideos = json.videos.filter(video => video.length_sec <= 1800);
      setData({ videos: filteredVideos }); // Set the state with filtered videos
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
 
  fetchData();
}, []);
  
  

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Handle the case where `data` might not be available yet
  if (!data || !data.videos) {
    return <div className="loading">No data available yet</div>;
  }
  // const handleReload =  () => {
//     window.location.reload();
//   }
  
  return (
    <>
       <h1 className="related">Related Videos</h1>
       <div className="related-container">
          { Object.keys(data.videos).slice(0,12).map((key) => (
            <div key={key} className="related-video-box">
             <a href={`/Video/${data.videos[key].id}/${data.videos[key].title.replace(/ /g, '-')}`}>
             <div className="related-img-container">
                   <img className="related-img" src={data.videos[key].default_thumb.src} alt="img" />
                   <p className="related-video-time">{data.videos[key].length_min}</p>
             </div>
                  {data.videos[key].title.length > 25 ? (
                 <h3 className="related-title">{data.videos[key].title.substring(0, 25) + "..."}</h3>
                  ) : (
                   <h3 className="related-title">{data.videos[key].title}</h3>
                  )}
               </a>
            </div>
          ) ) }
       </div>
    </>
  );
};
 
export default RelatedPost;
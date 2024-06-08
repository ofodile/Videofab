import{ React, useEffect } from 'react';
import "./Css/App.css" 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {initializeGA, trackPageView} from './Components/Analytics.jsx';
import NavBar from './Components/NavBar.jsx';
import SearchBar from './Components/SearchBar.jsx';
import SearchResult from './Components/SearchResult.jsx';
import Home from './Components/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Amateur from './Components/Amateur.jsx';
import Anal from './Components/Anal.jsx';
import Africa from './Components/Africa.jsx';
import Arab from './Components/Arab.jsx';
import Asian from './Components/Asian.jsx';
import Bdsm from './Components/Bdsm.jsx';
import BigAss from './Components/Big-Ass.jsx';
import BigDick from './Components/Big-Dick.jsx';
import BigTits from './Components/Big-Tits.jsx';
import Black from './Components/Black.jsx';
import Blonde from './Components/Blonde.jsx';
import Blowjob from './Components/Blowjob.jsx';
import Bmw from './Components/Bmw.jsx';
import Bondage from './Components/Bondage.jsx';
import Brunette from './Components/Brunette.jsx';
import Bukkake from './Components/Bukkake.jsx'; 
import Couple from './Components/Couple.jsx';
import Cowgirl from './Components/Cowgirl.jsx';
import Creampie from './Components/Creampie.jsx';
import Cum from './Components/Cum.jsx';
import Cumshot from './Components/Cumshot.jsx';
import Ebony from './Components/Ebony.jsx';
import Family from './Components/Family.jsx'; 
import FemaleOrgasm from './Components/Female-Orgasm.jsx'; 
import Fetish from './Components/Fetish.jsx'; 
import Footjob from './Components/Footjob.jsx'; 
import Fingering from './Components/Fingering.jsx'; 
import Fisting from './Components/Fisting.jsx'; 
import Gangbang from './Components/Gangbang.jsx'; 
import Handjob from './Components/Handjob.jsx'; 
import Homemade from './Components/Homemade.jsx'; 
import Hardcore from './Components/Hardcore.jsx'; 
import Indian from './Components/Indian.jsx'; 
import Interracial from './Components/Interracial.jsx'; 
import Japanese from './Components/Japanese.jsx'; 
import Latina from './Components/Latina.jsx'; 
import Lesbian from './Components/Lesbian.jsx';
import Lingerie from './Components/Lingerie.jsx'; 
import Massage from './Components/Massage.jsx'; 
import Masturbation from './Components/Masturbation.jsx';
import Mature from './Components/Mature.jsx'; 
import Milf from './Components/Milf.jsx'
import Nurses from './Components/Nurses.jsx'; 
import Orgy from './Components/Orgy.jsx'; 
import Outdoor from './Components/Outdoor.jsx'; 
import Pissing from './Components/Pissing.jsx'; 
import Public from './Components/Public.jsx'; 
import Pussy from './Components/Pussy.jsx'; 
import RedHead from './Components/Red-Head.jsx'; 
import Romantic from './Components/Romantic.jsx'; 
import RoughSex from './Components/Rough-Sex.jsx'; 
import Sleep from './Components/Sleep.jsx'; 
import SmallTits from './Components/Small-Tits.jsx'; 
import Squirt from './Components/Squirt.jsx'; 
import Striptease from './Components/Striptease.jsx'; 
import Teen from './Components/Teen.jsx';
import Threesome from './Components/Threesome.jsx'; 
import Toys from './Components/Toys.jsx'; 
import Virgin from './Components/Virgin.jsx'; 
import Yoga from './Components/Yoga.jsx'; 
import Categories from './Components/Categories.jsx'
import Video from './Components/Video.jsx'
import NotFound from './Components/NotFound.jsx'
import RelatedPost from './Components/RelatedPost.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initializeGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  

  
return (
      <div className="app-container">
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/amateur" element={<Amateur />} />
            <Route path="/african" element={<Africa />} />
            <Route path="/anal" element={<Anal />} />
            <Route path="/arab" element={<Arab />} />
            <Route path="/asian" element={<Asian />} />
            <Route path="/bdsm" element={<Bdsm />} />
            <Route path="/big-ass" element={<BigAss />} />
            <Route path="/big-dick" element={<BigDick />} />
            <Route path="/big-tits" element={<BigTits />} />
            <Route path="/black" element={<Black />} />
            <Route path="/blonde" element={<Blonde />} />
            <Route path="/blowjob" element={<Blowjob />} />
            <Route path="/bmw" element={<Bmw />} />
            <Route path="/bondage" element={<Bondage />} />
            <Route path="/brunette" element={<Brunette />} />
            <Route path="/bukkake" element={<Bukkake />} />
            <Route path="/couple" element={<Couple />} />
            <Route path="/cowgirl" element={<Cowgirl />} />
            <Route path="/creampie" element={<Creampie />} />
            <Route path="/cum" element={<Cum />} />
            <Route path="/cumshot" element={<Cumshot />} />
            <Route path="/ebony" element={<Ebony />} />
            <Route path="/family" element={<Family />} />
            <Route path="/female-orgasm" element={<FemaleOrgasm />} />
            <Route path="/fetish" element={<Fetish />} />
            <Route path="/fingering" element={<Fingering />} />
            <Route path="/fisting" element={<Fisting />} />
            <Route path="/footjob" element={<Footjob />} />
            <Route path="/gangbang" element={<Gangbang />} />
            <Route path="/handjob" element={<Handjob />} />
            <Route path="/hardcore" element={<Hardcore />} />
            <Route path="/homemade" element={<Homemade />} />
            <Route path="/indian" element={<Indian />} />
            <Route path="/Interracial" element={<Interracial />} />
            <Route path="/japanese" element={<Japanese />} />
            <Route path="/latina" element={<Latina />} />
            <Route path="/lesbian" element={<Lesbian />} />
            <Route path="/lingerie" element={<Lingerie />} />
            <Route path="/massage" element={<Massage />} />
            <Route path="/mature" element={<Mature />} />
            <Route path="/masturbation" element={<Masturbation />} />
            <Route path="/milf" element={<Milf />} />
            <Route path="/nurses" element={<Nurses />} />
            <Route path="/orgy" element={<Orgy />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/pissing" element={<Pissing />} />
            <Route path="/public" element={<Public />} />
            <Route path="/pussy" element={<Pussy />} />
            <Route path="/red-head" element={<RedHead />} />
            <Route path="/romantic" element={<Romantic />} />
            <Route path="/rough-sex" element={<RoughSex />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/small-tits" element={<SmallTits />} />
            <Route path="/squirt" element={<Squirt />} />
            <Route path="/striptease" element={<Striptease />} />
            <Route path="/teen" element={<Teen />} />
            <Route path="/threesome" element={<Threesome />} />
            <Route path="/toys" element={<Toys />} />
            <Route path="/virgin" element={<Virgin />} />
            <Route path="/yoga" element={<Yoga />} />
              <Route path="/searchresult" element={<SearchResult />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/relatedpost" element={<RelatedPost />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/video/:videoID/:videoTitle" element={<Video />} />
          </Routes>
        </div>
      </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);
   
  

export default AppWrapper;
import { useState, useEffect } from "react"
import styles from "../Css/NavBar.module.css"
import { Link, Outlet} from 'react-router-dom';
import AdComponent2 from './AdComponent2.jsx'
import SearchBar from './SearchBar.jsx'
import { FaSearch } from "react-icons/fa";
import { useScrollRestoration } from 'use-scroll-restoration';

function NavBar() {
  
const { ref,setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 100,
    persist: 'sessionStorage',
  });
  
  const [showSearch, setShowSearch] =useState(false);
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
    setScroll({ y: 0 });
    setShowSearch(false)
  }
  
  const handleShowSearch = () => {
    setShowSearch(prevState => !prevState);
  };
  
  return (
    <div className={`${styles.App}`}>
      <header className={`${styles.App_header}`}>
        <nav className={`${styles.navbar}`}>
        <button className={`${styles.searchbtn}`} onClick={handleShowSearch}><FaSearch className={`${styles.search_icon}`} size={18} /></button>
          {/* logo */}
          <Link to='/'onClick={removeActive} className={`${styles.logo}`}>Exclusivefab </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Anal' className={`${styles.navLink}`}>Anal</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Teen' className={`${styles.navLink}`}>Teen</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Milf' className={`${styles.navLink}`}>Milf</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Ebony' className={`${styles.navLink}`}>Ebony</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Lesbian' className={`${styles.navLink}`}>Lesbian</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/Categories' className={`${styles.navLink}`}>More Categories</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
      <div className={`${showSearch ? styles.active_search : styles.inactive_search}`}>
       <SearchBar />
      </div>
      <Outlet />
    </div>
  );
}
export default NavBar;
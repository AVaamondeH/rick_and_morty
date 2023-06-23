import SearchBar from "../SearchBar/SearchBar";
import Style from "./Nav.module.css"
import { NavLink, useLocation } from "react-router-dom"

const Nav = ({ onSearch, onRandom, setAccess }) => {
  const location = useLocation()
  
  const handleAccess = () => {
    setAccess(false)
  }

  if(location.pathname === "/") {
    return;
  }

    return (
      <nav className={Style.nav}>
        <NavLink to="/home" className={Style.NavLink}>
        <div className={Style.links}>
          Home
        </div>
          
        </NavLink>
        <NavLink to="/about" className={Style.NavLink}>
        <div className={Style.links}>
          About
        </div>

        </NavLink>
        <NavLink to="/favorites" className={Style.NavLink}>
        <div className={Style.links}>
          Favorites
        </div>
        </NavLink>

        <div className={Style.center}>
          <SearchBar onSearch={onSearch} onRandom={onRandom} />
        </div>

        <NavLink to="/" className={Style.NavLink}>
        <div className={Style.logout} onClick={handleAccess}>
            Logout
        </div>  

        </NavLink>
      </nav>
    );
  };

export default Nav;
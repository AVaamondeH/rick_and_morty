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

  if(location.pathname === "/favorites") {
    return (
      <>
      <div className={Style.container}>
          <div className={Style.img}>
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
            <div className={Style.imgContainer}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
              </div>
              <NavLink to="/" className={Style.NavLink}>
              <div className={Style.logout} onClick={handleAccess}>
                  Logout
              </div>  
            </NavLink>

          </div>  
        </div>
      </>
    );
  }

    return (
      <>
      <div className={Style.container}>
          <div className={Style.img}>
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
            <div className={Style.imgContainer}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
              </div>
              <NavLink to="/" className={Style.NavLink}>
              <div className={Style.logout} onClick={handleAccess}>
                  Logout
              </div>  
            </NavLink>

          </div>  
          <nav className={Style.nav}>

            <div className={Style.center}>
              <SearchBar onSearch={onSearch} onRandom={onRandom} />
            </div>

          </nav>
        </div>
      </>
    );
  };

export default Nav;
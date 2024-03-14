import {Header} from "../types/type.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../assets/partners.png';

interface NavBarProp {
  headers: Header[];
  logIn: () => void;
  logOut: () => void;
  loggedIn: boolean
}

const NavBar = ({headers, logIn, loggedIn, logOut}: NavBarProp) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate('/')
  }
  return (
    <div className="nav">
      <div className="logo-container">
        <img alt="logo" src={logo} className="logo"/>
        <h1>Team up</h1>
      </div>
      <ul className="nav-list">
        {headers.map((header) => {
          const {id, title, route} = header;
          return (
            <li className="nav-list__element" key={id}><NavLink className={({isActive}) =>
              [
                isActive ? "active" : null,
              ]
                .filter(Boolean)
                .join(" ")
            } to={route}>{title}</NavLink></li>
          )
        })}
      </ul>
      {!loggedIn ? <button onClick={logIn}>LogIn</button> :
        <button onClick={handleLogOut}>LogOut</button>}
    </div>
  )
}
export default NavBar;
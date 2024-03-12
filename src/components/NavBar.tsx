import {Header} from "../types/type.tsx";
import {NavLink, useNavigate} from "react-router-dom";

interface NavBarProp {
  headers: Header[];
  logIn: () => void;
  logOut: () => void;
  loggedIn: boolean
}

const NavBar = ({headers, logIn, loggedIn, logOut}: NavBarProp) => {
  const navigate = useNavigate();
  const handleLogOut =()=>{
    logOut();
    navigate('/')
  }
  return (
    <div className="nav">
      <ul className="nav-list">
        {headers.map((header) => {
          const {id, title, route} = header;
          return (
            <li className="nav-list__element" key={id}><NavLink className={({ isActive }) =>
              [
                isActive ? "active" : null,
              ]
                .filter(Boolean)
                .join(" ")
            } to={route}>{title}</NavLink></li>
          )
        })}
      </ul>
      {!loggedIn ? <button onClick={logIn}>LogIn</button>:
      <button onClick={handleLogOut}>LogOut</button>}
    </div>
  )
}
export default NavBar;
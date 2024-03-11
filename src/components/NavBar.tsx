import {Header} from "../types/type.tsx";
import {NavLink} from "react-router-dom";

interface NavBarProp {
  headers: Header[];
}

const NavBar = ({headers}: NavBarProp) => {
  const logIn= ()=>{
    console.log("you are now logged in");
  }
  return (
    <div className="nav">
      <ul className="nav-list">
        {headers.map((header) => {
          const {id, title, route} = header;
          return (
            <li className="nav-list__element" key={id}><NavLink to={route}>{title}</NavLink></li>
          )
        })}
      </ul>
      <button onClick={logIn}>LogIn</button>
    </div>
  )
}
export default NavBar;
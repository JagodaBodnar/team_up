import {Header} from "../types/type.tsx";

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
          const {id, title} = header;
          return (
            <li className="nav-list__element" key={id}>{title}</li>
          )
        })}
      </ul>
      <button onClick={logIn}>LogIn</button>
    </div>
  )
}
export default NavBar;
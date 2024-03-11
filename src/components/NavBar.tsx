import {Header} from "../types/type.tsx";

interface NavBarProp {
  headers: Header[];
}

const NavBar = ({headers}: NavBarProp) => {
  const logIn= ()=>{
    console.log("you are now logged in");
  }
  return (
    <>
      <ul>
        {headers.map((header) => {
          const {id, title} = header;
          return (
            <li key={id}>{title}</li>
          )
        })}
      </ul>
      <button onClick={logIn}>LogIn</button>
    </>
  )
}
export default NavBar;
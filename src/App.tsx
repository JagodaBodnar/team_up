import "./index.css"
import {BrowserRouter} from "react-router-dom";
import Router from './router/Router.tsx'
import RootContext from "./context/Context.tsx";
import {useState} from "react";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => {
    setLoggedIn(true);
  }
  const logOut = () => {
    setLoggedIn(false);
  }

  return (
    <RootContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
      }}
    >
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </RootContext.Provider>
  )
}

export default App

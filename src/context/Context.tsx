import { createContext } from "react";

const RootContext = createContext({
  loggedIn: false,
  logIn: () => {},
  logOut:  () => {},
});

export default RootContext;
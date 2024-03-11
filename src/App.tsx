import "./index.css"
import {BrowserRouter} from "react-router-dom";
import Router from './router/Router.tsx'


const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App

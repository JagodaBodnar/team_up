import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import HomeView from "../views/HomeView.tsx";
import TeamsView from "../views/TeamsView.tsx";


const Router =()=>{
    return(
      <Routes>
        <Route path={routes.home} element={<HomeView />}/>
        <Route path={routes.joined} element={<TeamsView />}/>
        <Route path={routes.created} element={<TeamsView />}/>
      </Routes>
    )
}
export default Router;
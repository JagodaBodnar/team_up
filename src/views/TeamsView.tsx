import NavBar from "../components/NavBar.tsx";
import {categories, headers} from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";

const TeamsView =()=>{
  return(
    <>
      <NavBar headers={headers}/>
      <AddGroupForm categories={categories}/>
    </>
  )
}
export default TeamsView;
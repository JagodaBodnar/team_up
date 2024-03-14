import NavBar from "../components/NavBar.tsx";
import {
  categories,
  headers, mockedAllGroups,
} from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {Group} from "../types/type.tsx";
import {useContext, useEffect, useState} from "react";
import RootContext from "../context/Context.tsx";
import {Toaster} from "react-hot-toast";
import {useLocation} from "react-router-dom";

const TeamsView = () => {
  const [myGroups, setMyGroups] = useState<Group[]>(mockedAllGroups);
  const [loading, setLoading] = useState(true)
  const [groupsCreatedByMe, setGroupsCreatedByMe] = useState<Group[]>(mockedAllGroups);
  const addNewGroup = (newGroup: Group[]) => {
    setGroupsCreatedByMe(newGroup);
  };
  const removeGroup = (id: string) => {
    fetch(`http://localhost:8080/api/teams/${id}/deleteTeam/d29bc9c3-d1bb-4766-8315-0745179b9d8d`, {method: "DELETE", headers:{"Content-Type": "application/json"}})
      .then(res => res.json())
      .then(res => setGroupsCreatedByMe(res))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(`http://localhost:8080/api/teams/createdTeams/d29bc9c3-d1bb-4766-8315-0745179b9d8d`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setGroupsCreatedByMe(res);
        setLoading(false);
      })
      .catch(err => console.log(err))
  }

  const context = useContext(RootContext);
  const {loggedIn, logIn, logOut} = context;
  const addToList = (group: Group[]) => {
    setMyGroups(group);
  }
  const locationPath = useLocation();
  return (
    loading
      ? <div>Loading</div>
      :
      <>
        <NavBar headers={headers} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
        {locationPath.pathname === "/created" ? <><AddGroupForm categories={categories} add={addNewGroup}/> <h3>Groups I
          created.</h3>
          <ListOfTeams list={groupsCreatedByMe} loggedIn={loggedIn} removeGroup={removeGroup}/></> : <>
          <section className="section"><h3>Groups I
            joined.</h3>
            <ListOfTeams list={myGroups} loggedIn={loggedIn} addToList={addToList}/></section>
        </>
        }
        <Toaster/>
      </>
  );
};
export default TeamsView;

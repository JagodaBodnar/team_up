import NavBar from "../components/NavBar.tsx";
import {
  categories,
  headers,
  mockedGroupsICreated,
  mockedGroupsIJoined,
} from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {Group} from "../types/type.tsx";
import {useContext, useState} from "react";
import RootContext from "../context/Context.tsx";
import {Toaster} from "react-hot-toast";
import {useLocation} from "react-router-dom";

const TeamsView = () => {
  const [myGroups, setMyGroups] = useState<Group[]>(mockedGroupsIJoined);
  const [groupsCreatedByMe, setGroupsCreatedByMe] = useState<Group[]>(mockedGroupsICreated);
  const addNewGroup = (newGroup: Group) => {
    const groups = [...groupsCreatedByMe, newGroup];
    setGroupsCreatedByMe(groups);
  };
  const removeGroup = (id: string) => {
    const filteredGroups = groupsCreatedByMe.filter(element => element.id !== id)
    setGroupsCreatedByMe(filteredGroups);
  }

  const context = useContext(RootContext);
  const {loggedIn, logIn, logOut} = context;
  const addToList = (group: Group[]) => {
    setMyGroups(group);
  }
  const locationPath = useLocation();
  return (
    <>
      <NavBar headers={headers} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
      {locationPath.pathname === "/created" ? <><AddGroupForm categories={categories} add={addNewGroup}/> <h3>Groups I created.</h3>
        <ListOfTeams list={groupsCreatedByMe} loggedIn={loggedIn} removeGroup={removeGroup}/></> : <><section className="section"><h3>Groups I
        joined.</h3>
        <ListOfTeams list={myGroups} loggedIn={loggedIn} addToList={addToList} /></section></>
      }
      <Toaster/>
    </>
  );
};
export default TeamsView;

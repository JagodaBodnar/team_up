import NavBar from "../components/NavBar.tsx";
import {categories, headers, mockedMyList} from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {Group} from "../types/type.tsx";
import {useContext, useState} from "react";
import RootContext from "../context/Context.tsx";

const TeamsView = () => {
  const [myGroups, setMyGroups] = useState<Group[]>(mockedMyList);
  const addNewGroup = (newGroup: Group) => {
    mockedMyList.push(newGroup);
    const groups = [...mockedMyList];
    setMyGroups(groups);
  };
  const removeGroup =(id: string)=>{
    const filteredGroups = myGroups.filter(element=> element.id !== id)
    setMyGroups(filteredGroups);
  }


  const context = useContext(RootContext);
  const {loggedIn, logIn, logOut} = context;


  return (
    <>
      <NavBar headers={headers} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
      <AddGroupForm categories={categories} add={addNewGroup}/>
      <ListOfTeams list={myGroups} loggedIn={loggedIn} removeGroup={removeGroup}/>
    </>
  );
};
export default TeamsView;

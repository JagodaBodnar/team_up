import NavBar from "../components/NavBar.tsx";
import {categories, headers, mockedGroupsData} from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {Group} from "../types/type.tsx";
import {useContext, useState} from "react";
import RootContext from "../context/Context.tsx";

const TeamsView = () => {
  const [listOfTeams, setListOfTeams] = useState<Group[]>(mockedGroupsData);
  const addNewGroup = (newGroup: Group) => {
    mockedGroupsData.push(newGroup);
    const groups = [...mockedGroupsData];
    setListOfTeams(groups);
  };

  // const addToList =(updatedTeam: Group)=>{
  //   setListOfTeams([...mockedGroupsData, updatedTeam])
  // }
  const context = useContext(RootContext);
  const {loggedIn, logIn, logOut} = context;


  return (
    <>
      <NavBar headers={headers} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
      <AddGroupForm categories={categories} add={addNewGroup}/>
      <ListOfTeams list={listOfTeams} loggedIn={loggedIn}/>
    </>
  );
};
export default TeamsView;

import NavBar from "../components/NavBar.tsx";
import { categories, headers, mockedGroupsData } from "../data/data.tsx";
import AddGroupForm from "../components/AddGroupForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import { Group } from "../types/type.tsx";
import { useState } from "react";

const TeamsView = () => {
  const [listOfTeams, setListOfTeams] = useState<Group[]>(mockedGroupsData);
  const addNewGroup = (newGroup: Group) => {
    console.log("test");
    mockedGroupsData.push(newGroup);
    const groups = [...mockedGroupsData];
    console.log(newGroup);
    setListOfTeams(groups);
  };

  return (
    <>
      <NavBar headers={headers} />
      <AddGroupForm categories={categories} add={addNewGroup} />
      <ListOfTeams list={listOfTeams} />
    </>
  );
};
export default TeamsView;

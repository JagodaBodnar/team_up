import NavBar from "../components/NavBar.tsx";
import SearchForm from "../components/SearchForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {useContext, useEffect, useState} from "react";
import {Group, Header, SportCategory} from "../types/type.tsx";
import {categories, headers, headers2, mockedGroupsData} from "../data/data.tsx";
import RootContext from "../context/Context.tsx";


const HomeView = () => {
  const [navHeaders, setNavHeaders] = useState<Header[]>(headers);
  const [sportCategory, setSportCategory] =
    useState<SportCategory[]>(categories);
  const [listOfTeams, setListOfTeams] = useState<Group[]>(mockedGroupsData);

  const context = useContext(RootContext);
  const {logIn, logOut, loggedIn} = context;

  useEffect(() => {
    getData();
  }, [loggedIn]);

  const getData = () => {
    if (loggedIn) {
      setNavHeaders(headers);
    } else {
      setNavHeaders(headers2);
    }
    setSportCategory(categories);
    setListOfTeams(mockedGroupsData);
  };

  const filterGroups = (location: string, sport: string) => {
    const groups = mockedGroupsData.filter((element) => {
      if (sport === "All") {
        return element.location.toLowerCase().includes(location.toLowerCase());
      } else {
        return (
          element.location.toLowerCase().includes(location.toLowerCase()) &&
          element.category.toLowerCase().includes(sport.toLowerCase())
        );
      }
    });
    setListOfTeams(groups);
  };
  const addToList =(group: Group[])=>{
    setListOfTeams(group);
  }

  return (
    <>
      <NavBar headers={navHeaders} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
      <SearchForm categories={sportCategory} filter={filterGroups}/>
      <ListOfTeams list={listOfTeams} loggedIn={loggedIn} addToList={addToList}/>
    </>
  );
};
export default HomeView;

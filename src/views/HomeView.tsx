import NavBar from "../components/NavBar.tsx";
import SearchForm from "../components/SearchForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import { useEffect, useState } from "react";
import { Group, Header, SportCategory } from "../types/type.tsx";
import { categories, headers, mockedGroupsData } from "../data/data.tsx";

const HomeView = () => {
  const [navHeaders, setNavHeaders] = useState<Header[]>(headers);
  const [sportCategory, setSportCategory] =
    useState<SportCategory[]>(categories);
  const [listOfTeams, setListOfTeams] = useState<Group[]>(mockedGroupsData);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setNavHeaders(headers);
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

  return (
    <>
      <NavBar headers={navHeaders} />
      <SearchForm categories={sportCategory} filter={filterGroups} />
      <ListOfTeams list={listOfTeams} loggedIn={false}/>
    </>
  );
};
export default HomeView;

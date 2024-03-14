import NavBar from "../components/NavBar.tsx";
import SearchForm from "../components/SearchForm.tsx";
import ListOfTeams from "../components/ListOfTeams.tsx";
import {useContext, useEffect, useState} from "react";
import {Group, Header, SportCategory} from "../types/type.tsx";
import {categories, headers, headers2, mockedAllGroups} from "../data/data.tsx";
import RootContext from "../context/Context.tsx";
import {Toaster} from "react-hot-toast";
// import {DotLoader} from "react-spinners";
// const override: CSSProperties = {
//   position: "absolute",
//   left: "50%",
//   top: "50%",
// };


const HomeView = () => {
  const [navHeaders, setNavHeaders] = useState<Header[]>(headers);
  const [sportCategory, setSportCategory] =
    useState<SportCategory[]>(categories);
  // const [loading, setLoading] = useState(true)
  const [listOfTeams, setListOfTeams] = useState<Group[]>(mockedAllGroups);

  const context = useContext(RootContext);
  const {logIn, logOut, loggedIn} = context;

  useEffect(() => {
    getData();
  }, [loggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getData = () => {
    if (loggedIn) {
      setNavHeaders(headers);
    } else {
      setNavHeaders(headers2);
    }
    setSportCategory(categories);
    fetchTeams();
  };

  const fetchTeams = () => {
    fetch("http://localhost:8080/api/teams")
      .then(res => res.json())
      .then(res => {setListOfTeams(res)})
      .catch(err => console.log(err))
  }

  const filterGroups = (location: string, sport: string) => {
    console.log(location, sport)
    fetch(`http://localhost:8080/api/teams?location=${location}&category=${sport}`)
      .then(res=> res.json())
      .then(res=> setListOfTeams(res))
      .catch(err => console.log(err))
  };
  const addToList = (group: Group[]) => {
    console.log('test')
    setListOfTeams(group);
  }
  return (
    // loading
    //   ?  <DotLoader
    //         color={'#7c3aed'}
    //         loading={loading}
    //         cssOverride={override}
    //         size={150}
    //         aria-label="Loading Spinner"
    //         data-testid="loader"
    //       />
    //   :
      <>
        <NavBar headers={navHeaders} loggedIn={loggedIn} logIn={logIn} logOut={logOut}/>
        <SearchForm categories={sportCategory} filter={filterGroups}/>
        <ListOfTeams list={listOfTeams} loggedIn={loggedIn} addToList={addToList}/>
        <Toaster/>
      </>
  );
};
export default HomeView;

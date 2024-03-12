import {Group} from "../types/type.tsx";
import {mockedGroupsData} from "../data/data.tsx";
import {useLocation} from "react-router-dom";

// import {useState} from "react";

interface CardProp {
  team: Group;
  loggedIn: boolean,
  addToList?: ((group: Group[]) => void) | undefined
  removeGroup?: ((id: string) => void)
}

const Card = ({team, loggedIn, addToList, removeGroup}: CardProp) => {
  const addNameToList = () => {
    const updatedMockedGroupsData = mockedGroupsData
      .map((element: Group) => {
        if (element.id === team.id) {
          const index = element.listOfPeople.findIndex(el => el.name === '');
          element.listOfPeople[index] = {
            id: '123456',
            name: "Jack Black"
          }
        }
        return element;
      });
    if (addToList !== undefined) {
      addToList(updatedMockedGroupsData);
    }
  }
  const deleteGroup =()=>{
    if(removeGroup !== undefined){
      removeGroup(team.id)
    }
  }
  const locationPath = useLocation();
  const {category, date, location, startTime, listOfPeople, availableSpots} = team;
  return (
    <div className="card-wrapper">
      <h3>{category}</h3>
      <h5>
        Date: {date} {startTime}
      </h5>
      <h4>{location}</h4>
      <hr/>
      {!loggedIn && <span>Available spots: {availableSpots} </span>}
      {loggedIn && listOfPeople.map((element, index) => {
        const {id, name} = element;
        return (
          <li key={id}>{index + 1}. {name}</li>
        )
      })}
      {loggedIn && availableSpots > 0 && locationPath.pathname !== '/teams' &&
          <button className="btn-blue" onClick={addNameToList}>Add</button>}
      {loggedIn  && locationPath.pathname === '/teams' && <button className="delete" onClick={deleteGroup}>Remove group</button>}
    </div>
  );
};
export default Card;

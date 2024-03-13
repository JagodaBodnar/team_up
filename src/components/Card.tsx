import {Group} from "../types/type.tsx";
import {useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import {mockedAllGroups, mockedGroupsIJoined} from "../data/data.tsx";


interface CardProp {
  team: Group;
  loggedIn: boolean;
  addToList?: ((group: Group[]) => void) | undefined;
  removeGroup?: ((id: string) => void);
}

const Card = ({team, loggedIn, addToList, removeGroup}: CardProp) => {
  const addNameToList = () => {
    const updatedMockedGroupsData = mockedAllGroups
      .map((element: Group) => {
        if (element.id === team.id) {
          const index = element.listOfPeople.findIndex(el => el.name === '');
          element.listOfPeople[index] = {
            id: '123456',
            name: "Jagoda Bodnar"
          }
          mockedGroupsIJoined.push(element)
        }
        return element;
      });
    if (addToList !== undefined) {
      addToList(updatedMockedGroupsData);
      notify()
    }
  }
  const removeNameFromList = () => {
    const updatedMockedGroupsData = mockedGroupsIJoined
      .map((element: Group) => {
        if (element.id === team.id) {
          console.log(element)
          const index = element.listOfPeople.findIndex(el => el.id === '123456');
          element.listOfPeople[index] = {id: '', name: ''}
        }
        return element;
      });
    if (addToList !== undefined) {
      addToList(updatedMockedGroupsData);
      notify2();
    }
  }
  const checkIfIsOnList = () => {
    return team.listOfPeople.filter(el => el.id === '123456').length > 0;
  }
  const checkIfIsCreatedBy = ()=>{
    return team.createdBy === "JagodaBodnar";
  }
  const displayAddButton = () => {
    return loggedIn && availableSpots > 0 && locationPath.pathname === '/' && !checkIfIsOnList()
  }
  const displayRemoveButton =()=>{
    return (locationPath.pathname === '/joined' || locationPath.pathname === '/') && !checkIfIsCreatedBy() && loggedIn  && checkIfIsOnList();
  }
  const displayRemoveGroup =()=>{
    return loggedIn && locationPath.pathname === '/created'
  }
  const notify = () => toast('Successfully added to the team.');
  const notify2 = () => toast('Successfully removed from the team.');
  const notify3 = () => toast('Successfully removed the group.');
  const deleteGroup = () => {
    if (removeGroup !== undefined) {
      removeGroup(team.id)
      notify3();
    }
  }
  const locationPath = useLocation();
  const {category, date, location, startTime, listOfPeople, availableSpots} = team;
  return (
    <div className="card-wrapper">
      <h3 className="bold-text">{category}</h3>
      <h5>
        Date: <span className="bold-text">{date} {startTime}</span>
      </h5>
      <h4 className="bold-text">{location}</h4>
      <hr className="break-line"/>
      {!loggedIn && <span>Available spots: {availableSpots} </span>}
      {loggedIn && listOfPeople.map((element, index) => {
        const {id, name} = element;
        return (
          <li key={id}>{index + 1}. {name}</li>
        )
      })}
      {displayAddButton() && <button className="btn-blue" onClick={addNameToList}>Add</button>}
      {displayRemoveButton() && <button className="btn-blue" onClick={removeNameFromList}>Remove</button>}
      {displayRemoveGroup() && <button className="delete" onClick={deleteGroup}>Remove group</button>}
    </div>
  );
};
export default Card;

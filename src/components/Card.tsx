import {Group} from "../types/type.tsx";
import {useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import {useState} from "react";


interface CardProp {
  team: Group;
  loggedIn: boolean;
  addToList?: ((group: Group[]) => void) | undefined;
  removeGroup?: ((id: string) => void);
}

const Card = ({team, loggedIn, addToList, removeGroup}: CardProp) => {
  const [visible, setVisible] = useState(false);
  const joinTeam = () => {
    fetch(`http://localhost:8080/api/teams/${team.id}/joinTeam/d29bc9c3-d1bb-4766-8315-0745179b9d8d`, {
      method: "POST",
    })
      .then(res => res.json())
      .then(res => {
        if (addToList !== undefined) {
          addToList(res);
          toast.success('Successfully joined the team!')
        }
      })
      .catch(err => console.log(err))

  }
  const leaveTeam = () => {
    const url = locationPath.pathname === "/"
      ? `http://localhost:8080/api/teams/${team.id}/leaveTeam/d29bc9c3-d1bb-4766-8315-0745179b9d8d`
      : `http://localhost:8080/api/teams/${team.id}/joined/leaveTeam/d29bc9c3-d1bb-4766-8315-0745179b9d8d`;
    fetch(`${url}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(res => {
        if (addToList !== undefined) {
          addToList(res);
          toast.success('Successfully left the team!')
        }
      })
      .catch(err => console.log(err))
  }
  const checkIfIsOnList = () => {
    return team.userList.filter(el => el.id === 'd29bc9c3-d1bb-4766-8315-0745179b9d8d').length > 0;
  }
  const checkIfIsCreatedBy = () => {
    return team.createdBy === "d29bc9c3-d1bb-4766-8315-0745179b9d8d";
  }
  const displayAddButton = () => {
    return loggedIn && availableSpots > 0 && locationPath.pathname === '/' && !checkIfIsOnList()
  }
  const displayRemoveButton = () => {
    return (locationPath.pathname === '/joined' || locationPath.pathname === '/') && !checkIfIsCreatedBy() && loggedIn && checkIfIsOnList();
  }
  const displayRemoveGroup = () => {
    return loggedIn && locationPath.pathname === '/created'
  }
  const displayShowContacts = () => {
    return loggedIn && !visible;
  }
  const displayHideContacts = () => {
    return loggedIn && visible;
  }
  const deleteGroup = () => {
    if (removeGroup !== undefined) {
      removeGroup(team.id)
      toast.success('Successfully removed the group.')
    }
  }
  const toggleContact = () => {
    setVisible(!visible)
  }
  const locationPath = useLocation();
  const {category, location, dateTime, maxSpots, userList, bookedSpots, availableSpots} = team;
  const userListMapped = new Array(maxSpots).fill('')
  userListMapped.splice(0, bookedSpots, ...userList)
  return (
    <div className="card-wrapper">
      <h3 className="bold-text">{category}</h3>
      <h5>
        Date: <span className="bold-text">{dateTime}</span>
      </h5>
      <h4 className="bold-text">{location}</h4>
      <hr className="break-line"/>
      {!loggedIn && <span>Available spots: {availableSpots} </span>}
      {loggedIn && userListMapped.map((element, index) => {
        const {name, contact} = element;
        return (
          <li key={index} className="flex items-center justify-between">
            <div>{index + 1}. {name} </div>
            <h5 className={visible ? "text-xs show" : " text-xs hide"}>{contact}</h5>
          </li>
        )
      })}
      <div className="button-container">
        {displayShowContacts() && <button className="btn-gray" onClick={toggleContact}>Show contacts</button>}
        {displayHideContacts() && <button className="btn-gray" onClick={toggleContact}>Hide contacts</button>}
        {displayAddButton() && <button className="btn-blue" onClick={joinTeam}>Join</button>}
        {displayRemoveButton() && <button className="btn-blue" onClick={leaveTeam}>Leave</button>}
        {displayRemoveGroup() && <button className="btn-blue" onClick={deleteGroup}>Remove group</button>}
      </div>
    </div>
  );
};
export default Card;

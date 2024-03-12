import {Group} from "../types/type.tsx";
// import {mockedGroupsData} from "../data/data.tsx";
// import listOfTeams from "./ListOfTeams.tsx";

interface CardProp {
  team: Group;
  loggedIn: boolean,
}

const Card = ({team, loggedIn}: CardProp) => {
  // const addNameToList = (e: any) => {
  //   const updatedMockedGroupsData = mockedGroupsData
  //     .filter((element: Group) => element.id === team.id)
  //     .map((element: Group) => {
  //       const index = element.listOfPeople.findIndex(el=> el.name === '') + 1;
  //       element.listOfPeople[index] = {
  //         id: '123456',
  //         name: "Ble ble"
  //       }
  //       return element;
  //     })[0];
  //   addToList(updatedMockedGroupsData);
  //   console.log(listOfTeams);
  // }
  const {category, date, location, startTime, listOfPeople, availableSpots} = team;
  return (
    <div className="card-wrapper">
      <h3>{category}</h3>
      <h5>
        Date: {date} {startTime}
      </h5>
      <h4>{location}</h4>
      {!loggedIn && <span>Available spots: {availableSpots} </span>}
      {loggedIn && listOfPeople.map((element, index) => {
        const {id, name} = element;
        return (
          <li key={id}>{index + 1}.{name}</li>
        )
      })}
      {loggedIn && availableSpots > 0 && <button className="btn-blue">Add</button>}
    </div>
  );
};
export default Card;

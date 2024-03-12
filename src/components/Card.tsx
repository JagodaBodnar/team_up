import { Group } from "../types/type.tsx";

interface CardProp {
  team: Group;
  loggedIn: boolean
}

const Card = ({ team, loggedIn }: CardProp) => {
  const addNameToList=()=>{

  }
  const { category, date, location, startTime, listOfPeople, availableSpots } = team;
  return (
    <div className="card-wrapper">
      <h3>{category}</h3>
      <h5>
        Date: {date} {startTime}
      </h5>
      <h4>{location}</h4>
      {/*<span>Available spots: {availableSpots} </span>*/}
      {loggedIn && listOfPeople.map((element, index)=>{
        const {id, name} = element;
        return(
          <li key={id}>{index+1}.{name}</li>
        )
      })}
      {loggedIn && availableSpots > 0 && <button onClick={addNameToList}>Add</button>}
    </div>
  );
};
export default Card;

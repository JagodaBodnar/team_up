import {Group} from "../types/type.tsx";

interface CardProp {
  team: Group,
}

const Card = ({team}: CardProp) => {
  const {category, date, location, availableSpots, startTime, endTime} = team;
  return (
    <div className="card-wrapper">
      <h3>{category}</h3>
      <h5>Date: {date} {startTime} - {endTime}</h5>
      <h4>{location}</h4>
      <span>Available spots: {availableSpots} </span>
    </div>
  )
}
export default Card;
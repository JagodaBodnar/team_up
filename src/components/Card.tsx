import {Group} from "../types/type.tsx";
import './Card.css'

interface CardProp {
  team: Group,
}

const Card = ({team}: CardProp) => {
  const {category, date, location, availableSpots, startTime, endTime} = team;
  return (
    <div className="card__container">
      <h4>{category}</h4>
      <h4>Date: {date} {startTime} - {endTime}</h4>
      <h4>{location}</h4>
      <span>Available spots: {availableSpots} </span>
    </div>
  )
}
export default Card;
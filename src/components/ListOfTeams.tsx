import {Group} from "../types/type.tsx";
import Card from "./Card.tsx";

interface ListOfTeamsProp {
  list: Group[],
  loggedIn: boolean,
}

const ListOfTeams = ({list, loggedIn}: ListOfTeamsProp) => {
  return (
    <ul className="card-container">
      {list.length === 0 ? <div>No results.</div> : list.map(team => {
        return (
          <Card key={team.id} team={team} loggedIn={loggedIn}/>
        )
      })}
    </ul>
  )
}
export default ListOfTeams;
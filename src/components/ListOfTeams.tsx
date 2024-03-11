import {Group} from "../types/type.tsx";
import Card from "./Card.tsx";

interface ListOfTeamsProp{
  list: Group[],
}
const ListOfTeams =({list}:ListOfTeamsProp)=>{
  return(
    <ul className="card-container">
      {list.map(team=>{
        return(
          <Card key={team.id} team={team}/>
        )
      })}
    </ul>
  )
}
export default ListOfTeams;
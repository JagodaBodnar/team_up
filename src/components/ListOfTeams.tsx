import {Group} from "../types/type.tsx";
import Card from "./Card.tsx";

interface ListOfTeamsProp {
  list: Group[],
  loggedIn: boolean,
  addToList?: (group: Group[]) => void;
  removeGroup?: (id: string) => void;
}

const ListOfTeams = ({list, loggedIn, addToList, removeGroup}: ListOfTeamsProp) => {
  return (
    <ul className="card-container">
      {list.length === 0 ? <div>Nothing here.</div> : list.map(team => {
        return (
          <Card key={team.id} team={team} loggedIn={loggedIn} addToList={addToList} removeGroup={removeGroup} />
        )
      })}
    </ul>
  )
}
export default ListOfTeams;
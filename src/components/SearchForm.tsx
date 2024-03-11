import {SportCategory} from "../types/type.tsx";
import {FormEvent} from "react";

interface SearchFormProp {
  categories: SportCategory[];
  filter: (a:string, b:string) => void;
}
type SearchFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    searchByLocation: { value: string };
    selectSportCategory: { value: string };
  };
};

const SearchForm = ({categories, filter}: SearchFormProp) => {
  const handleSubmit = (e: SearchFormEvent) => {
    const {searchByLocation, selectSportCategory} = e.target;
    e.preventDefault();
    const location = searchByLocation.value;
    const sport = selectSportCategory.value;
    console.log(location, sport);
    filter(location, sport);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchByLocation">Enter location:</label>
      <input name="searchByLocation" id="searchByLocation" type="text"/>
      <label>Choose sport category:</label>
      <select name="selectSportCategory">
        {categories.map((element) => {
          const {id, category} = element;
          return (
            <option key={id} value={category.toLowerCase()}>{category}</option>
          )
        })}
      </select>
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchForm;
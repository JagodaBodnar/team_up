import { SportCategory } from "../types/type.tsx";
import { FormEvent } from "react";

interface SearchFormProp {
  categories: SportCategory[];
  filter: (a: string, b: string) => void;
}

type SearchFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    searchByLocation: { value: string };
    selectSportCategory: { value: string };
  };
};

const SearchForm = ({ categories, filter }: SearchFormProp) => {
  const handleSubmit = (e: SearchFormEvent) => {
    const { searchByLocation, selectSportCategory } = e.target;
    e.preventDefault();
    const location = searchByLocation.value;
    const sport = selectSportCategory.value;
    filter(location, sport);
  };
  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="searchByLocation">Enter location:</label>
        <input
          name="searchByLocation"
          id="searchByLocation"
          type="text"
          className="input"
        />
        <label>Choose sport category:</label>
        <select name="selectSportCategory" className="input">
          {categories.map((element) => {
            const { id, category } = element;
            return (
              <option key={id} value={category.toLowerCase()}>
                {category}
              </option>
            );
          })}
        </select>
        <button type="submit" className="btn-blue form-button">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;

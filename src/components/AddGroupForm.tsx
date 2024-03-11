import {FormEvent, useRef, useState} from "react";
import {SportCategory} from "../types/type.tsx";
import DateTimePicker from "react-datetime-picker";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
type SearchFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    locationInput: { value: string };
    categoryInput: { value: string };
    spotsInput: { value: string };
  };
};
type Value = Date | null;
interface SearchFormProp {
  categories: SportCategory[];
}

const AddGroupForm = ({categories}: SearchFormProp) => {
  const [locationError, setLocationError] = useState<string>('');
  const [categoryError, setCategoryError] = useState<string>('');
  const [spotsError, setSpotsError] = useState<string>('');
  const [value, onChange] = useState<Value>(new Date());
  const handleSubmit = (e: SearchFormEvent) => {
    const {categoryInput, locationInput, spotsInput} = e.target;
    e.preventDefault();
    console.log(categoryInput, locationInput);
    const category = categoryInput.value;
    const location = locationInput.value;
    const maxSpots = spotsInput.value;
    if (validateCategory() && validateLocation() && validateSpots()) {
      console.log("Form submitted", category, location, maxSpots)
    } else {
      return;
    }
  }
  const locationInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLSelectElement>(null);
  const spotsInputRef = useRef<HTMLInputElement>(null);
  const validateLocation = () => {
    if (locationInputRef.current?.value.length === 0) {
      setLocationError('Input cannot be empty.')
      return false;
    } else {
      setLocationError('');
      return true;
    }
  }
  const validateCategory = () => {
    console.log(categoryInputRef.current?.value)
    if (categoryInputRef.current?.value === "all") {
      console.log('test')
      setCategoryError("Please choose category.")
      return false;
    } else {
      setCategoryError('');
      return true;
    }
  }
  const validateSpots = () => {
    console.log(spotsInputRef.current?.value)
    const spots = spotsInputRef.current ? +spotsInputRef.current.value : 1;
    if (spots < 2 || spots > 20) {
      setSpotsError("Choose amount of players from range 2-20.")
      return false;
    } else {
      setSpotsError('');
      return true;
    }
  }
  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="locationInput">Enter location:</label>
        <input name="locationInput" id="locationInput" type="text" className="input" ref={locationInputRef}
               onChange={validateLocation}/>
        {locationError !== '' && <span className="error">{locationError}</span>}
        <label>Choose sport category:</label>
        <select name="categoryInput" className="input" ref={categoryInputRef} onChange={validateCategory}>
          {categories.map((element) => {
            const {id, category} = element;
            return (
              <option key={id} value={category.toLowerCase()}>{category}</option>
            )
          })}
        </select>
        {categoryError !== '' && <span className="error">{categoryError}</span>}

        <label htmlFor="spotsInput">Enter max amount of players:</label>
        <input name="spotsInput" id="spotsInput" type="number" min="2" max="20" className="input" ref={spotsInputRef}
               onChange={validateSpots}/>
        {spotsError !== '' && <span className="error">{spotsError}</span>}
        <button type="submit" className="btn-blue form-button">Add group</button>
      </form>
      <label>Choose date and time</label>
      <div>
        <DateTimePicker onChange={onChange} value={value}/>
      </div>
    </section>
  )
}
export default AddGroupForm;
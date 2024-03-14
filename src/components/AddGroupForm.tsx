import {FormEvent, useRef, useState} from "react";
import {Group, SportCategory} from "../types/type.tsx";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import dayjs, {Dayjs} from "dayjs";
import {
  validateCategory,
  validateDate,
  validateLocation,
  validateSpots,
} from "../validators/validators.tsx";
import toast from "react-hot-toast";


type SearchFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    locationInput: { value: string };
    categoryInput: { value: string };
    spotsInput: { value: string };
  };
};

interface SearchFormProp {
  categories: SportCategory[];
  add: (newGroup: Group[]) => void;
}

const AddGroupForm = ({categories, add}: SearchFormProp) => {
  const [locationError, setLocationError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [spotsError, setSpotsError] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [dateError, setDateError] = useState("");
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs(new Date()));

  const handleSubmit = (e: SearchFormEvent) => {
    e.preventDefault();
    const {categoryInput, locationInput, spotsInput} = e.target;
    const category = categoryInput.value;
    const location = locationInput.value;
    const maxSpots = spotsInput.value;
    if (
      validateLocation(locationInputRef, setLocationError) &&
      validateCategory(categoryInputRef, setCategoryError) &&
      validateSpots(spotsInputRef, setSpotsError) &&
      validateDate(date, setDate, setDateError)
    ) {
      const dateFormatted = `${date?.toDate().toLocaleDateString()}`;
      const newGroup = {
        category: category,
        location: location,
        dateTime: `${dateFormatted} ${startTime
          ?.toDate()
          .toLocaleTimeString()
          .replace(/(.*)\D\d+/, "$1")}`,
        maxSpots: maxSpots,
        createdBy: "d29bc9c3-d1bb-4766-8315-0745179b9d8d"
      };
      resetInputs()
      fetch("http://localhost:8080/api/teams", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newGroup)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          add(res);
          notify();
        })
    } else {
      return;
    }
  };
  const notify = () => toast('Successfully added new group.');
  const resetInputs = () => {
    locationInputRef.current!.value = ''
    categoryInputRef.current!.value = 'All'
    spotsInputRef.current!.value = ''
    setDate(dayjs(new Date()))
  }
  const locationInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLSelectElement>(null);
  const spotsInputRef = useRef<HTMLInputElement>(null);
  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="locationInput">Enter location:</label>
        <input
          name="locationInput"
          id="locationInput"
          type="text"
          className="input"
          ref={locationInputRef}
          onChange={() => validateLocation(locationInputRef, setLocationError)}
          onBlur={() => validateLocation(locationInputRef, setLocationError)}
        />
        {locationError !== "" && <span className="error">{locationError}</span>}
        <label>Choose sport category:</label>
        <select
          name="categoryInput"
          className="input"
          ref={categoryInputRef}
          onChange={() => validateCategory(categoryInputRef, setCategoryError)}
          onBlur={() => validateCategory(categoryInputRef, setCategoryError)}
        >
          {categories.map((element) => {
            const {id, category} = element;
            return (
              <option key={id} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        {categoryError !== "" && <span className="error">{categoryError}</span>}
        <label htmlFor="spotsInput">Enter max amount of players:</label>
        <input
          name="spotsInput"
          id="spotsInput"
          type="number"
          min="2"
          max="20"
          className="input"
          ref={spotsInputRef}
          onChange={() => validateSpots(spotsInputRef, setSpotsError)}
          onBlur={() => validateSpots(spotsInputRef, setSpotsError)}
        />
        {spotsError !== "" && <span className="error">{spotsError}</span>}
        <div className="date-time-picker__wrapper">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Enter date"
                onChange={(value: Dayjs | null) =>
                  validateDate(value, setDate, setDateError)
                }
                value={date}
              />
            </DemoContainer>
          </LocalizationProvider>
          {window.innerWidth < 1200 && dateError !== "" && <span className="error">{dateError}</span>}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <TimePicker
                label="Start time"
                value={startTime}
                onChange={(newValue: Dayjs | null) => setStartTime(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        {window.innerWidth > 1200 && dateError !== "" && <span className="error">{dateError}</span>}
        <button type="submit" className="btn-blue form-button">
          Add group
        </button>
      </form>
    </section>
  );
};
export default AddGroupForm;

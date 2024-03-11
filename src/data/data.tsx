import {v4 as uuidv4} from "uuid";

export const headers = [
  {id: uuidv4(), title: "Search for team"},
  {id: uuidv4(), title: "My teams"}
]

export const categories = [
  {id: uuidv4(), category: "All"},
  {id: uuidv4(), category: "Basketball"},
  {id: uuidv4(), category: "Volleyball"},
  {id: uuidv4(), category: "Football"},
  {id: uuidv4(), category: "Squash"},
  {id: uuidv4(), category: "Hokey"},
  {id: uuidv4(), category: "Handball"},
  {id: uuidv4(), category: "Paintball"},
  {id: uuidv4(), category: "Floorball"},
]

export const mockedGroupsData = [
  {
    id: uuidv4(),
    category: "Basketball",
    date: "01-03-2024",
    startTime: "17:00",
    endTime: "18:00",
    location: "Uppsala - Fyrishov",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Basketball",
    date: "01-03-2024",
    startTime: "17:00",
    endTime: "18:00",
    location: "Stockholm - SportCenter",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Volleyball",
    date: "11-03-2024",
    startTime: "20:00",
    endTime: "22:00",
    location: "Uppsala - SportCentrum",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Volleyball",
    date: "11-03-2024",
    startTime: "19:00",
    endTime: "20:30",
    location: "Uppsala - Fyrishov",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Hockey",
    date: "02-04-2024",
    startTime: "11:00",
    endTime: "13:00",
    location: "Malmö - SportCentrum",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Floorball",
    date: "02-04-2024",
    startTime: "11:00",
    endTime: "13:00",
    location: "Göteborg - SportCentrum",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  },
  {
    id: uuidv4(),
    category: "Floorball",
    date: "02-04-2024",
    startTime: "11:00",
    endTime: "13:00",
    location: "Malmö - SportCentrum",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9
  }
]
import { v4 as uuidv4 } from "uuid";
import { Group } from "../types/type";

export const headers = [
  { id: uuidv4(), title: "Home", route: "/" },
  { id: uuidv4(), title: "My teams", route: "/teams" },
];
export const headers2 = [
  { id: uuidv4(), title: "Home", route: "/" },
];

export const categories = [
  { id: uuidv4(), category: "All" },
  { id: uuidv4(), category: "Basketball" },
  { id: uuidv4(), category: "Volleyball" },
  { id: uuidv4(), category: "Football" },
  { id: uuidv4(), category: "Squash" },
  { id: uuidv4(), category: "Hokey" },
  { id: uuidv4(), category: "Handball" },
  { id: uuidv4(), category: "Paintball" },
  { id: uuidv4(), category: "Floorball" },
];



export const mockedGroupsData: Group[] = [
  {
    id: uuidv4(),
    category: "Volleyball",
    date: "01-03-2024",
    startTime: "17:00",
    location: "Uppsala - Fyrishov",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9,
    listOfPeople: [
      { id: uuidv4(), name: "Jesse Mathis" },
      { id: uuidv4(), name: "Esha Leon" },
      { id: uuidv4(), name: "Saif Mclean" },
      { id: uuidv4(), name: "Yunus Mcdowell" },
      { id: uuidv4(), name: "Yousuf Bean" },
      { id: uuidv4(), name: "Santiago Vang" },
      { id: uuidv4(), name: 'Isabelle Bauer' },
      { id: uuidv4(), name: 'Christina Morton' },
      { id: uuidv4(), name: 'Omar Barker' },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' }
    ],
  },
  {
    id: uuidv4(),
    category: "Basketball",
    date: "01-03-2024",
    startTime: "17:00",
    location: "Stockholm - SportCenter",
    maxSpots: 8,
    availableSpots: 5,
    bookedSpots: 3,
    listOfPeople: [
      { id: uuidv4(), name: "Nicola Bauer" },
      { id: uuidv4(), name: "Rose Vargas" },
      { id: uuidv4(), name: "Karl Butler" },
      { id: uuidv4(), name: "" },
      { id: uuidv4(), name: "" },
      { id: uuidv4(), name: "" },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' },
    ],
  },
  {
    id: uuidv4(),
    category: "Basketball",
    date: "11-03-2024",
    startTime: "20:00",
    location: "Uppsala - SportCentrum",
    maxSpots: 6,
    availableSpots: 3,
    bookedSpots: 3,
    listOfPeople: [
      { id: uuidv4(), name: "Milly Cross" },
      { id: uuidv4(), name: "Nicholas Leon" },
      { id: uuidv4(), name: "Aoife Sutton" },
      { id: uuidv4(), name: "" },
      { id: uuidv4(), name: "" },
      { id: uuidv4(), name: "" },
    ],
  },
]
export const mockedMyList: Group[] = [
  {
    id: uuidv4(),
    category: "Volleyball",
    date: "01-03-2024",
    startTime: "17:00",
    location: "Uppsala - Fyrishov",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9,
    listOfPeople: [
      { id: uuidv4(), name: "Karol Leon" },
      { id: uuidv4(), name: "Abigail Pearson" },
      { id: uuidv4(), name: "Susie Davila" },
      { id: uuidv4(), name: "Harley Odonnell" },
      { id: uuidv4(), name: "Alessandro Byrne" },
      { id: uuidv4(), name: "Diego Chang" },
      { id: uuidv4(), name: "Junaid Williamson" },
      { id: uuidv4(), name: "Willie Bonilla" },
      { id: uuidv4(), name: "Jagoda Bodnar" },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' }
    ],
  },
  {
    id: uuidv4(),
    category: "Basketball",
    date: "01-03-2024",
    startTime: "17:00",
    location: "Stockholm - SportCenter",
    maxSpots: 6,
    availableSpots: 3,
    bookedSpots: 3,
    listOfPeople: [
      { id: uuidv4(), name: "Jagoda Bodnar" },
      { id: uuidv4(), name: "Louis Farley" },
      { id: uuidv4(), name: "Melisa Gross" },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' },
      { id: uuidv4(), name: '' },
    ],
  }
]
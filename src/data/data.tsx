import { v4 as uuidv4 } from "uuid";
import { Group } from "../types/type";

export const headers = [
  { id: uuidv4(), title: "Home", route: "/" },
  { id: uuidv4(), title: "Created", route: "/created" },
  { id: uuidv4(), title: "Joined", route: "/joined" },
];
export const headers2 = [];

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

export const mockedAllGroups: Group[] = [
  {
    id: uuidv4(),
    category: "Volleyball",
    createdBy: "Jesse Mathis",
    dateTime: "01-03-2024",
    location: "Uppsala - Fyrishov",
    maxSpots: 12,
    availableSpots: 3,
    bookedSpots: 9,
    userList: [],
  },

]

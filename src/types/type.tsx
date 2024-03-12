export type Header = {
  id: string;
  title: string;
  route: string;
};

export type SportCategory = {
  id: string;
  category: string;
};

export type Person ={
  id: string,
  name: string,
}

export type Group = {
  id: string;
  category: string;
  date: string;
  startTime: string | undefined;
  location: string;
  maxSpots: number;
  availableSpots: number;
  bookedSpots: number;
  listOfPeople: Person[]
};

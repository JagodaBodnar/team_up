

export type Header = {
  id: string;
  title: string;
  route: string;
};

export type SportCategory = {
  id: string;
  category: string;
};

export type Person = {
  id: string,
  name: string,
  contact: string,
}

export type Group = {
  id: string;
  category: string;
  createdBy: string;
  dateTime: string;
  location: string;
  maxSpots: number;
  availableSpots: number;
  bookedSpots: number;
  userList: Person[]
};

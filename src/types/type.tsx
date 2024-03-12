export type Header = {
  id: string;
  title: string;
  route: string;
};

export type SportCategory = {
  id: string;
  category: string;
};

export type Group = {
  id: string;
  category: string;
  date: string;
  startTime: string;
  location: string;
  maxSpots: number;
  availableSpots: number;
  bookedSpots: number;
};

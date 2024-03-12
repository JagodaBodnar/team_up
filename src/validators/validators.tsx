import { Dayjs } from "dayjs";
import { Dispatch, RefObject, SetStateAction } from "react";

export const validateSpots = (
  spotsInputRef: RefObject<HTMLInputElement>,
  setSpotsError: Dispatch<SetStateAction<string>>
) => {
  const spots = spotsInputRef.current ? +spotsInputRef.current.value : 1;
  if (spotsInputRef.current?.value.length === 0) {
    setSpotsError("Field is required.");
    return false;
  }
  if (spots < 2 || spots > 20) {
    setSpotsError("Choose amount of players from range 2-20.");
    return false;
  } else {
    setSpotsError("");
    return true;
  }
};

export const validateCategory = (
  categoryInputRef: RefObject<HTMLSelectElement>,
  setCategoryError: Dispatch<SetStateAction<string>>
) => {
  if (categoryInputRef.current?.value === "All") {
    setCategoryError("Please choose category.");
    return false;
  } else {
    setCategoryError("");
    return true;
  }
};
export const validateLocation = (
  locationInputRef: RefObject<HTMLInputElement>,
  setLocationError: Dispatch<SetStateAction<string>>
) => {
  if (locationInputRef.current?.value.length === 0) {
    setLocationError("Input cannot be empty.");
    return false;
  } else {
    setLocationError("");
    return true;
  }
};

type DateType = string | number | Date | Dayjs;

declare module "dayjs" {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string;
    from(compared: DateType, withoutSuffix?: boolean): string;
    toNow(withoutSuffix?: boolean): string;
    to(compared: DateType, withoutSuffix?: boolean): string;
  }
}
export const validateDate = (
  value: any,
  setDate: Dispatch<SetStateAction<Dayjs | null>>,
  setDateError: Dispatch<SetStateAction<string>>
) => {
  const timeNow = new Date().getTime();
  if (value?.$d.getTime() < timeNow) {
    setDateError("Date cannot be earlier or equal today.");
    return false;
  } else {
    setDate(value);
    setDateError("");
    return true;
  }
};

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>,
  textStyles?: string,
  rightIcon?: string ,
  isDisabled?: boolean
}

export interface CustomFilter {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacutrer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  combination_mpg: number;
  displacement: number;
  cylinders: number;
  highway_mpg: number;
  year: number;
  class: string;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
}

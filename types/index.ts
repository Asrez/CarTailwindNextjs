import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilter {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacutrer: (manufacturer: string) => void;
}

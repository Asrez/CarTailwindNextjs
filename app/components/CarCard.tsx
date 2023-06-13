"use client";

import { CarProps } from "@/types";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      {/*  */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">{carRent}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          width={50}
          height={50}
          alt="car model"
          className="object-contain"
          fill
          sizes=""
          src={"/hero.png"}
        />
      </div>
      <div className="relative  flex w-full mt-2">
        <div className="flex group-hover:invisible  w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              alt="steering wheel"
              src={"/steering-wheel.svg"}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Autimatic" : "Manual "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image width={20} height={20} alt="titre" src={"/tire.svg"} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              alt="steering wheel"
              src={"/steering wheel.svg"}
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            btnType="button"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;

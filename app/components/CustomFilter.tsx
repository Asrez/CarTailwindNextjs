"use client";

import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();

  const [selected, setSelected] = useState(options[0]);

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10 ">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src="chevron-up-down.svg"
              alt="chevron up down"
              className="ml-4 object-contain"
              width={10}
              height={20}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave={"transtion ease-in duration-100"}
            leaveFrom={"opacity-100"}
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

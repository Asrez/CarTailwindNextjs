"use client";

import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchMenufacturer = ({
  manufacturer,
  setManufacutrer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filtredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-3"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo "
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacurer__input"}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {
                filtredManufacturers.length === 0 && 
                query !== "" && (
                  <Combobox.Option value={query} className="search-manufacturer__options">

                  </Combobox.Option>
                )
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMenufacturer;

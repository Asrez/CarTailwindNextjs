import { CustomFilter, CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title , e.value.toLocaleLowerCase());

    router.push(newPathName);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
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
              {options.map((option) => (
                <Listbox.Option
                  value={option}
                  key={option.title}
                  className={(active) =>
                    `relative py-2 px-4 select-none cursor-default ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
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

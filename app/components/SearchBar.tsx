"use client";

import React, { useState } from "react";
import { SearchMenufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const router = useRouter();
  const [manufacutrer, setManufacutrer] = useState(""),
    [model, setModel] = useState(""),
    SearchButton = ({ otherClasses }: { otherClasses: string }) => (
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
          src={"/magnifying-glass.svg"}
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacutrer === "" && model === "") {
      return alert("Please fill in ther search bar");
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacutrer.toLocaleLowerCase()
    );
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
      <SearchMenufacturer
        manufacturer={manufacutrer}
        setManufacutrer={setManufacutrer}
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <div className='searchbar__item'>
      <Image
        src='/model-icon.png'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car model'
      />
      <input
        type='text'
        name='model'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder='Tiguan...'
        className='searchbar__input'
      />
      <SearchButton otherClasses='sm:hidden' />
    </div>
    <SearchButton otherClasses='max-sm:hidden' />
  </form>
  );
};

export default SearchBar;

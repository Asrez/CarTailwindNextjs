import Image from "next/image";
import { CustomFilter, Hero } from "./components";
import CustomButton from "./components/CustomButton";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-w" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}

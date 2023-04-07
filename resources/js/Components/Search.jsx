import React, { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";

// importing components
import AreaDropdown from "@/Components/AreaDropdown";
import PropertyDropdown from "@/Components/PropertyDropdown";
import PriceRangeDropdown from "@/Components/PriceRangeDropdown";

// import context
import { HouseContext } from "./HouseContext";

const Search = () => {
    const { handleClick } = useContext(HouseContext);
    return (
        <div className="px-[50px] py-6 mx-w-[1160px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
            <AreaDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button
                onClick={() => handleClick()}
                className="bg-adondoGreen-50 hover:bg-adondoGreen-100 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
            >
                <div className="flex gap-2 items-center">
                    <RiSearch2Line /> Search
                </div>
            </button>
        </div>
    );
};

export default Search;

import React, { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";

// importing components
import CountryDropdown from "@/Components/CountryDropdown";
import PropertyDropdown from "@/Components/PropertyDropdown";
import PriceRangeDropdown from "@/Components/PriceRangeDropdown";

// import context
import { HouseContext } from "./HouseContext";

const Search = () => {
    const { handleClick } = useContext(HouseContext);
    // const { houses } = useContext(HouseContext);
    // console.log({ houses });
    return (
        <div className="px-[30px] py-6 mx-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
            <CountryDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button
                onClick={() => handleClick()}
                className="bg-adondoGreen-50 hover:bg-adondoGreen-100 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
            >
                <RiSearch2Line />
            </button>
        </div>
    );
};

export default Search;

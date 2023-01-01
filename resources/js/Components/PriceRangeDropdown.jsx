import React, { useState, useEffect, useContext } from "react";

// importing icons
import {
    RiWallet3Line,
    RiArrowDownSLine,
    RiArrowUpSLine,
} from "react-icons/ri";

// import headless url
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
    const { price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    const prices = [
        { value: "Price range (any)" },
        { value: "R 250 - R 350" },
        { value: "R 350 - R 450" },
        { value: "R 450 - R 550" },
        { value: "R 550 - R 650" },
        { value: "R 650 - R 750" },
        { value: "R 750 - R 850" },
        { value: "R 850 - R 1000" },
    ];
    return (
        <Menu as="div" className="dropdown relative">
            <Menu.Button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="dropdown-btn w-full text-left"
            >
                <RiWallet3Line className="dropdown-icon-primary" />
                <div className="">
                    <div className="text-[15px] font-medium leading-tight">
                        {price}
                    </div>
                    <div className="text-[13px]">Select your place</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className="dropdown-icon-secondary" />
                ) : (
                    <RiArrowDownSLine className="dropdown-icon-primary ml-auto" />
                )}
            </Menu.Button>
            <Menu.Items className="dropdown-menu">
                {prices.map((price, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setPrice(price.value)}
                            className="cursor-pointer hover:text-violet-700 "
                            as="li"
                            key={index}
                        >
                            {price.value}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default PriceRangeDropdown;

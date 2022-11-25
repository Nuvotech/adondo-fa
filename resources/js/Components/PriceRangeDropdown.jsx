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
        { value: "R 2500 - R 3000" },
        { value: "R 3000 - R 3500" },
        { value: "R 3500 - R 4000" },
        { value: "R 1500 - R 2000" },
        { value: "R 2000 - R 2500" },
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
                        {price} ..
                    </div>
                    <div className="text-[13px]">Select your place</div>
                    {isOpen ? (
                        <RiArrowUpSLine className="dropdown-icon-secondary" />
                    ) : (
                        <RiArrowDownSLine className="dropdown-icon-primary" />
                    )}
                </div>
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

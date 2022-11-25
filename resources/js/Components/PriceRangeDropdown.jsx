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
        { value: "R 2 500 - R 3 000" },
        { value: "R 3 000 - R 3 500" },
        { value: "R 3 500 - R 4 000" },
        { value: "R 1 500 - R 2 000" },
        { value: "R 2 000 - R 2 500" },
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

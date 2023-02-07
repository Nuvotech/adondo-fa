import React, { useState, useEffect, useContext } from "react";

// importing icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import headless url
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const AreaDropdown = () => {
    const { area, setArea, countries } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as="div" className="dropdown relative">
            <Menu.Button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="dropdown-btn w-full text-left"
            >
                <RiMapPinLine className="dropdown-icon-primary" />
                <div>
                    <div className="text-[15px] font-medium leading-tight">
                        {area}
                    </div>
                    <div className="text-[13px]">Select an Area</div>
                </div>
                {isOpen ? (
                    <RiArrowDownSLine className="dropdown-icon-primary ml-auto" />
                ) : (
                    <RiArrowUpSLine className="dropdown-icon-secondary" />
                )}
            </Menu.Button>
            <Menu.Items className="dropdown-menu">
                {countries.map((area, index) => {
                    return (
                        <Menu.Item
                            onClick={() => setArea(area)}
                            className="cursor-pointer hover:text-violet-700 "
                            as="li"
                            key={index}
                        >
                            {area}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default AreaDropdown;

import React from "react";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaShower } from "react-icons/fa";

const House = ({ house }) => {
    const {
        image,
        imgPlaceholder,
        type,
        roomNumber,
        area,
        address,
        bedrooms,
        bathrooms,
        shower,
        surface,
        price,
        duration,
        booked,
    } = house;
    return (
        <div className="bg-white shadow-1 p-5 roun ded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
            <div className="">
                {/* {booked ? (
                    <div className="bg-adondoGreen w-full h-16 text-white inset-center flex justify-center items-center text-xl">
                        Booked
                    </div>
                ) : (
                    ""
                )} */}

                <img
                    src={imgPlaceholder ? imgPlaceholder : image}
                    alt=""
                    className="mb-8"
                />
            </div>
            <div className="mb-4 flex gap-x-2 text-xs">
                <div className="bg-adondoGreen rounded-full text-white px-3">
                    {type}
                </div>
                <div className="flex justify-between items-center gap-5">
                    <div className="bg-adondoGray rounded-full text-white px-3">
                        {area}
                    </div>
                    <div className="text-gray-900 text-xs">
                        Room No. {roomNumber}
                    </div>
                </div>
            </div>
            <div className="text-md font-medium max-w-[260px]"> {address}</div>
            <div className="flex gap-x-4 my-4">
                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <FaShower />
                    </div>
                    <div>{shower}</div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <BiBed />
                    </div>
                    <div>{bedrooms}</div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <BiArea />
                    </div>
                    <div>
                        {surface}cm<sup>2</sup>
                    </div>
                </div>
            </div>
            <div className="text-lg font-semibold text-adondoGreen-50 bm-4">
                <div>R {price}</div>
                <div className="text-xs text-gray-400 font-normal -mt-2">
                    {duration}
                </div>
            </div>
        </div>
    );
};

export default House;

import React from "react";

import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NotificationBanner = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-[#03989E] py-2 sticky top-0">
            <div className="flex items-center justify-center gap-2 md:gap-10 container mx-auto text-white text-sm">
                <div className="flex items-center gap-1">
                    <FaMobileAlt /> <span>+27 72 402 2600</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaMobileAlt /> <span>+27 83 883 1570</span>
                </div>
                <div className="flex items-center gap-1">
                    <HiOutlineMail /> <span> bookings@adondo-fa.co.za</span>
                </div>
            </div>
        </div>
    );
};

export default NotificationBanner;

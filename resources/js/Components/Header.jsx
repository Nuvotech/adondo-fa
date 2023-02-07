import React from "react";

import { Link } from "@inertiajs/inertia-react";
import Logo from "../../../public/assets/img/adondo.png";

const Header = () => {
    return (
        <header className="py-6 mb-12 bg-gray-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" preserveState>
                    <img src={Logo} alt="" className="w-32 h-15" />
                </Link>
                <div className="flex items-center gap-6">
                    <Link className="hover:text-[#03989E] hover:border-b-2 hover:border-b-[#03989E] p-1 transition">
                        About us
                    </Link>
                    <Link className="hover:text-[#03989E] hover:border-b-2 hover:border-b-[#03989E] p-1 transition">
                        {" "}
                        Contact us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

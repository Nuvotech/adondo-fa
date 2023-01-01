import React from "react";

import { Link } from "@inertiajs/inertia-react";
import Logo from "../../../public/assets/img/adondo.png";

const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" preserveState>
                    <img src={Logo} alt="" className="w-32 h-15" />
                </Link>
                <div className="flex items-center gap-6">
                    <Link className="hover:text-violet-900">Log in</Link>
                    <Link className="bg-[#03989E] hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition">
                        {" "}
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

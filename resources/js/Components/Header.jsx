import React from "react";

import { Link } from "@inertiajs/inertia-react";
import Logo from "../../../public/assets/img/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div>
                    <Link>Log in</Link>
                    <Link> Sign up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

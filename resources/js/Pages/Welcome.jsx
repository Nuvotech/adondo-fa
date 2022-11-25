import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

// import components
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

// importing pages
import Home from "./Home";
import PropertyDetails from "./PropertyDetails";

export default function Welcome(props) {
    return (
        <>
            <div className="max-w-[1440px] mx-auto bg-white">
                <Head title="Welcome" />
                <Header />
                {/* <Home />
            <PropertyDetails /> */}
                <Footer />
            </div>
        </>
    );
}

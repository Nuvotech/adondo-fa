import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";

// import components
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import { housesData } from "@/data";
import { BiArea, BiBed, BiBath } from "react-icons/bi";
import { RiWhatsappLine } from "react-icons/ri";
import { FaShower } from "react-icons/fa";
import { Inertia } from "@inertiajs/inertia";

const PropertyDetails = ({ id }) => {
    // get the house based on the id
    const house = housesData.find((house) => {
        return house.id === parseInt(id);
    });

    const { errors } = usePage().props;

    const roomName = useRef();
    const roomType = useRef();
    const roomCountry = useRef();
    const roomPrice = useRef();
    const customerName = useRef();
    const customerEmail = useRef();
    const customerPhone = useRef();
    const customerMessage = useRef();

    const handleChange = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            (customerName.current.value === "") &
            (customerPhone.current.value === "")
        ) {
            return;
        }
        Inertia.post("/property/booking/", {
            roomName: roomName.current.value,
            roomType: roomType.current.value,
            roomCountry: roomCountry.current.value,
            roomPrice: roomPrice.current.value,
            customerName: customerName.current.value,
            customerEmail: customerEmail.current.value,
            customerPhone: customerPhone.current.value,
            customerMessage: customerMessage.current.value,
        });
    };

    return (
        <>
            <div className="max-w-[1440px] mx-auto bg-white">
                <Head title="House Details" />
                <Header />
                <section>
                    <div className="container mx-auto min-h-[800px] mb-14">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">
                                    {house.name}
                                </h2>
                                <h3 className="text-lg mb-4">
                                    {house.address}
                                </h3>
                            </div>
                            <div className="mb-4 lg:mn-0 flex gap-x-2">
                                <div className="bg-adondoGreen-50 text-white px-3 rounded-full">
                                    {house.type}
                                </div>
                                <div className="bg-adondoGray text-white px-3 rounded-full">
                                    {house.country}
                                </div>
                            </div>
                            <div className="text-3xl font-semibold text-violet-600">
                                <div>R {house.price}</div>
                                <div className="text-xs text-center text-gray-400 font-normal -mt-1">
                                    {house.duration}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-8 lg:flex-row">
                            <div className="max-w-[768px]">
                                <div className="mb-8">
                                    <img src={house.imageLg} alt="" />
                                </div>
                                <div className="flex gap-x-6 text-adondoGreen-50 mb-6">
                                    <div className="flex gap-x-2 items-center ">
                                        <BiBed className="text-2xl" />
                                        <div>{house.bedrooms}</div>
                                    </div>
                                    <div className="flex gap-x-2 items-center ">
                                        <FaShower className="text-2xl" />
                                        <div>{house.shower}</div>
                                    </div>
                                    <div className="flex gap-x-2 items-center ">
                                        <BiArea className="text-2xl" />
                                        <div>{house.surface}</div>
                                    </div>
                                </div>
                                <div>{house.description}</div>
                            </div>
                            <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
                                <div className="flex items-center gap-x-4 mb-8">
                                    <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                                        <img src={house.agent.image} alt="" />
                                    </div>
                                    <div className="font-bold text-lg">
                                        {house.agent.name}
                                    </div>
                                </div>
                                {/* Contact form  */}
                                <form
                                    className="flex flex-col gap-y-4"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="hidden"
                                        value={house.name}
                                        ref={roomName}
                                    />
                                    <input
                                        type="hidden"
                                        value={house.type}
                                        ref={roomType}
                                    />
                                    <input
                                        type="hidden"
                                        value={house.country}
                                        ref={roomCountry}
                                    />
                                    <input
                                        type="hidden"
                                        value={house.price}
                                        ref={roomPrice}
                                    />
                                    <input
                                        className="border border-gray-300 focus:border-adondoGreen-50 outline-none rounded w-full px-4 h-14 text-sm"
                                        type="text"
                                        placeholder="Name*"
                                        ref={customerName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.customerName && (
                                        <div className="text-xs text-red-600">
                                            {errors.customerName}
                                        </div>
                                    )}
                                    <input
                                        className="border border-gray-300 focus:border-adondoGreen-50 outline-none rounded w-full px-4 h-14 text-sm"
                                        type="text"
                                        placeholder="Email"
                                        ref={customerEmail}
                                        onChange={handleChange}
                                    />
                                    {errors.customerEmail && (
                                        <div className="text-xs text-red-600 -mt-4">
                                            {errors.customerEmail}
                                        </div>
                                    )}
                                    <input
                                        className="border border-gray-300 focus:border-adondoGreen-50 outline-none rounded w-full px-4 h-14 text-sm"
                                        type="text"
                                        placeholder="Phone*"
                                        ref={customerPhone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.customerPhone && (
                                        <div className="text-xs text-red-600 -mt-4">
                                            {errors.customerPhone}
                                        </div>
                                    )}
                                    <textarea
                                        className="border border-gray-300 focus:border-adondoGreen-50 outline-none resize-none rounded w-full px-4 h-36 text-sm text-gray-400"
                                        placeholder="Message*"
                                        defaultValue="Hi, I am interested in the Duplex room"
                                        ref={customerMessage}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.customerMessage && (
                                        <div className="text-xs text-red-600 -mt-4">
                                            {errors.customerMessage}
                                        </div>
                                    )}
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            className="bg-adondoGreen-50 hover:bg-adondoGreen-100 text-white rounded p-4 text-sm w-full transition"
                                        >
                                            Send message
                                        </button>
                                        <button className="border border-adondoGreen-50 text-adondoGreen-50 hover:border-adondoGreen-100 hover:text-adondoGreen-100 rounded p-4 text-sm w-full transition">
                                            Call
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default PropertyDetails;

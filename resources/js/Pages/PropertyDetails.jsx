import React, { useRef, useState } from "react";
import { Head, usePage, useForm } from "@inertiajs/inertia-react";

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
    const [previeImage, setPreviewIamge] = useState(house.imageLg);

    const { processing } = useForm();

    const { errors, flash } = usePage().props;

    const roomName = useRef();
    const roomType = useRef();
    const roomArea = useRef();
    const roomPrice = useRef();
    const customerName = useRef();
    const customerEmail = useRef();
    const customerPhone = useRef();
    const customerMessage = useRef();
    const checkInDate = useRef();
    const checkOutDate = useRef();

    const handleChange = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            (customerName.current.value === "") &
            (customerPhone.current.value === "")
        ) {
            return;
        }
        const clearForm = () => {
            customerName.current.value = "";
            customerEmail.current.value = "";
            customerPhone.current.value = "";
            customerMessage.current.value = "";
            checkInDate.current.value = "";
            checkOutDate.current.value = "";
        };
        Inertia.post(
            "/property/booking/",
            {
                roomName: roomName.current.value,
                roomType: roomType.current.value,
                roomArea: roomArea.current.value,
                roomPrice: roomPrice.current.value,
                customerName: customerName.current.value,
                customerEmail: customerEmail.current.value,
                customerPhone: customerPhone.current.value,
                customerCheckInDate: checkInDate.current.value,
                customerCheckOutDate: checkOutDate.current.value,
                customerMessage: customerMessage.current.value,
            },
            {
                onSuccess: clearForm(),
            }
        );
    };

    const descriptions = house.description.split("|");
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
                                    {house.area}
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
                                <div className="relative mb-8">
                                    <img src={previeImage} alt="" />
                                </div>
                                <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 my-4">
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(house.imageLg);
                                            }}
                                            src={house.imageLg}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.tv
                                                );
                                            }}
                                            src={house.moreImages.tv}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.toilet
                                                );
                                            }}
                                            src={house.moreImages.toilet}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.kitchen
                                                );
                                            }}
                                            src={house.moreImages.kitchen}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages
                                                        .seatingSpace
                                                );
                                            }}
                                            src={house.moreImages.seatingSpace}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.stove
                                                );
                                            }}
                                            src={house.moreImages.stove}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.laundry
                                                );
                                            }}
                                            src={house.moreImages.laundry}
                                            alt=""
                                        />
                                    </div>
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
                                        <div>
                                            {house.surface}m<sup>2</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    {descriptions.map((description, index) => (
                                        <div className="py-3" key={index}>
                                            {description}
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(house.imageLg);
                                            }}
                                            src={house.imageLg}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.tv
                                                );
                                            }}
                                            src={house.moreImages.tv}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.toilet
                                                );
                                            }}
                                            src={house.moreImages.toilet}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.kitchen
                                                );
                                            }}
                                            src={house.moreImages.kitchen}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages
                                                        .seatingSpace
                                                );
                                            }}
                                            src={house.moreImages.seatingSpace}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.stove
                                                );
                                            }}
                                            src={house.moreImages.stove}
                                            alt=""
                                        />
                                    </div>
                                    <div className="h-full cursor-pointer">
                                        <img
                                            onClick={() => {
                                                setPreviewIamge(
                                                    house.moreImages.laundry
                                                );
                                            }}
                                            src={house.moreImages.laundry}
                                            alt=""
                                        />
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
                                <div className="flex items-center gap-x-4 mb-8">
                                    <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                                        <img src={house.agent.image} alt="" />
                                    </div>
                                    <div className="font-bold text-lg">
                                        {house.agent.name}
                                        <span className="text-xs text-gray-600 block font-normal">
                                            {house.agent.phone}
                                        </span>
                                    </div>
                                </div>
                                {/* Contact form  */}
                                {flash.success ? (
                                    <div className="bg-melblue text-gray-100 p-2 sm:p-5 bg-adondoGreen rounded-md">
                                        {flash.success}
                                    </div>
                                ) : (
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
                                            value={house.area}
                                            ref={roomArea}
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
                                            type="number"
                                            ref={customerPhone}
                                            placeholder="072 981 1358"
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.customerPhone && (
                                            <div className="text-xs text-red-600 -mt-4">
                                                {errors.customerPhone}
                                            </div>
                                        )}
                                        <div className="flex justify-between gap-2">
                                            <div>
                                                <label
                                                    htmlFor="check-in-dat"
                                                    className="text-xs text-gray-500"
                                                >
                                                    Enter Chenck-in date
                                                </label>
                                                <input
                                                    className="border border-gray-300 focus:border-adondoGreen-50 outline-none rounded w-full px-4 h-14 text-sm"
                                                    type="date"
                                                    ref={checkInDate}
                                                    onChange={handleChange}
                                                    required
                                                    name="check-in-dat"
                                                />
                                            </div>
                                            {errors.customerCheckinDate && (
                                                <div className="text-xs text-red-600 -mt-4">
                                                    {errors.customerCheckInDate}
                                                </div>
                                            )}

                                            <div>
                                                <label
                                                    htmlFor="check-in-dat"
                                                    className="text-xs text-gray-500"
                                                >
                                                    Enter Chenck-out date
                                                </label>
                                                <input
                                                    className="border border-gray-300 focus:border-adondoGreen-50 outline-none rounded w-full px-4 h-14 text-sm"
                                                    type="date"
                                                    placeholder="Phone*"
                                                    ref={checkOutDate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            {errors.customerCheckoutDate && (
                                                <div className="text-xs text-red-600 -mt-4">
                                                    {
                                                        errors.customerCheckOutDate
                                                    }
                                                </div>
                                            )}
                                        </div>
                                        <textarea
                                            className="border border-gray-300 focus:border-adondoGreen-50 outline-none resize-none rounded w-full px-4 h-36 text-sm text-gray-400"
                                            placeholder="Message*"
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
                                            {/* <button
                                                type="submit"
                                                disabled={processing}
                                                className="border border-adondoGreen-50 text-adondoGreen-50 hover:border-adondoGreen-100 hover:text-adondoGreen-100 rounded p-4 text-sm w-full transition"
                                            >
                                                Call
                                            </button> */}
                                        </div>
                                    </form>
                                )}
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

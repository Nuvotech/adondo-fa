// import house images
import Room1 from "../../public/assets/img/houses/room1.png";
import Room2 from "../../public/assets/img/houses/room2.png";
import Room3 from "../../public/assets/img/houses/room3.png";
import House1 from "../../public/assets/img/houses/house1.png";
// import House1 from "../../public/assets/img/houses/house1.png";
import House2 from "../../public/assets/img/houses/house2.png";
import House3 from "../../public/assets/img/houses/house3.png";
import House4 from "../../public/assets/img/houses/house4.png";
import House5 from "../../public/assets/img/houses/house5.png";
import House6 from "../../public/assets/img/houses/house6.png";
import House7 from "../../public/assets/img/houses/house7.png";
import House8 from "../../public/assets/img/houses/house8.png";
import House9 from "../../public/assets/img/houses/house9.png";
import House10 from "../../public/assets/img/houses/house10.png";
import House11 from "../../public/assets/img/houses/house11.png";
import House12 from "../../public/assets/img/houses/house12.png";
// import house large images
import Room1Lg from "../../public/assets/img/houses/room1lg.png";
import Room2Lg from "../../public/assets/img/houses/room2lg.png";
import Room3Lg from "../../public/assets/img/houses/room3lg.png";
import House1Lg from "../../public/assets/img/houses/house1lg.png";
import House2Lg from "../../public/assets/img/houses/house2lg.png";
import House3Lg from "../../public/assets/img/houses/house3lg.png";
import House4Lg from "../../public/assets/img/houses/house4lg.png";
import House5Lg from "../../public/assets/img/houses/house5lg.png";
import House6Lg from "../../public/assets/img/houses/house6lg.png";
import House7Lg from "../../public/assets/img/houses/house7lg.png";
import House8Lg from "../../public/assets/img/houses/house8lg.png";
import House9Lg from "../../public/assets/img/houses/house9lg.png";
import House10Lg from "../../public/assets/img/houses/house10lg.png";
import House11Lg from "../../public/assets/img/houses/house11lg.png";
import House12Lg from "../../public/assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "../../public/assets/img/apartments/a1.png";
import Apartment2 from "../../public/assets/img/apartments/a2.png";
import Apartment3 from "../../public/assets/img/apartments/a3.png";
import Apartment4 from "../../public/assets/img/apartments/a4.png";
import Apartment5 from "../../public/assets/img/apartments/a5.png";
import Apartment6 from "../../public/assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "../../public/assets/img/apartments/a1lg.png";
import Apartment2Lg from "../../public/assets/img/apartments/a2lg.png";
import Apartment3Lg from "../../public/assets/img/apartments/a3lg.png";
import Apartment4Lg from "../../public/assets/img/apartments/a4lg.png";
import Apartment5Lg from "../../public/assets/img/apartments/a5lg.png";
import Apartment6Lg from "../../public/assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "../../public/assets/img/agents/agent1.png";
import Agent2 from "../../public/assets/img/agents/agent2.png";
import Agent3 from "../../public/assets/img/agents/agent3.png";
import Agent4 from "../../public/assets/img/agents/agent4.png";
import Agent5 from "../../public/assets/img/agents/agent5.png";
import Agent6 from "../../public/assets/img/agents/agent6.png";
import Agent7 from "../../public/assets/img/agents/agent7.png";
import Agent8 from "../../public/assets/img/agents/agent8.png";
import Agent9 from "../../public/assets/img/agents/agent9.png";
import Agent10 from "../../public/assets/img/agents/agent10.png";
import Agent11 from "../../public/assets/img/agents/agent11.png";
import Agent12 from "../../public/assets/img/agents/agent12.png";

export const housesData = [
    {
        id: 1,
        type: "Room",
        name: "Master Bed room",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Room1,
        imageLg: Room1Lg,
        country: "Newlands",
        address: "7240C Argyle St. Lawndale, CA 90260",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "4200 sq ft",
        year: "2022",
        duration: "per night",
        price: "250",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
        },
    },
    {
        id: 2,
        type: "Room",
        name: "Room 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Room2,
        imageLg: Room2Lg,
        country: "Newlands",
        address: "798 Talbot St. Bridgewater, NJ 08807",
        bedrooms: "6",
        bathrooms: "3",
        shower: "1",
        surface: "4200 sq ft",
        year: "2020",
        duration: "per night",
        price: "350",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
        },
    },
    {
        id: 3,
        type: "Room",
        name: "Room 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Room3,
        imageLg: Room3Lg,
        country: "Newlands",
        address: "2 Glen Creek St. Alexandria, VA 22304",
        bedrooms: "6",
        bathrooms: "",
        shower: "1",
        surface: "4200 sq ft",
        year: "2020",
        duration: "per night",
        price: "350",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 4,
        type: "Room",
        name: "Room 4",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House4,
        imageLg: House4Lg,
        country: "Newlands",
        address: "84 Woodland St. Cocoa, FL 32927",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "4200 sq ft",
        year: "2020",
        duration: "per night",
        price: "450",
        agent: {
            image: Agent4,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 5,
        type: "House",
        name: "House 5",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House5,
        imageLg: House5Lg,
        country: "Newlands",
        address: "28 Westport Dr. Warminster, PA 18974",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "4200 sq ft",
        year: "2022",
        duration: "per night",
        price: "550",
        agent: {
            image: Agent5,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 6,
        type: "Room",
        name: "Room 6",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House6,
        imageLg: House6Lg,
        country: "Newlands",
        address: "32 Pawnee Street Butte, MT 59701",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "6200 sq ft",
        year: "2022",
        duration: "per night",
        price: "650",
        agent: {
            image: Agent6,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 7,
        type: "Room",
        name: "Room 7",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Apartment1,
        imageLg: Apartment1Lg,
        country: "Newlands",
        address: "32 Pawnee Street Butte, MT 59701",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "1200 sq ft",
        year: "2022",
        duration: "per night",
        price: "750",
        agent: {
            image: Agent7,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 8,
        type: "Room ",
        name: "Room 8",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Apartment2,
        imageLg: Apartment2Lg,
        country: "Newlands",
        address: "28 Westport Dr. Warminster, PA 18974",
        bedrooms: "1",
        bathrooms: "",
        Shower: "1",
        surface: "1000 sq ft",
        year: "2022",
        duration: "per night",
        price: "850",
        agent: {
            image: Agent8,
            name: "Joseph Ramazani",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 9,
        type: "Apartament",
        name: "Apartament 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: Apartment3,
        imageLg: Apartment3Lg,
        country: "Monument Park",
        address: "84 Woodland St. Cocoa, FL 32927",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "1100 sq ft",
        year: "2022",
        duration: "per night",
        price: "4500",
        agent: {
            image: Agent9,
            name: "Jerry Schenck",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
    },
    {
        id: 10,
        type: "bachelor",
        name: "bachelor 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House7,
        imageLg: House7Lg,
        country: "Monument Park",
        address: "7240C Argyle St. Lawndale, CA 90260",
        bedrooms: "0.5",
        bathrooms: "",
        shower: "1",
        surface: "3200 sq ft",
        year: "2020",
        duration: "per night",
        price: "2500",
        agent: {
            image: Agent10,
            name: "Vera Levesque",
            phone: "0123 456 78910",
        },
    },
    {
        id: 11,
        type: "Apartment",
        name: "Apartment 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House8,
        imageLg: House8Lg,
        country: "Monument Park",
        address: "798 Talbot St. Bridgewater, NJ 08807",
        bedrooms: "2",
        bathrooms: "1",
        shower: "1",
        surface: "2200 sq ft",
        year: "2022",
        duration: "per night",
        price: "8500",
        agent: {
            image: Agent11,
            name: "Joseph Ramazani",
            phone: "0123 456 78910",
        },
    },
    {
        id: 12,
        type: "House ",
        name: "House 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
        image: House9,
        imageLg: House9Lg,
        country: "Pretoria west",
        address: "2 Glen Creek St. Alexandria, VA 22304",
        bedrooms: "1",
        bathrooms: "1",
        surface: "4600 sq ft",
        year: "2022",
        duration: "per night",
        price: "4500",
        agent: {
            image: Agent12,
            name: "Raymond Hood",
            phone: "0123 456 78910",
        },
    },
];

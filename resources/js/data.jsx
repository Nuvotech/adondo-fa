// import house images
import bookedHouse from "../../public/assets/img/houses/bookedHouse.png";
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
        type: "Room ",
        roomNumber: "1",
        name: "Newland Room 1",
        description:
            "Our Self-catering room with a double bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: Room1,
        imageLg: Room1Lg,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "18",
        year: "2022",
        duration: "per night",
        price: "390",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
        },
        booked: false,
    },
    {
        id: 2,
        type: "Room",
        roomNumber: "2",
        name: "Newland Room 2",
        description:
            "Our Self-catering room with a double bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: Room2,
        imageLg: Room2Lg,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "0",
        shower: "1",
        surface: "18",
        year: "2020",
        duration: "per night",
        price: "390",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
        },
        booked: false,
    },
    {
        id: 3,
        type: "Room",
        roomNumber: "3",
        name: "Newland Room 3",
        description:
            "Our Self-catering room with a double bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: Room3,
        imageLg: Room3Lg,
        imgPlaceholder: bookedHouse,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "18",
        year: "2020",
        duration: "per night",
        price: "390",
        agent: {
            image: Agent1,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 4,
        type: "Room",
        roomNumber: "4",
        name: "Newland Room 4",
        description:
            "Our Self-catering room with a Queen bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: House4,
        imageLg: House4Lg,
        imgPlaceholder: bookedHouse,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "25",
        year: "2020",
        duration: "per night",
        price: "550",
        agent: {
            image: Agent4,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 5,
        type: "Room",
        roomNumber: "5",
        name: "Newland Room 5",
        description:
            "Our Self-catering room with a Queen bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: House5,
        imageLg: House5Lg,
        imgPlaceholder: bookedHouse,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "20",
        year: "2022",
        duration: "per night",
        price: "450",
        agent: {
            image: Agent5,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 6,
        type: "Room",
        roomNumber: "6",
        name: "Newland Room 6",
        description:
            "Our Self-catering room with a Queen bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: House6,
        imageLg: House6Lg,
        imgPlaceholder: bookedHouse,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "30",
        year: "2022",
        duration: "per night",
        price: "650",
        agent: {
            image: Agent6,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 7,
        type: "Room",
        roomNumber: "7",
        name: "Room 7",
        description:
            "Our Self-catering room with a Queen bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: Apartment1,
        imageLg: Apartment1Lg,
        imgPlaceholder: bookedHouse,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        shower: "1",
        surface: "18",
        year: "2022",
        duration: "per night",
        price: "390",
        agent: {
            image: Agent7,
            name: "Ester Ivan",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 8,
        type: "Room",
        roomNumber: "8",
        name: "Room 8",
        description:
            "Our Self-catering room with a Doble bed is the perfect choice for those looking for a comfortable and convenient way to explore the area. The room is spacious and well-appointed, featuring a comfortable double-sized bed with plush linens and pillows to ensure a great night's sleep. The room also includes a kitchenette that is fully equipped with all the necessary appliances and utensils to prepare your own meals.| The room is decorated in a modern style, with neutral colors, and natural light that comes through the window. Guests will also have access to a private bathroom, complete with a shower and all the necessary toiletries. The room is also equipped with a TV and free Wi-Fi to ensure that you stay connected during your stay. | The BnB is located in a quiet, residential area, and our guests will have access to a garden and outdoor seating area where you can enjoy the fresh air and beautiful views. Guests will also have access to on-site parking for their vehicles. | Whether you're visiting for business or pleasure, our Self-catering room with a double bed is the perfect choice for a comfortable and convenient stay. Book your stay today and experience the best that our area has to offer!",
        image: Apartment2,
        imgPlaceholder: bookedHouse,
        imageLg: Apartment2Lg,
        area: "Newlands",
        address: "369 sandlewood Drive Newlands",
        bedrooms: "1",
        bathrooms: "",
        Shower: "1",
        surface: "20",
        year: "2022",
        duration: "per night",
        price: "390",
        agent: {
            image: Agent8,
            name: "Joseph Ramazani",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 9,
        type: "Apartament",
        roomNumber: "1",
        name: "Apartament 1 Monument Park",
        description:
            "This charming 2 bedroom guest house is ideal for those seeking a comfortable stay. The kitchen and seating room provide a convenient and inviting space for cooking and relaxing, with all necessary amenities. The two bedrooms are tastefully decorated and offer a peaceful retreat for a good night's sleep. The attached bathroom is modern and clean, with all essentials provided for your comfort. This guest house is in a prime location, making it easy to explore the surrounding area. Book now for a delightful and memorable stay!",
        image: Apartment3,
        imageLg: Apartment3Lg,
        imgPlaceholder: bookedHouse,
        area: "Monument Park",
        address: "45 Bush buckLane",
        bedrooms: "2",
        bathrooms: "",
        shower: "1",
        surface: "96",
        year: "2022",
        duration: "per night",
        price: "1200",
        agent: {
            image: Agent9,
            name: "Fatuma",
            phone: "0123 456 78910",
            whatsApp: "078 2455 785",
        },
        booked: true,
    },
    {
        id: 10,
        type: "Bachelor",
        roomNumber: "2",
        name: "Bachelor 2 Monument park ",
        description:
            "This bachelor apartment features a compact kitchen with essential appliances, a functional bathroom, a TV for entertainment, and free high-speed internet via Wi-Fi. Ideal for a single person seeking a low-maintenance, comfortable living space.",
        image: House7,
        imageLg: House7Lg,
        imgPlaceholder: bookedHouse,
        area: "Monument Park",
        address: "45 Bushbuck Lane",
        bedrooms: "0.5",
        bathrooms: "",
        shower: "1",
        surface: "25",
        year: "2020",
        duration: "per night",
        price: "620",
        agent: {
            image: Agent10,
            name: "Fatu",
            phone: "0123 456 78910",
        },
        booked: true,
    },
    {
        id: 11,
        type: "Bachelor",
        roomNumber: "3",
        name: "Bachelor 3 Monument Park",
        description:
            "This bachelor apartment features a compact kitchen with essential appliances, a functional bathroom, a TV for entertainment, and free high-speed internet via Wi-Fi. Ideal for a single person seeking a low-maintenance, comfortable living space.",
        image: House8,
        imageLg: House8Lg,
        imgPlaceholder: bookedHouse,
        area: "Monument Park",
        address: "45 Bushbuck Lane",
        bedrooms: "2",
        bathrooms: "1",
        shower: "1",
        surface: "20",
        year: "2022",
        duration: "per night",
        price: "620",
        agent: {
            image: Agent11,
            name: "Fatuma",
            phone: "0123 456 78910",
        },
        booked: true,
    },
    {
        id: 12,
        type: "Room ",
        roomNumber: "1",
        name: "Room 1 Pretoria west",
        description: "",
        image: House9,
        imageLg: House9Lg,
        imgPlaceholder: bookedHouse,
        area: "Pretoria west",
        address: "Pretoria west",
        bedrooms: "1",
        bathrooms: "1",
        surface: "4600 sq ft",
        year: "2022",
        duration: "per night",
        price: "320",
        agent: {
            image: Agent12,
            name: "Raymond Hood",
            phone: "0123 456 78910",
        },
        booked: true,
    },
];

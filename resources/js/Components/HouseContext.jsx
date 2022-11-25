import React, { useState, useEffect, createContext } from "react";

// importing the data
import { housesData } from "@/data";

// creating the context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState("Location (any)");
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState("Property type (any)");
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState("Price range (any)");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        });

        // Remove duplicates
        const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

        //set countries
        setCountries(uniqueCountries);
        // console.log(uniqueCountries);
    }, []);

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        // Remove duplicates
        const uniqueProperties = ["Propperty (any)", ...new Set(allProperties)];

        //set Properties
        setProperties(uniqueProperties);
        // console.log(uniqueProperties);
    }, []);

    const handleClick = () => {
        console.log("Cliked");
    };

    return (
        <HouseContext.Provider
            value={{
                country,
                setCountry,
                countries,
                property,
                setProperty,
                properties,
                price,
                setPrice,
                houses,
                loading,
                handleClick,
            }}
        >
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;

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
        // set loading
        setLoading(true);

        // check if the string contains any word
        const isDefault = (str) => {
            return str.split(" ").includes("(any)");
        };

        // get the first value of price and convert it to a number
        const minPrice = parseInt(price.split(" ")[1]);
        const maxPrice = parseInt(price.split(" ")[4]);
        // console.log(minPrice, maxPrice);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            // console.log(housePrice);
            if (
                house.country === country &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }

            // check if all values are default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            // check if country is not default
            if (
                !isDefault(country) &&
                isDefault(property) &&
                isDefault(price)
            ) {
                return house.country === country;
            }

            // check if property is not default
            if (
                !isDefault(property) &&
                isDefault(country) &&
                isDefault(price)
            ) {
                return house.type === property;
            }

            // check if the price is default
            if (
                !isDefault(price) &&
                isDefault(country) &&
                isDefault(property)
            ) {
                return housePrice >= minPrice && housePrice <= maxPrice;
            }

            // check if country and property are not the default value
            if (
                !isDefault(country) &&
                !isDefault(property) &&
                isDefault(price)
            ) {
                return house.country === country && house.type === property;
            }

            // check if country and price are not default.
            if (
                !isDefault(country) &&
                !isDefault(price) &&
                isDefault(property)
            ) {
                return (
                    house.country === country &&
                    house.price >= minPrice &&
                    house.price <= maxPrice
                );
            }

            // check if property and price is not default
            if (
                !isDefault(property) &&
                !isDefault(price) &&
                isDefault(country)
            ) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }
        });
        setTimeout(() => {
            return (
                newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
                setLoading(false)
            );
        }, 1000);
        // console.log(newHouses);
        // return newHouses;
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

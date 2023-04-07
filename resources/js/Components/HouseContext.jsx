import React, { useState, useEffect, createContext } from "react";

// importing the data
import { housesData } from "@/data";

// creating the context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [area, setArea] = useState("Location (any)");
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState("Property type (any)");
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState("Price range (any)");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const allAreas = houses.map((house) => {
            return house.area;
        });

        // Remove duplicates
        const uniqueCountries = ["Location (any)", ...new Set(allAreas)];

        //set countries
        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        // Remove duplicates
        const uniqueProperties = ["Propperty (any)", ...new Set(allProperties)];

        //set Properties
        setProperties(uniqueProperties);
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

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            if (
                house.areas === area &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }

            // check if all values are default
            if (isDefault(area) && isDefault(property) && isDefault(price)) {
                return house;
            }

            // check if country is not default
            if (!isDefault(area) && isDefault(property) && isDefault(price)) {
                return house.area === area;
            }

            // check if property is not default
            if (!isDefault(property) && isDefault(area) && isDefault(price)) {
                return house.type === property;
            }

            // check if the price is default
            if (!isDefault(price) && isDefault(area) && isDefault(property)) {
                return housePrice >= minPrice && housePrice <= maxPrice;
            }

            // check if country and property are not the default value
            if (!isDefault(area) && !isDefault(property) && isDefault(price)) {
                return house.area === area && house.type === property;
            }

            // check if country and price are not default.
            if (!isDefault(area) && !isDefault(price) && isDefault(property)) {
                return (
                    house.area === area &&
                    house.price >= minPrice &&
                    house.price <= maxPrice
                );
            }

            // check if property and price is not default
            if (!isDefault(property) && !isDefault(price) && isDefault(area)) {
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
        // return newHouses;
    };

    return (
        <HouseContext.Provider
            value={{
                area,
                setArea,
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

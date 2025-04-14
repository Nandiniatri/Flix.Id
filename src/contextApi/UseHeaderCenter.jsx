import { createContext, useEffect, useState } from "react";

export const headerCenterContext = createContext();

const UseHeaderCenterProvider = ({ children }) => {
    const [centerData, setCenterData] = useState([]);
    const [headerCenterData, setHeaderCenterData] = useState([]);
    const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const filterCategoryData = movie.filter((itm) =>
        itm.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    const centerDataFiltering = centerData.filter((itm) =>
        itm.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    const fetchMovieApi = async (fileName) => {
        const response = await fetch(`/data/${fileName}`);
        const result = await response.json();
        setMovie(result);
    }

    const fetchHeaderCenterData = async () => {
        const response = await fetch(`/data/headerCenter.json`);
        const result = await response.json();
        setHeaderCenterData(result);
    }

    const fetchCenterData = async (fileName) => {
        const response = await fetch(`/data/${fileName}`);
        const result = await response.json();
        setCenterData(result);
    }

    useEffect(() => {
        fetchMovieApi();
        fetchCenterData();
        fetchHeaderCenterData();
    }, [])

    return (
        <headerCenterContext.Provider value={{
            centerData,
            fetchCenterData,
            headerCenterData,
            movie,
            setMovie,
            fetchMovieApi,
            handleInputValue,
            inputValue,
            filterCategoryData,
            centerDataFiltering
        }}>
            {children}
        </headerCenterContext.Provider>
    )
}

export default UseHeaderCenterProvider;
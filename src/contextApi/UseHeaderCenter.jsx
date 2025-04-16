import { createContext, useEffect, useState } from "react";

export const headerCenterContext = createContext();

const UseHeaderCenterProvider = ({ children }) => {
    const [centerData, setCenterData] = useState([]);
    const [headerCenterData, setHeaderCenterData] = useState([]);
    const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [homeBlueSword , setHomeBlueSword] = useState([]);
    const [showFixHeading , setShowFixHeading] = useState([]);


    const showFixHeadingApi = async(fileName) => {
        // const response = await fetch('/data/showFlixHeading.json');    
        const response = await fetch(`/data/${fileName}`); 
        const result = await response.json();        
        setShowFixHeading(result);
    }

    const homeBlueSwordApi = async(fileName) => {
        // const response = await fetch(`/data/homeBlueSwords.json`);
        const response = await fetch(`/data/${fileName}`);
        const result = await response.json();
        setHomeBlueSword(result);
    }

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
        const response = await fetch(`/public/data/${fileName}`);
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
        homeBlueSwordApi("homeBlueSwords.json");
        showFixHeadingApi();
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
            centerDataFiltering,
            homeBlueSword,
            homeBlueSwordApi,
            showFixHeadingApi,
            showFixHeading
        }}>
            {children}
        </headerCenterContext.Provider>
    )
}

export default UseHeaderCenterProvider;
import { IoIosSearch } from "react-icons/io";
// import { CiBellOn, CiUser } from "react-icons/ci";
import './Header.css';
import { useContext, useState } from "react";
import { headerCenterContext } from "../contextApi/UseHeaderCenter";
import Input from "../components/Input";
import { Link } from "react-router-dom";


const Header = () => {
    const { fetchCenterData, headerCenterData, handleInputValue, inputValue, homeBlueSwordApi, fetchMovieApi, showFixHeadingApi } = useContext(headerCenterContext);
    const [showInput, setShowInput] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");

    const handleFlixId = () => {
        homeBlueSwordApi("homeBlueSwords.json");
        fetchMovieApi("trending.json")
        // showFixHeadingApi('');
    }

    const handleInputSearch = () => {
        setShowInput(true);
    }

    const handleHeaderTitle = (fileName, title, blueSwords, showFixHeading) => {
        // console.log(blueSwords , showFixHeading);
        fetchCenterData(fileName);
        setSelectedTitle(title);
        homeBlueSwordApi(blueSwords);
        showFixHeadingApi(showFixHeading);
    }

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <Link to={"Flix.id"} className="flixId-class" onClick={handleFlixId}><h2>Flix.id</h2></Link>
                </div>

                <div className="header-center">
                    {headerCenterData.map((itm) => {
                        return (
                            <>
                                <Link to={`/${itm.title}`} className="link">
                                    <p onClick={() => handleHeaderTitle(itm.fileName, itm.title, itm.blueSwords, itm.showFixHeading)} style={{
                                        color: selectedTitle === itm.title ? "white" : "white",
                                        textDecoration: selectedTitle === itm.title ? "underline" : "none",
                                        fontWeight: selectedTitle === itm.title ? "bold" : "normal"
                                    }}>{itm.title}</p>
                                </Link>
                            </>
                        )
                    })}
                </div>

                <div className="header-right">
                    {showInput ? (
                        <Input type="search" value={inputValue} onChange={handleInputValue} className="search-input" />
                    ) : (
                        <p className="search-icon" onClick={handleInputSearch}>
                            <IoIosSearch size={25} />
                        </p>
                    )}
                </div>
            </header>

        </>
    );
};

export default Header;  
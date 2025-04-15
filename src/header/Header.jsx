import { IoIosSearch } from "react-icons/io";
// import { CiBellOn, CiUser } from "react-icons/ci";
import './Header.css';
import { useContext, useState } from "react";
import { headerCenterContext } from "../contextApi/UseHeaderCenter";
import Input from "../components/Input";
import { Link } from "react-router-dom";


const Header = () => {
    const { fetchCenterData, headerCenterData, handleInputValue, inputValue } = useContext(headerCenterContext);
    const [showInput, setShowInput] = useState(false);

    const handleInputSearch = () => {
        setShowInput(true);
    }

    const handleHeaderTitle = (fileName) => {
        fetchCenterData(fileName);
    }

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <h2>Flix.id</h2>
                </div>

                <div className="header-center">
                    {headerCenterData.map((itm) => {
                        return (
                            <>
                                <Link to={`/movie/${itm.title}`} className="link">
                                    <p onClick={() => handleHeaderTitle(itm.fileName)}>{itm.title}</p>
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
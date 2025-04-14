import { IoIosSearch } from "react-icons/io";
// import { CiBellOn, CiUser } from "react-icons/ci";
import './Header.css';
import { useContext, useState } from "react";
import { headerCenterContext } from "../contextApi/UseHeaderCenter";
import Input from "../components/Input";


const Header = () => {
    const { centerData, fetchCenterData, headerCenterData, handleInputValue, inputValue } = useContext(headerCenterContext);
    const [showInput, setShowInput] = useState(false);

    // const handleInputValue = (event) => {
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }

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
                                <p onClick={() => handleHeaderTitle(itm.fileName)}>{itm.title}</p>
                            </>
                        )
                    })}
                </div>

                <div className="header-right">
                    {showInput ? (
                        <Input type="search" value={inputValue} onChange={handleInputValue} className="search-input"/>
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
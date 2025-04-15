import { useContext } from "react";
import Image from "../components/Image";
import './BlueSwords.css';
import { headerCenterContext } from "../contextApi/UseHeaderCenter";

const BlueSwords = () => {
    const { homeBlueSword } = useContext(headerCenterContext);
    return (
        <div className="container">
            {homeBlueSword.map((item) => {
                return (
                    <div className="banner">
                        <Image
                            src={item.src}
                            className="banner-image"
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default BlueSwords;

import { useContext } from "react";
import { headerCenterContext } from "../contextApi/UseHeaderCenter";
import './FixedHeadingData.css';

const ShowFixedHeadingData = () => {
    const { showFixHeading } = useContext(headerCenterContext);

    return (
        <div className="show-fix-heading-main-div">
            {showFixHeading.map((item) => {
                return (
                    <>
                        <h2>{item.title}</h2>
                    </>
                )
            })} 
        </div>
    )
}

export default ShowFixedHeadingData;
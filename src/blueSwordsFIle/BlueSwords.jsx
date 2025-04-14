import Image from "../components/Image";
import './BlueSwords.css'; 

const BlueSwords = () => {
    return (
        <div className="container">
            <div className="banner">
                <Image 
                    src='https://cdn.dribbble.com/userupload/33205035/file/original-e239cf60725c629538186576b59726f6.jpg?resize=752x&vertical=center' 
                    className="banner-image"
                />
            </div>
            <div className="banner">
                <Image 
                    src='https://cdn.dribbble.com/userupload/42702594/file/original-2888a43467ca6161be31aa8960a22180.gif' 
                    className="banner-image"
                />
            </div>
        </div>
    )
};

export default BlueSwords;

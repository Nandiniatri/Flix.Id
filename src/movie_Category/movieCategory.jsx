import { Link } from 'react-router-dom';
import { headerCenterContext } from '../contextApi/UseHeaderCenter';
import Movies from '../movies/Movies';
import './movieCategory.css';
import { useContext, useEffect, useState } from "react";

const MovieCategory = () => {
    const [categories, setCategories] = useState([]);
    const { centerData, movie, setMovie, fetchMovieApi, centerDataFiltering } = useContext(headerCenterContext);
    const [selectedTitle, setSelectedTitle] = useState("");

    //ye to handleMovieCategory hai-----------------------
    const handleMovieCategory = (fileName, title) => {
        fetchMovieApi(fileName);
        setSelectedTitle(title)
    }

    const fetchMovieCategoryApi = async () => {
        const response = await fetch('/data/movieCategory.json');
        const result = await response.json();
        setCategories(result);
    }

    useEffect(() => {
        fetchMovieCategoryApi();
        fetchMovieApi('trending.json');
        setSelectedTitle("Trending");
    }, []);

    useEffect(() => {
        setMovie(centerData);
    }, [centerData])

    return (
        <div className="movie-category-main-container">
            <div className="category-buttons">
                {categories.map((item) => (
                    <Link to={`/${item.title}`} className="link" key={item.id}>
                        <div
                            className="category-button"
                            onClick={() => handleMovieCategory(item.fileName, item.title)}
                            style={{
                                backgroundColor: selectedTitle === item.title ? "black" : "" ,
                                fontWeight: selectedTitle === item.title ? "bold" : "normal"
                            }}
                        >
                            <span className="category-icon">{item.symbol}</span>
                            <span className="category-text">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div>
                <Movies movie={movie} />
            </div>
        </div>
    );
};

export default MovieCategory;

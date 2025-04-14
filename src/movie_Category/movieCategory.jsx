import { headerCenterContext } from '../contextApi/UseHeadercenter';
import Movies from '../movies/Movies';
import './movieCategory.css';
import { useContext, useEffect, useState } from "react";

const MovieCategory = () => {
    const [categories, setCategories] = useState([]);
    const { centerData, movie, setMovie, fetchMovieApi, centerDataFiltering } = useContext(headerCenterContext);

    //ye to handleMovieCategory hai-----------------------
    const handleMovieCategory = (fileName) => {
        fetchMovieApi(fileName);
    }

    const fetchMovieCategoryApi = async () => {
        const response = await fetch('/data/movieCategory.json');
        const result = await response.json();
        setCategories(result);
    }

    useEffect(() => {
        fetchMovieCategoryApi();
        fetchMovieApi('trending.json');
    }, []);

    useEffect(() => {
        setMovie(centerData);
    }, [centerData])

    return (
        <div className="movie-category-main-container">
            <div className="category-buttons">
                {categories.map((item) => (
                    <div className="category-button" key={item.id} onClick={() => handleMovieCategory(item.fileName)}>
                        <span className="category-icon">{item.symbol}</span>
                        <span className="category-text">{item.title}</span>
                    </div>
                ))}
            </div>

            <div>
                <Movies movie={movie} />
            </div>
        </div>
    );
};

export default MovieCategory;

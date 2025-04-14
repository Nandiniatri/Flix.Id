import React, { useContext } from 'react';
import './Movies.css';
import { headerCenterContext } from '../contextApi/UseHeadercenter';

const Movies = () => {
  const { filterCategoryData } = useContext(headerCenterContext);

  return (
    <div className="movies-container">
      {filterCategoryData.map((item) => (
        <div className="movie-card" key={item.id}>
          <img src={item.src} alt={item.title} className="movie-img" />
          <div className="movie-info">
            <h2>{item.title}</h2>
            <p><strong>Year:</strong> {item.year}</p>
            <p><strong>Rating:</strong> ⭐ {item.rating}</p>
            <p className="desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;

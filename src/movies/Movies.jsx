import React, { useContext, useState } from 'react';
import './Movies.css';
import { headerCenterContext } from '../contextApi/UseHeaderCenter';
import Modal from '../components/Modal';
import Image from '../components/Image';
import YouTube from 'react-youtube';

const opts = {
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 1,
  },
};

const Movies = () => {
  const { filterCategoryData } = useContext(headerCenterContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showData, setShowData] = useState([]);

  const handleImages = (item) => {
    setIsModalOpen(true);
    setShowData([item])
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }


  return (
    <>
      <div className="movies-container">
        {filterCategoryData.map((item) => (
          <div className="movie-card" key={item.id} onClick={() => handleImages(item)}>
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


      <div>
        <Modal isOpen={isModalOpen} isClose={handleClose}>
          <button onClick={handleClose}>Close</button>
          {showData.map((items) => (
            <div className="youtube-video" key={items.id}>
              <YouTube videoId={items.v} className="youtube-y" opts={opts} />
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};

export default Movies;


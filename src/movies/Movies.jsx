import React, { useContext, useState } from 'react';
import './Movies.css';
import { headerCenterContext } from '../contextApi/UseHeaderCenter';
import Modal from '../components/Modal';
import Image from '../components/Image';
import YouTube from 'react-youtube';

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
              <YouTube videoId={items.v} className="youtube-y" />
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};

export default Movies;


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9-LiOj-saa0?si=jFrgsLh5ff_bCMFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }
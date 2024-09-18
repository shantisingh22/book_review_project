"use client";
import React, { useState } from "react";
import "./Homepage.css";

const Col_Container = ({ details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(null); 
  const [hoverRating, setHoverRating] = useState(0); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const submitRating = (rating) => {
    setUserRating(rating);
    closeModal(); 
  };

  return (
    <div className="colBoxdiv">
      <div className="image-box">
        <img src={details.image} alt="Book Cover" className="book-cover" />
      </div>
      <div className="book-info">
        <h1 className="book-title">{details.title}</h1>
        <p className="book-author">{details.author}</p>
        <p className="description">{details.description}</p>
        {userRating && <p className="user-rating">Your Rating: {userRating} Stars</p>}
      </div>
      <div className="button-box">
        <button className="buy-button" onClick={openModal}>
          View Reviews
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="image-box">
              <img src={details.image} alt="Book Cover" className="book-cover" />
            </div>
            <h2>{details.rating}</h2>
            <div>{details.genre}</div>
            <div>{details.releaseDate}</div>
            <div>{details.price}</div>

            <div className="rating-section">
              <h3>Rate this book</h3>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= (hoverRating || userRating) ? "star filled" : "star"}
                    onClick={() => submitRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Col_Container;

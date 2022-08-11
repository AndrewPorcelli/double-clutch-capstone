import React, { useState } from 'react';
import axios from 'axios';

const ReviewsDropdown = () => {
  const [carState, setCarState] = useState([]);
  const [isClicked, setClicked] = useState(false);

  const teslaBtn = () => {
    axios
      .get('http://localhost:3001/api/home')
      .then((res) => setCarState(res.data[0]));
    setClicked(true);

    //   ({ data: db }) => {
    //   console.log(db);
    // });
  };

  

  return (
    <div className="review-dd">
      <button className="review-btn" onClick={teslaBtn}>
        Tesla
      </button>
      <button className="review-btn">Genesis</button>
      <button className="review-btn">Hyundai</button>
      {isClicked && (
        <div>
          <h2>{carState.car_name}</h2>
          <p>{carState.car_description}</p>
          <p>{carState.andrew_review}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewsDropdown;

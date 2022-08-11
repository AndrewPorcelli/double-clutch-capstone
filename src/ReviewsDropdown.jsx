import React, { useState } from 'react';
import axios from 'axios';

const ReviewsDropdown = () => {
  const [carState, setCarState] = useState([]);
  const [isClicked, setClicked] = useState(false);

  const teslaBtn = () => {
    axios
      .get('http://localhost:3001/api/home')
      .then((res) => setCarState(res.data[0]));

    // setClicked(true);

    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }

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
      {!isClicked && (
        <div>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
            alt="tesla model 3"
          />
        </div>
      )}
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

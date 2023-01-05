import React, { useEffect, useState } from 'react';
import './StarRating.css';

const StarRating = ({number}) => {

  const [activeStars, setActiveStars] = useState([])

  const handleStars = (num) => {
    let newArr = {}
    for(let i=0; i<number; i++) {
      if (i <= num) {
        newArr[i] = true
      } else {
        newArr[i] = false
      }
    }
    setActiveStars(Object.entries(newArr))
  }

  useEffect(() => {
    let stars = {}
    for(let i=0; i<number; i++ ){
      stars[i] = false
    }
    
    setActiveStars(Object.entries(stars))
  },[number])

  return (
      <div className='StarRating'>
        {(activeStars.length > 0) ? activeStars?.map((e,i) => {
          return <span key={i} onClick={() => handleStars(i)} className={(e[1]) ? 'active': ''}>*</span>
        }) : null}
      </div>
  );
};

export default StarRating;

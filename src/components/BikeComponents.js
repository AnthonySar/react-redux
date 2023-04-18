import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyBike } from '../redux/bike/actionBike';
import bikeSvg from '../images/bike.svg';

const BikeComponents = () => {
  const avairableBike = useSelector((state) => state.bike.bike)
  const dispatchBike = useDispatch();

  const handleBuy = () => {
    dispatchBike(buyBike())
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card__content'>
          <img src={bikeSvg} alt='Bike' />
          <p>
            Bike : {avairableBike}

            <span id='count-bike'></span>
          </p>
          <button onClick={handleBuy}>Acheter</button>
        </div>
      </div>
    </div>
  )
}

export default BikeComponents;
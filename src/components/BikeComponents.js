import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyBike } from '../redux/bike/actionBike';
import bikeSvg from '../images/bike.svg';

const BikeComponents = () => {
  const avairableBike = useSelector((state) => state.reducerBike.bike)
  const dispatchBike = useDispatch();

  const [totalBike, setTotalBike] = useState(1);

  const handleBuy = () => {
    dispatchBike(buyBike(totalBike))
  };

  return (
    <div className='card'>
      <div className='card__content'>
        <img src={bikeSvg} alt='Bike' />
        <p>
          Stock : {avairableBike}
          <span id='count-bike'></span>
        </p>

        <div className='card__btn'>
          <button onClick={handleBuy}>Acheter</button>
          <p>Sélectionner un nombre d'items puis "Acheter"</p>
          <input 
            type='text'  
            value={totalBike} 
            onChange={(e) => setTotalBike(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default BikeComponents;
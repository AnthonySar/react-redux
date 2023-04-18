import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMacbook } from '../redux/macbook/actionMacbook';
import macSvg from '../images/macbook.svg';

const MacbookComponents = () => {
  const avairableMac = useSelector((state) => state.reducerMacbook.macbook)
  const dispatchMac = useDispatch();

  const handleBuy = () => {
    dispatchMac(buyMacbook());
  }

  return (
    <div className='card'>
      <div className='card__content'>
        <img src={macSvg} alt='macbook'/>
        <p>
          Stock : {avairableMac}
            <span id='count-mac'></span>
        </p>
        <button onClick={handleBuy}>Acheter</button>
      </div>

    </div>
  )
}

export default MacbookComponents
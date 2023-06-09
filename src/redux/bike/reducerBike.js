import { BUY_BIKE } from "./type";

const initialStateBike = {
  bike: 3,
}

const bikeReducer = (state = initialStateBike, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state,
        bike: state.bike - action.payload
      }  
    
    default: return state
  }
}

export default bikeReducer;
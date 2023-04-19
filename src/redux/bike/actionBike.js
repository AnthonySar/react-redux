import { BUY_BIKE } from "./type";

export const buyBike = (totalBike) => {
  return {
    type: BUY_BIKE, 
    payload: totalBike
  }
}
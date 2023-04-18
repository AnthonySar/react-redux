import { BUY_MACBOOK } from './type';

const initialStateMacbook = {
  macbook: 5
}

const macbookReducer = (state = initialStateMacbook, action) => {
  switch (action.type) {
    case BUY_MACBOOK:
      return {
        ...state,
        macbook: state.macbook - 1
      }
  
    default: return state
  }
}

export default macbookReducer;
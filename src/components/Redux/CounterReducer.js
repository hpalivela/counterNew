import { INCREMENT, DECREMENT, RESET } from "./CounterActionTypes";
const intialState = {
  counter: 0,
};
export const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
        return {counter:state.counter-1};
    case RESET:
        return {counter:state.counter=0}
    default:
        return state;

  }
};

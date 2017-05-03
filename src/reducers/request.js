import { START_REQUEST, COMPLETE_REQUEST } from '../actions';

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST:
      return { isLoading: true };

    case COMPLETE_REQUEST:
      return { data: action.payload.data, isLoading: false, isLoaded: true };

    default:
      return state;
  }
};

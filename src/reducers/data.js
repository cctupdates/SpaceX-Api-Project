import { GET_DATA, FILTER_DATA_BY_YEAR } from "./types";

const initialState = {
  data: [],
};

export function data(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        data: payload,
      };

    case FILTER_DATA_BY_YEAR:
      return {
        ...state,
        data: state.data.filter((obj) => obj.launch_year === payload),
      };

    default:
      return state;
  }
}

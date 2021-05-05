import axios from "axios";

import { GET_DATA } from "../reducers/types";

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.spaceXdata.com/v3/launches");

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const filterDataByYear = (year) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`
    );

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const filterDataBySuccessLand = (launch_success = true) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}`
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};
export const filterDataBySuccessLandAndLaunch = (
  land_success = true,
  launch_success = true
) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}`
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
  }
};

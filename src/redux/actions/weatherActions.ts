import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  GET_WEATHER,
  SET_LOADING,
  WeatherAction,
  WeatherResponse,
  WeatherParent,
} from '../../interfaces/weather';

const defaultWoeid: number = 638242;

export const getWeather = (
  woeid: number = defaultWoeid
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://www.metaweather.com/api/location/${woeid}`
      );
      const responseData: WeatherResponse = response.data;
      dispatch({
        type: GET_WEATHER,
        payload: responseData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const queryWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${city}`
      );
      const responseData: WeatherParent[] = response.data;
      const woeid = responseData[0].woeid;
      dispatch(getWeather(woeid));
    } catch (error) {}
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

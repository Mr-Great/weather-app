import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  GET_WEATHER,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
  WeatherResponse,
  WeatherParent,
} from '../../interfaces/weather';
import axios from 'axios';

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
      if (responseData.length === 0) {
        dispatch({
          type: SET_ERROR,
          payload:
            'No Result found! Redirecting you to default wetaher forecast in a bit...',
        });
      } else if (responseData.length > 1) {
        dispatch({
          type: SET_ERROR,
          payload:
            'Please be more specific with query. Type the full name of the city to get result',
        });
      } else {
        const woeid = responseData[0].woeid;
        dispatch(getWeather(woeid));
      }
    } catch (error) {}
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: '',
  };
};

import { Reducer } from 'redux';
import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from '../../interfaces/weather';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

const weatherReducer: Reducer<WeatherState, WeatherAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;

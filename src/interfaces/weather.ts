export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';

export interface WeatherData {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface WeatherParent {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface WeatherSource {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export interface WeatherResponse {
  consolidated_weather: WeatherData[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: WeatherParent;
  sources: WeatherSource[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export interface WeatherState {
  data: WeatherResponse | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherResponse;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction;

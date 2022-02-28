import { FC } from 'react';
import { WeatherData } from '../interfaces/weather';

interface WeatherDetailsProps {
  weather: WeatherData;
}

const WeatherDetails: FC<WeatherDetailsProps> = ({ weather }) => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 clear-both'>
        <div className='grid grid-cols-1 gap-2 text-center'>
          <p className='font-bold text-5xl text-amber-500 mb-2'>
            {Math.round(weather.the_temp)}&deg;C
          </p>
          <p className='text-gray-600 text-3xl'>{weather.weather_state_name}</p>
        </div>
        <div className='grid grid-cols-1 gap-2 my-2 border-l-2 border-gray-200 px-4'>
          <p className='col-end-2 text-gray-500'>
            <strong>Wind Speed: </strong>
            {Math.round(weather.wind_speed)}mph
          </p>
          <p className='text-gray-500'>
            <strong>Humidity: </strong>
            {weather.humidity}%
          </p>
          <p className='text-gray-500'>
            <strong>Min Temp: </strong>
            {Math.round(weather.min_temp)}&deg;C
          </p>
          <p className='text-gray-500'>
            <strong>Max Temp: </strong>
            {Math.round(weather.max_temp)}&deg;C
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

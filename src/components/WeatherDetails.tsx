import { FC } from 'react';
import { WeatherData } from '../interfaces/weather';

interface WeatherDetailsProps {
  weatherIcon: string;
  weather: WeatherData;
}

const WeatherDetails: FC<WeatherDetailsProps> = ({ weatherIcon, weather }) => {
  const roundUpInfo = (info: number): number => {
    return Math.round(info);
  };
  const convertWindSpeed = (windSpeed: number): number => {
    return roundUpInfo(windSpeed / 1.151);
  };

  return (
    <div>
      <div>
        <img src={weatherIcon} className='float-right' alt='' />
      </div>
      <div className='grid grid-cols-2 gap-4 clear-both'>
        <div className='grid grid-cols-1 gap-2 text-center'>
          <p className='font-bold text-5xl text-amber-500 mb-2'>
            {roundUpInfo(weather.the_temp)}&deg;C
          </p>
          <p className='text-gray-600 text-3xl'>{weather.weather_state_name}</p>
        </div>
        <div className='grid grid-cols-1 gap-2 my-2 border-l-2 border-gray-200 px-4'>
          <p className='col-end-2 text-gray-500'>
            <strong>Wind Speed: </strong>
            {convertWindSpeed(weather.wind_speed)}kph
          </p>
          <p className='text-gray-500'>
            <strong>Humidity: </strong>
            {weather.humidity}%
          </p>
          <p className='text-gray-500'>
            <strong>Min Temp: </strong>
            {roundUpInfo(weather.min_temp)}&deg;C
          </p>
          <p className='text-gray-500'>
            <strong>Max Temp: </strong>
            {roundUpInfo(weather.max_temp)}&deg;C
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

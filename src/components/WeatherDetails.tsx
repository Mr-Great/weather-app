import { FC } from 'react';
import { WeatherData } from '../interfaces/weather';
import moment from 'moment';

interface WeatherDetailsProps {
  day: string;
  weatherIcon: string;
  weather: WeatherData;
  onHandleForecast: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const WeatherDetails: FC<WeatherDetailsProps> = ({
  day,
  weatherIcon,
  weather,
  onHandleForecast,
}) => {
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
          <p className='text-gray-400 text-md'>
            {moment(weather.applicable_date, 'YYYY-MM-DD').format(
              'dddd MMM YYYY'
            )}
          </p>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-full'
            onClick={onHandleForecast}
          >
            {day}
          </button>
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

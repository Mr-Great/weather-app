import { FC } from 'react';
import { WeatherData, WeatherResponse } from '../interfaces/weather';
import WeatherDetails from './WeatherDetails';

interface WeatherProps {
  data: WeatherResponse;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const currentDate = '2022-02-28';
  const weatherReport: WeatherData[] = data.consolidated_weather;
  const details: JSX.Element[] = [];
  const title: string = data.title;

  weatherReport.map((weather) => {
    if (weather.applicable_date === currentDate) {
      details.push(
        <WeatherDetails
          key={weather.id}
          weatherIcon={`https://www.metaweather.com/static/img/weather/png/64/${weather.weather_state_abbr}.png`}
          weather={weather}
        />
      );
    }
    return details;
  });

  return (
    <div>
      <h1 className='text-center text-2xl py-4'>
        Today's weather report in {title}
      </h1>
      <div className='max-w-md bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4'>
        {details}
      </div>
    </div>
  );
};

export default Weather;

import { FC, useState } from 'react';
import { WeatherData, WeatherResponse } from '../interfaces/weather';
import WeatherDetails from './WeatherDetails';
import moment from 'moment';

interface WeatherProps {
  data: WeatherResponse;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const currentDate = moment().format('YYYY-MM-DD');
  const [date, setDate] = useState(currentDate);
  const [day, setDay] = useState('Tomorrow');
  const weatherReport: WeatherData[] = data.consolidated_weather;
  const details: JSX.Element[] = [];
  const title: string = data.title;

  const handleForecast = () => {
    if (date === currentDate) {
      const newDate = moment().add(1, 'days').format('YYYY-MM-DD');
      setDate(newDate);
      setDay('Today');
    } else {
      setDate(currentDate);
      setDay('Tomorrow');
    }
  };

  weatherReport.map((weather) => {
    if (weather.applicable_date === date) {
      details.push(
        <WeatherDetails
          key={weather.id}
          day={day}
          weatherIcon={`https://www.metaweather.com/static/img/weather/png/64/${weather.weather_state_abbr}.png`}
          weather={weather}
          onHandleForecast={handleForecast}
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

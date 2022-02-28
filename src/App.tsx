import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { getWeather, setLoading } from './redux/actions/weatherActions';
import Weather from './components/Weather';
import Search from './components/Search';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Search />
      {loading ? (
        <h3>Loading!!! Waiting for weather report...</h3>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
    </div>
  );
};

export default App;

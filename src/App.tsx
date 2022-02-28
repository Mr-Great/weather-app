import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Weather from './components/Weather';
import { getWeather, setLoading } from './redux/actions/weatherActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h3>Loading!!! Waiting for weather report...</h3>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
    </div>
  );
};

export default App;

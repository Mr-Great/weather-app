import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { queryWeather, setLoading } from '../redux/actions/weatherActions';

const Search: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setLoading());
    dispatch(queryWeather(city));
    setCity('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='px-8 pb-8'>
        <div className='mb-2'>
          <input
            className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full'
            id='username'
            type='text'
            placeholder='Enter name of city'
            value={city}
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-2'>
          <button
            type='submit'
            className='bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded w-full'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

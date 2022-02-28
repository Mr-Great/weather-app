import { FC } from 'react';

interface AlertProps {
  error: string;
}

const Alert: FC<AlertProps> = ({ error }) => {
  return (
    <div
      className='bg-red-100 border border-red-200 text-red-700 px-4 py-3 my-2 rounded relative'
      role='alert'
    >
      <span className='block sm:inline'>{error}</span>
    </div>
  );
};

export default Alert;

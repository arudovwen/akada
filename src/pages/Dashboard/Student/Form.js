import { Link } from 'react-router-dom';
import * as React from 'react';

const Form = function () {
  const [type, setType] = React.useState('individual');
  return (
    <div className='bg-white ml-4  py-4 lg:py-6 px-6 lg:px-10 rounded-[30px] top-[20rem] w-[42rem]  absolute scale-in-center'>
      <div className='capitalize mb-1 text-text-color text-2xl font-bold'>
        add sponsor
      </div>
      <p className='text-base lg:text-xl font-bold  mb-5'>
        Kindly fill in your details of sponsor
      </p>

      <form
        action='
        '
      >
        <div className=' mb-5'>
          <label htmlFor='' className='text-sm'>
            Select type
          </label>
          <select
            onChange={(e) => setType(e.target.value)}
            className='block border-b-2 w-full h-10 text-xl font-medium text-gray-300'
          >
            <option value='individual'>Individual</option>
            <option value='cooporate/business'>Cooporate</option>
          </select>
        </div>
        <div className=' mb-5'>
          <label htmlFor='' className='text-sm capitalize'>
            {type} name
          </label>
          <input
            type='text'
            className='block border-b-2 w-full h-10 text-xl font-medium'
            placeholder='Full name'
          />
        </div>
        <div className=' mb-5'>
          <label htmlFor='' className='text-sm'>
            Enter your business email
          </label>
          <input
            type='email'
            className='block border-b-2 w-full h-10 text-xl font-medium'
            placeholder='Email address'
          />
        </div>

        <button className='uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5'>
          <Link to='/verify-account'>Add Sponsor</Link>
        </button>
      </form>
    </div>
  );
};

export default Form;

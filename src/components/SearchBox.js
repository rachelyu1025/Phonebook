import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SearchBox = () => {
  return (
    <div className='flex flex-col'>
      <label htmlFor='search' className='font-bold text-lg'>
        Search
      </label>

      <div className='flex items-center my-1'>
        <input
          type='text'
          id='search'
          name='search'
          className='border-4 border-blue rounded-3xl bg-gray px-2 py-1 mr-2 w-full focus:outline-none'
        />
        <MagnifyingGlassIcon className='w-10 h-8 text-blue hover:cursor' />
      </div>
    </div>
  );
};

export default SearchBox;

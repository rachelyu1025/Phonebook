import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SearchBox = () => {
  const [searchItem, setSearchItem] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch({ type: 'SEARCH', payload: { searchItem } });
  };

  const handleRemoveSearch = () => {
    setSearchItem((prev) => '');

    dispatch({ type: 'SEARCH', payload: { searchItem: '' } });
  };

  return (
    <div className='flex flex-col'>
      <label htmlFor='search' className='font-bold text-lg'>
        Search
      </label>

      <div className='relative flex items-center my-1'>
        <input
          type='text'
          id='search'
          name='search'
          value={searchItem || ''}
          onChange={(e) => setSearchItem(e.target.value)}
          className='border-4 border-blue rounded-3xl bg-gray px-2 py-1 mr-2 w-full focus:outline-none'
        />

        <button
          type='button'
          onClick={handleRemoveSearch}
          className={searchItem ? `visible` : `hidden`}
        >
          <XMarkIcon className='absolute top-3 right-16 w-4 h-4' />
        </button>
        <button type='button' onClick={handleSearch}>
          <MagnifyingGlassIcon className='w-10 h-8 text-blue hover:cursor' />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

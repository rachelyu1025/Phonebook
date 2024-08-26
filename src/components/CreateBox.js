import React from 'react';

const CreateBox = () => {
  return (
    <div className='flex flex-col rounded-xl py-3 px-6 bg-[#3f51e3] space-y-2 text-white'>
      <label htmlFor='name' className='font-semibold'>
        Name
      </label>
      <input
        type='text'
        id='name'
        name='name'
        required
        className='rounded focus:outline-none text-black p-1'
      />

      <label htmlFor='mobile' className='font-semibold'>
        Mobile
      </label>
      <input
        type='tel'
        id='mobile'
        name='mobile'
        pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}'
        required
        className='rounded focus:outline-none p-1'
      />
      <span className='inline-block'>ex : 010-1234-5678</span>

      <button
        type='button'
        className='font-bold text-lg self-end hover:cursor-pointer'
      >
        Add
      </button>
    </div>
  );
};

export default CreateBox;

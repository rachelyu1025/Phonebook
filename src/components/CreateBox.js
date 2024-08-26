import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateBox = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({ type: 'ADD', payload: { name, mobile } });

    setName((prev) => '');
    setMobile((prev) => '');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col rounded-xl py-3 px-6 bg-[#3f51e3] space-y-2 text-white'
    >
      <label htmlFor='name' className='font-semibold'>
        Name
      </label>
      <input
        type='text'
        id='name'
        name='name'
        value={name || ''}
        placeholder='이름은 여기에!'
        required
        onChange={(evt) => setName(evt.target.value)}
        className='rounded focus:outline-none text-black p-1'
      />

      <label htmlFor='mobile' className='font-semibold'>
        Mobile
      </label>
      <input
        type='tel'
        id='mobile'
        name='mobile'
        value={mobile || ''}
        pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}'
        placeholder='번호는 여기에!'
        required
        onChange={(evt) => setMobile(evt.target.value)}
        className='rounded focus:outline-none p-1 text-black'
      />
      <span className='inline-block'>ex : 010-1234-5678</span>

      <button
        type='submit'
        className='font-bold text-lg self-end hover:cursor-pointer'
      >
        Add
      </button>
    </form>
  );
};

export default CreateBox;

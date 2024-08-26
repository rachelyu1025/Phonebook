import React from 'react';
import { TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    dispatch({
      type: 'DELETE',
      payload: { name: item.name, mobile: item.mobile },
    });
  };

  return (
    <div className='flex justify-between items-center my-3 px-2 border-l-4 border-blue'>
      <div className='flex items-center'>
        <UserCircleIcon className='w-10 h-10 mr-2' />

        <div className='flex flex-col '>
          <strong>{item.name}</strong>
          <strong>{item.mobile}</strong>
        </div>
      </div>

      <button onClick={handleDeleteList} className='mr-4 '>
        <TrashIcon className='w-4 h-4 sm:w-6 sm:h-6' />
      </button>
    </div>
  );
};

export default ListItem;

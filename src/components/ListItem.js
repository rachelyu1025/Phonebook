import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const ListItem = ({ item }) => {
  return (
    <div className='flex items-center my-3 px-2 border-l-4 border-blue'>
      <UserCircleIcon className='w-10 h-10 mr-2' />

      <div className='flex flex-col '>
        <strong>{item.name}</strong>
        <strong>{item.mobile}</strong>
      </div>
    </div>
  );
};

export default ListItem;

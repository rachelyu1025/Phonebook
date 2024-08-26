import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const ListItem = () => {
  return (
    <div className='flex items-center my-3 px-2 border-l-4 border-blue'>
      <UserCircleIcon className='w-10 h-10 mr-2' />

      <div className='flex flex-col '>
        <strong>최상엽</strong>
        <strong>010-1234-1234</strong>
      </div>
    </div>
  );
};

export default ListItem;

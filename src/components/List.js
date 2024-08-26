import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const List = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div className='h-64 overflow-y-scroll'>
      {contactList.map((item, idx) => (
        <ListItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default List;

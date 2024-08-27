import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const List = () => {
  const contactList = useSelector((state) => state.contactList);
  const searchItem = useSelector((state) => state.searchItem);

  return (
    <div className='h-64 overflow-y-scroll'>
      {searchItem
        ? contactList
            .filter((el) => el.name.includes(searchItem))
            .map((item, idx) => <ListItem key={idx} item={item} />)
        : contactList.map((item, idx) => <ListItem key={idx} item={item} />)}
    </div>
  );
};

export default List;

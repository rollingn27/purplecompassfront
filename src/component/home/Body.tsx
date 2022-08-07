import React from 'react';
import Sidebar from './Sidebar';
import Kanban from './Kanban';

const Body = () => {
  const body = true;

  return (
    <>
      <Sidebar />
      <Kanban />
    </>
  );
};

export default Body;

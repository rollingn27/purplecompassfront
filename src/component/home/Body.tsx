import React from 'react';
import Sidebar from './Sidebar';
import Kanban from './Kanban';
import CreateUi from './CreateUi'

const Body = () => {
  const body = true;

  return (
    <>
      <Sidebar />
      <Kanban />
      <CreateUi />
    </>
  );
};

export default Body;

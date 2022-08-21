import React, { useState, Suspense } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Kanban from '../Kanban/Kanban';
import CreateUi from './CreateUi';

const Body = () => {
  const [hbool, setHbool] = useState(false);
  const thisset = () => {
    setHbool(!hbool);
  };

  return (
    <>
      <Sidebar />
      <Kanban />
      <CreateUi thisset={thisset} />
    </>
  );
};

export default Body;

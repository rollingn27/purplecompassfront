import React, { useState, Suspense } from 'react';
import Sidebar from './Sidebar';
import Kanban from './Kanban';
import CreateUi from './CreateUi';

const Body = () => {
  const body = true;
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

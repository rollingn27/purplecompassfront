import { useState } from 'react';
import Kanban from '../Kanban/Kanban';
import CreateUi from './CreateUi';
import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import SignIn from '../user/SignIn';

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

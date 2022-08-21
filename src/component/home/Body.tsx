import React, { useState, Suspense } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Kanban from '../Kanban/Kanban';

import CreateUi from './CreateUi';
import DashBoard from '../dashboard/DashBoard';

const Body = () => {
  const [checker, setChecker] = useState<string>('');

  const navigator = () => {
    if (checker === 'dashBoard') {
      return <DashBoard />;
    } else if (checker === 'issue') {
      return <Kanban />;
    } else {
      return <div>Default Body</div>;
    }
  };
  return (
    <>
      <Sidebar setChecker={setChecker} />
      {navigator()}
      <CreateUi />
    </>
  );
};

export default Body;

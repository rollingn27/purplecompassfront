import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Kanban from '../Kanban/Kanban';

import CreateUi from './CreateUi';
import DashBoard from '../dashboard/DashBoard';

const Body = () => {
  const [checker, setChecker] = useState<string>('');

  const navigator = () => {
    alert('navigator activated');
    if (checker === 'dashBoard') {
      return <DashBoard />;
    } else if (checker === 'issue') {
      return <Kanban />;
    } else {
      {
        alert('no props');
      }
      return <div>Not Found</div>;
    }
  };

  return (
    <>
      <Sidebar setChecker={setChecker} />
      <div>props 테스트 중</div>
      {navigator}
      <CreateUi />
    </>
  );
};

export default Body;

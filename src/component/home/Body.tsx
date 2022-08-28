import React, { useState, Suspense } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Kanban from '../Kanban/Kanban';
import CreateProject from '../project/CreateProject';
import CreateIssue from '../issue/CreateIssue';
import CreateUi from './CreateUi';
import DashBoard from '../dashboard/DashBoard';
import { css } from '@emotion/react';

const Body = () => {
  const [checker, setChecker] = useState<string>('');

  const navigator = () => {
    if (checker === 'issue') {
      return <Kanban />;
    } else {
      return <DashBoard />;
    }
  };
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = (e: React.MouseEvent<HTMLAnchorElement>) => setModalOpen((modalOpen) => !modalOpen);

  const userId = 'TestId';
  const [modalChecker, setModalChecker] = useState<string>('');

  const modalNavi = () => {
    if (modalChecker === 'project') {
      return (
        <div css={modalStyle}>
          <CreateProject
            userId={userId}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            closable={true}
            maskClosable={true}
          />
        </div>
      );
    } else if (modalChecker === 'issue') {
      return (
        <div css={modalStyle}>
          <CreateIssue
            userId={userId}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            closable={true}
            maskClosable={true}
          />
        </div>
      );
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

const modalStyle = css`
  position: fixed;
  top: 15rem;
  left: 50rem;
  background: purple;
  border-radius: 1.5rem;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  display: flex;
  flex-direction: column;
  width: 280px;
`;

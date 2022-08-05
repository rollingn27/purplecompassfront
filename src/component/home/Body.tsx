import React from 'react';
import { css } from '@emotion/react';
import IssueBox from './IssueBox';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <>
      <Sidebar />
      <div css={bodyStyle}>
        <div>
          <span>before</span>
          <IssueBox />
          <IssueBox />
          <IssueBox />
          <IssueBox />
          <IssueBox />
        </div>
        <div>
          <span>onGoing</span>
          <IssueBox />
          <IssueBox />
          <IssueBox />
          <IssueBox />
          <IssueBox />
        </div>
        <div>
          <span>Completion</span>
          <IssueBox />
          <IssueBox />
          <IssueBox />
        </div>
      </div>
    </>
  );
};

export default Body;

const bodyStyle = css`
  margin: 3rem 5rem 0 7.5rem;
  min-width: 90%;
  min-height: 50rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  & > div {
    text-align: center;
    width: 33.333%;
    min-width: 17rem;
    padding: 0 1.5rem 0 1.5rem;

    span {
      display: inline-block;
      font-size: 2rem;
      color: purple;
      margin-bottom: 2rem;
    }
  }
`;

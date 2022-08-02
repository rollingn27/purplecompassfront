import React from 'react';
import { css } from '@emotion/react';

const Body = () => {
  return (
    <>
      <div css={bodyStyle}>
        <div>시작전</div>
        <div>진행중</div>
        <div>완료 </div>
      </div>
    </>
  );
};

export default Body;

const bodyStyle = css`
  margin: 5rem 1.5rem 0 1.5rem;
  min-height: 50rem;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  div {
    text-align: center;
    width: 35.333%;
    border: 1px solid red;
    padding: 0 1.5rem 0 1.5rem;
  }
`;

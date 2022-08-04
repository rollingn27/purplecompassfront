import React from 'react';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <>
      <div css={headerStyle}>
        <div css={logoStyle}>로고</div>
        <div css={projectStyle}>
          <div css={rightStyle}></div>
          <div>프로젝트</div>
          <div>create</div>
          <div>대시보드</div>
        </div>
        <div css={loginStyle}>
          <div css={rightStyle}></div>
          <div>help</div>
          <div>to us</div>
          <div>회원님</div>
        </div>
      </div>
    </>
  );
};

export default Header;

const rightStyle = css`
  flex-grow: 1;
`;

const headerStyle = css`
  min-width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 3rem 1.5rem 0 1.5rem;
  height: 3rem;
  font-size: 1.5rem;
  border-bottom: 1px solid purple;
  color: purple;
`;

const logoStyle = css`
  flex-grow: 1;
  margin: auto;
  min-width: 2rem;
`;

const projectStyle = css`
  display: flex;
  flex-grow: 5;
  margin: auto;
  width: 30rem;
  div {
    width: 10rem;
  }
`;

const loginStyle = css`
  display: flex;
  flex-grow: 5;
  margin: auto;
  width: 30rem;
  div {
    width: 10rem;
  }
`;

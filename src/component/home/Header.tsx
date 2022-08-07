import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as More } from '../../assets/ellipsis-horizontal-outline.svg';

const Header = () => {
  return (
    <>
      <div css={headerStyle}>
        <div css={logoStyle}>
          <img src="../images/images.png" style={{ width: '3rem' }} />
        </div>
        <div css={loginStyle}>
          <div css={rightStyle}></div>
          <div style={{ textAlign: 'right' }}>
            <span css={logo}>P</span>
            <span css={logo}>T</span>
            <span css={logo}>S</span>
          </div>
          <More css={moreStyle} />
          <div>to us</div>
          <div>회원님</div>
        </div>
      </div>
    </>
  );
};

export default Header;

const logo = css`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background: yellow;
  text-align: center;
  margin: auto 0.5rem auto 0;
`;

const moreStyle = css`
  width: 2rem;
  margin-left: 1rem;
  margin-right: 2.5rem;
`;

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

const loginStyle = css`
  display: flex;
  flex-grow: 5;
  margin: auto;
  width: 30rem;
  div {
    width: 10rem;
  }
`;

import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ReactComponent as AddOutline } from '../../assets/add-outline.svg';
import { ReactComponent as Project } from '../../assets/clipboard-outline.svg';
import { ReactComponent as Issue } from '../../assets/document-outline.svg';
import { ReactComponent as Todo } from '../../assets/list-outline.svg';
import { ReactComponent as Check } from '../../assets/checkmark-outline.svg';
const CreateUi = () => {
  const [isOpen, setRightUiMenu] = useState(false);

  const menuToggle = () => {
    setRightUiMenu((isOpen) => !isOpen);
  };

  return (
    <>
      <span className="createUi" css={isOpen ? showUi : hideUi}>
        <span className="toggle" onClick={menuToggle}>
          <AddOutline />
        </span>
        <ul>
          <li css={{ style: '--i:0;' }}>
            <a href="#">
              <span style={{ width: '2rem' }}>
                <Project css={imgStyle} />
              </span>
            </a>
          </li>
          <li css={{ style: '--i:1;' }}>
            <a href="#">
              <Issue css={imgStyle} />
            </a>
          </li>
          <li css={{ style: '--i:2;' }}>
            <a href="#">
              <Todo css={imgStyle} />
            </a>
          </li>
          <li css={{ style: '--i:3;' }}>
            <a href="#">
              <Check css={imgStyle} />
            </a>
          </li>
          <li css={{ style: '--i:4;' }}>
            <a href="#"></a>
          </li>
          <li css={{ style: '--i:5;' }}>
            <a href="#"></a>
          </li>
        </ul>
      </span>
    </>
  );
};

export default CreateUi;

const imgStyle = css`
  width: 2rem;
`;

const commonAttr = css`
  margin: 0;
  position: fixed;
  inset: 40rem 100rem 5rem 50rem; // 상 우 하 좌
  // background: purple;
  box-sizing: border-box;
  // border-left: 10px solid purple;
  width: 2rem;
  border-radius: 2rem;
  // overflow: hidden;
  box-shadow: 15px 15px 25px rgbg(0, 0, 0, 0.05);
  transition: 0.5s;

  .createUi {
    // width: 200px;
    // height: 200px;
    background: #0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: purple;
  }
  .createUi ul {
    list-style: none;
  }
  .createUi ul li {
    potition: absolute;
    left: 0;
    transform-origin: 100px;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));

    a {
      width: 2rem;
    }
  }
`;

const showUi = css`
  ${commonAttr}
  .toggle {
    width: 2rem;
    height: 2rem;
    background: #fff;
    display: inline-block;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    font-size: 1rem;
    transition: 1.5s;
    transform: rotate(360deg);
  }
`;

const hideUi = css`
  ${commonAttr}
`;

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
          <li css={no1}>
            <a href="#">
              <Check />
            </a>
          </li>
          <li css={no2}>
            <a href="#">
              <Todo />
            </a>
          </li>
          <li css={no3}>
            <a href="#">
              <Issue />
            </a>
          </li>
          <li css={no4}>
            <a href="#">
              <Project />
            </a>
          </li>
        </ul>
      </span>
    </>
  );
};

export default CreateUi;

const no1 = css`
  --i: 0;
`;
const no2 = css`
  --i: 1;
`;
const no3 = css`
  --i: 2;
`;
const no4 = css`
  --i: 3;
`;

const commonAttr = css`
  position: fixed;
  inset: 48rem 100rem 5rem 110rem; // 상 우 하 좌
  box-sizing: border-box;
  width: 2rem;
  width: 200px;
  height: 200px;
  background: rgba(225, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .toggle {
    position: fixed;
    transition: 1.5s;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    width: 2.5rem;
    height: 2.5rem;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    border-radius: 100%;
    cursor: pointer;
    font-size: 1rem;
  }
  ul {
    display: hidden;
    justify-content: center;
    align-items: center;
  }
  ul li {
    position: absolute;
    display: flex;
    left: 0;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transform-origin: 80px;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
  }
  ul li a {
    width: 40px;
    height: 40px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    border-radius: 100%;
    opacity: 0.7;
    transform: rotate(calc(70deg + (180deg / -4 * var(--i))));
  }
`;

const showUi = css`
  ${commonAttr}
  .toggle {
    transform: rotate(225deg);
  }

  ul li {
    transform: rotate(calc(-70deg + (180deg / 4 * var(--i))));
  }
  ul li a:hover {
    color: red;
  }
`;

const hideUi = css`
  ${commonAttr}
  .toggle {
    transform: rotate(360deg);
  }
  ul li {
    transform: rotate(0deg) translateX(80px);
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
  }
`;

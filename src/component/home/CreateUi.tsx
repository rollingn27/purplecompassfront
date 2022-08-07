import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ReactComponent as Create } from '../../assets/create-outline.svg';
import { ReactComponent as Project } from '../../assets/clipboard-outline.svg';
import { ReactComponent as Issue } from '../../assets/alert-circle-outline.svg';

const CreateUi = () => {
  
  const [isOpen, setRightUiMenu] = useState(false);

  const menuToggle = () => {
    setRightUiMenu((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="menu">
        <span>여기</span>
        <div className="toggle"><Create /></div>
        <li css ={{style: "--i:0;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:1;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:2;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:3;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:4;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:5;"}}>
            <a href="#"></a>
        </li>
        <li css ={{style: "--i:6;"}}>
            <a href="#"></a>
        </li>
      </div>
    </>
  );
};

export default CreateUi;

const hideMenu = css`
  background: red;
`;
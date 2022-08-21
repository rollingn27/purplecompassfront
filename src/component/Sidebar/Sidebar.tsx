import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ReactComponent as Issue } from '../../assets/alert-circle-outline.svg';
import { ReactComponent as DashBoard } from '../../assets/grid-outline.svg';
import { ReactComponent as Help } from '../../assets/help-outline.svg';
import { ReactComponent as LogOut } from '../../assets/log-out-outline.svg';
import { ReactComponent as Person } from '../../assets/person-circle-outline.svg';
import { ReactComponent as Search } from '../../assets/search-outline.svg';
import { ReactComponent as Setting } from '../../assets/settings-outline.svg';
import { Link } from 'react-router-dom';

type sideBarProps = {
  setChecker: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({ setChecker }: sideBarProps) => {
  const [isOpen, setSideMenu] = useState(false);

  const menuToggle = () => {
    setSideMenu((isOpen) => !isOpen);
  };

  const dashBoard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setChecker((checker) => 'dashBoard');
  };

  return (
    <span css={isOpen ? showMenu : hideMenu}>
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <Person />
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <a href="#">
            <span className="icon">
              <Search />
            </span>
            <span className="title">Search</span>
          </a>
        </li>
        <li>
          <a onClick={dashBoard}>
            <span className="icon">
              <DashBoard />
            </span>
            <span className="title">DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Issue />
            </span>
            <span className="title">Issue</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Help />
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li style={{ marginBottom: '7rem' }}>
          <a href="#">
            <span className="icon">
              <Setting />
            </span>
            <span className="title">Setting</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <LogOut />
            </span>
            <span className="title">LogOut</span>
          </a>
        </li>
      </ul>
      <div onClick={menuToggle} className="toggle"></div>
    </span>
  );
};

export default Sidebar;

const menuCommon = css`
  position: fixed;
  inset: 9rem 0 3.5rem 1.5rem;
  background: purple;
  border-left: 10px solid purple;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 15px 15px 25px rgbg(0, 0, 0, 0.05);
  transition: 0.5s;
  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    li {
      position: relative;
      list-style: none;
      width: 100%;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      // padding: 0.5rem 0;
    }

    li:hover {
      background-color: #fff;
    }

    li:nth-of-type(1) {
      top: 1rem;
      margin-bottom: 3rem;
      background: none;
    }

    li:not(:first-of-type):hover::before {
      content: '';
      position: absolute;
      top: -20px;
      right: 0;
      width: 20px;
      height: 20px;
      background: transparent;
      border-bottom-right-radius: 20px;
      box-shadow: 7.5px 7.5px 0 7.5px #fff;
    }
    li:not(:first-of-type):hover::after {
      content: '';
      position: absolute;
      bottom: -20px;
      right: 0;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-right-radius: 20px;
      box-shadow: 7.5px -7.5px 0 7.5px #fff;
    }
    li a {
      position: relative;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #fff;
    }
    li:hover:not(:first-of-type) a {
      color: #365fa1;
    }
    li a .icon {
      position: relative;
      display: block;
      min-width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
    }
    li a .icon ion-icon {
      font-size: 1.5rem;
    }
    li a .title {
      position: relative;
      padding: 0 2rem;
      height: 60px;
      line-height: 2.5rem;
      text-align: start;
      white-space: nowrap;
    }
  }

  .toggle {
    position: absolute;
    bottom: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 3px;
    border-radius: 3px;
    background: #365fa1;
    transform: translateY(-5px);
    transition: 1s;
  }

  .toggle::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 3px;
    border-radius: 3px;
    background: #365fa1;
    transform: translateY(5px);
    transition: 1s;
  }
`;

const hideMenu = css`
  ${menuCommon}
  width: 3.25rem;
`;

const showMenu = css`
  opacity: 0.7;
  width: 12rem;
  ${menuCommon}

  .toggle::before {
    transform: translateY(0px) rotate(-45deg);
  }

  .toggle::after {
    transform: translateY(0px) rotate(225deg);
  }
`;

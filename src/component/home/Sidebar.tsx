import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ReactComponent as Person } from '../../assets/person-circle-outline.svg';
import { ReactComponent as More } from '../../assets/ellipsis-horizontal-outline.svg';
import { ReactComponent as LogOut } from '../../assets/log-out-outline.svg';
import { ReactComponent as Project } from '../../assets/clipboard-outline.svg';
import { ReactComponent as Setting } from '../../assets/settings-outline.svg';
import { ReactComponent as DashBoard } from '../../assets/grid-outline.svg';
import { ReactComponent as Issue } from '../../assets/alert-circle-outline.svg';

const Sidebar = () => {
  const [isOpen, setSideMenu] = useState(false);

  const menuToggle = () => {
    setSideMenu((isOpen) => !isOpen);
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
        <li>
          <a href="#">
            <span className="icon">
              <More />
            </span>
            <span className="title">More</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <DashBoard />
            </span>
            <span className="title">DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <Project />
            </span>
            <span className="title">Project</span>
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
        <li style={{ marginBottom: '1.0rem' }}>
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

const hideMenu = css`
  position: fixed;
  inset: 9rem 0 3.5rem 1.5rem;
  background: purple;
  border-left: 10px solid purple;
  width: 4rem;
  border-radius: 50px;
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
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding: 0.5rem 0;
    }

    li:hover {
      background-color: #fff;
    }

    li:nth-of-type(1) {
      top: 20px;
      margin-bottom: 40px;
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
      display: block;
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
      min-width: 3.5rem;
      height: 3.5rem;
      line-height: 3.25rem;
      text-align: center;
    }
    li a .icon ion-icon {
      font-size: 1.75rem;
    }
    li a .title {
      position: relative;
      display: block;
      padding: 0 2rem;
      height: 60px;
      line-height: 3.25rem;
      text-align: start;
      white-space: nowrap;
    }
  }

  .toggle {
    position: absolute;
    bottom: 15px;
    right: 0.75rem;
    width: 50px;
    height: 50px;
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

const showMenu = css`
  opacity: 0.7;
  position: fixed;
  inset: 9rem 0 3.5rem 1.5rem;
  background: purple;
  border-left: 10px solid purple;
  width: 15rem;
  border-radius: 50px;
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
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding: 0.5rem 0;
    }

    li:hover {
      background-color: #fff;
    }

    li:nth-of-type(1) {
      top: 20px;
      margin-bottom: 40px;
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
      display: block;
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
      min-width: 3.5rem;
      height: 3.5rem;
      line-height: 3.25rem;
      text-align: center;
    }
    li a .icon ion-icon {
      font-size: 1.75rem;
    }
    li a .title {
      position: relative;
      display: block;
      padding: 0 2rem;
      height: 60px;
      line-height: 3.25rem;
      text-align: start;
      white-space: nowrap;
    }
  }

  .toggle {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
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
  .toggle::before {
    transform: translateY(0px) rotate(-405deg);
  }

  .toggle::after {
    transform: translateY(0px) rotate(225deg);
  }
`;

const toggleStyle = css`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

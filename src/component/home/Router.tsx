import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import SignUp from '../user/SignUp';
import Home from './Home';
import DashBoard from '../dashboard/DashBoard';
import React from 'react';
import SignIn from '../user/SignIn';

const NotFound = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi('/');
  };

  return (
    <>
      <div onClick={onClick}>go home back</div>
    </>
  );
};
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

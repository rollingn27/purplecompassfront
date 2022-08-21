import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignUp from '../user/SignUp';
import Home from './Home';
import DashBoard from '../dashboard/DashBoard';
import React from 'react';
import SignIn from '../user/SignIn';
const NotFound = () => {
  return <Link to="..">돌아가!!</Link>;
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

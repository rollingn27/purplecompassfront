import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import User from './user/User';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

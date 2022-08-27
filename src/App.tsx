import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React from 'react';
import Router from './component/home/Router';

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router />
      <ToastContainer />
    </>
  );
}

export default React.memo(App);

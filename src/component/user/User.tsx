import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { serverTest } from '../../api/user/serverTest';

const User = () => {
  const [data, setData] = useState('');

  serverTest().then((res) => {
    setData(res);
  });

  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default User;

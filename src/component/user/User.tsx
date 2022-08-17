import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { serverTest } from '../../api/user/serverTest';
import { css } from '@emotion/react';

const User = () => {
  // const [data, setData] = useState('');

  // serverTest().then((res) => {
  //   setData(res);
  // });

  return (
    <>
      {/* <div>{data}</div> */}
      <div css={aaa}>ddd</div>
      <div css={aa}>ddd1</div>
    </>
  );
};

export default User;

const aaa = css`
  width: 100px;
  font-size:2rem;
`

const aa = css`
  width: 100px;
  font-size:32px;
`

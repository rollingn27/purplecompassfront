import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { css } from '@emotion/react';
import React from 'react';

const Copyright = (props: any) => {
  return (
    <>
      <hr css={hrStyle} />
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Purple Compass
        </Link>{' '}
        {2022}
        {'.'}
      </Typography>
    </>
  );
};

export default Copyright;

const hrStyle = css`
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: purple;
  width: 90%;
`;

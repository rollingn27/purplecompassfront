import React from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

const IssueBox = () => {
  return (
    <Card sx={{ minWidth: '15rem', marginBottom: '1rem' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">bugfix-001</Button>
        <div>status</div>
      </CardContent>
      <CardContent sx={{ minHeight: '10rem', margin: 'auto', display: 'flex', alignItems: 'center' }}>
        <div>내용</div>
      </CardContent>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div></div>
        <div></div>
        <div></div>
        <div>assignee: </div>
        <div>rolling</div>
      </CardContent>
    </Card>
  );
};

export default IssueBox;

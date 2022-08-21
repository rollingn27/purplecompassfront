import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  const navi = useNavigate();

  const onClick = () => {
    navi('/signin');
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'purple' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="ID" required fullWidth id="ID" label="ID" autoFocus />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="NickName"
                    required
                    fullWidth
                    id="NickName"
                    label="Nick Name"
                  />
                </Grid>
                <div style={{ width: '100%', padding: '0.25rem 0 0 1rem', color: 'grey', fontSize: '0.8rem' }}>
                  <Checkbox defaultChecked /> Be same as ID?
                </div>
                <Grid item xs={12} style={{ paddingTop: '0.25rem' }}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm password"
                    label="confirm Password"
                    type="password"
                    id="passwordConfirm"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: 'purple' }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item style={{ cursor: 'pointer' }}>
                  <Link onClick={onClick} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

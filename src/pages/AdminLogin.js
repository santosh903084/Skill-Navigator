import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, InputAdornment, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import bg_1 from './images/bg_1.jpg'; // Import the background image

const AdminLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(12, 'Password must be at most 12 characters'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      if (formik.isValid) {
        toast.success('Admin login successful');
        navigate('/admin-dashboard'); // Redirect to the admin dashboard after successful login
      } else {
        toast.error('Please correct the errors in the form');
      }
      setSubmitting(false);
    },
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg_1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for contrast
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            margin="normal"
            InputLabelProps={{
              style: { color: 'black' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            InputLabelProps={{
              style: { color: 'black' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;

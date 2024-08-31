import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, InputAdornment, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import bg_1 from './images/bg_1.jpg';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 characters')
        .max(12, 'Password must be at most 12 characters')
        .matches(/^[A-Z]/, 'First letter must be uppercase')
        .matches(/^(?=.*[0-9])/, 'Password must contain at least one number'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      if (formik.isValid) {
        // Simulate user data retrieval after successful login
        const userData = {
          name: 'John Doe', // Replace with actual user data
          email: values.email, // Use the email entered during login
        };

        toast.success('Login successful');
        // Pass user data to the Home component via React Router's state
        navigate('/home', { state: userData });
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
      setSubmitting(false);
    },
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg_1})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: '400px',
          margin: 'auto',
          background: 'rgba(255, 255, 255, 0.8)', // Light background with transparency
          backdropFilter: 'blur(10px)', // Apply blur effect
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
          InputLabelProps={{
            style: { color: 'black' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{ color: 'black' }} />
              </InputAdornment>
            ),
            style: { color: 'black' },
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
                <LockIcon style={{ color: 'black' }} />
              </InputAdornment>
            ),
            style: { color: 'black' },
          }}
        />
        <p style={{ color: 'black' }}>
          Note:
          <br />
          1. First letter must be uppercase,
          <br />
          2. Password must contain at least one number,
          <br />
          3. Password length must be between 8 and 12 characters.
        </p>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
        <p style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>
          Don't have an account?{' '}
          <Link href="/register" style={{ color: 'blue' }}>
            Register
          </Link>
        </p>
        <p style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>
  Forgot your password?{' '}
  <Link href="/forgot-password" style={{ color: 'blue' }}>
    Click here to reset
  </Link>
</p>

      </form>
    </div>
  );
};

export default Login;

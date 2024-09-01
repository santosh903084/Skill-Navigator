import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, InputAdornment, Link, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import bg_1 from './images/bg_1.jpg';

const Registration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleFormSubmit = async (values) => {
    try {
      // Example API call to Firebase or your backend
      // await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
      toast.success('Registration successful');
      navigate('/home', { state: { name: values.name } });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(15, 'Password must be at most 15 characters')
        .matches(/^[A-Z]/, 'First letter must be uppercase')
        .matches(/^(?=.*[0-9])/, 'Password must contain at least one number'),
      confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleFormSubmit(values);
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
          width: '100%',
          margin: 'auto',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          aria-label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
          InputLabelProps={{
            style: { color: 'black' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon style={{ color: 'black' }} />
              </InputAdornment>
            ),
            style: { color: 'black' },
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          aria-label="Email"
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
          aria-label="Password"
          type={showPassword ? 'text' : 'password'}
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
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff style={{ color: 'black' }} /> : <Visibility style={{ color: 'black' }} />}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: 'black' },
          }}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          aria-label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff style={{ color: 'black' }} /> : <Visibility style={{ color: 'black' }} />}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: 'black' },
          }}
        />
        <p style={{ color: 'black' }}>
          Password Requirements:
          <br />
          1. First letter must be uppercase,
          <br />
          2. Password must contain at least one number,
          <br />
          3. Password length must be between 8 and 15 characters.
        </p>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
        <p style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>
          Already have an account?{''}
          <Link href="/login" style={{ color: 'blue' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;

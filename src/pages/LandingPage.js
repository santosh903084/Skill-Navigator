import React from 'react';
import { AppBar, Toolbar, Button, Typography, Grid, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Sample images - replace with actual image paths
import bg_1 from './images/bg_1.jpg'; // Replace with your actual image

const LandingPage = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/login');
  };

  const handleUserRegister = () => {
    navigate('/register');
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Skill Navigator Application
          </Typography>
          <Button color="inherit" onClick={handleUserLogin}>
            User Login
          </Button>
          <Button color="inherit" onClick={handleUserRegister}>
            User Register
          </Button>
          <Button color="inherit" onClick={handleAdminLogin}>
            Admin Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        <Grid container spacing={4} style={{ marginTop: '50px' }}>
          {/* Website Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Welcome to Skill Navigator
            </Typography>
            <Typography variant="body1" paragraph>
              Skill Navigator is your gateway to enhancing your skills and advancing your career. Our platform offers
              personalized learning paths, AI-driven recommendations, and comprehensive tracking of your progress. Whether you
              are a student, a professional, or an organization, Skill Navigator helps you achieve your learning goals
              efficiently.
            </Typography>
            <Typography variant="body1" paragraph>
              Join us today and start navigating your way to success!
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: '80%',
                borderRadius: '8px',
                boxShadow: 3,
              }}
              alt="Skill Navigator"
              src={bg_1} // Replace with your actual image
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;

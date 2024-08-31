import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bg_1 from './images/bg_1.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      // Simulate sending OTP (Replace with actual API call)
      // e.g., await sendOtpToEmail(email);
      toast.success('OTP sent to your email');
      setIsOtpSent(true);
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Simulate OTP verification (Replace with actual API call)
      if (otp === '123456') { // Replace with your OTP verification logic
        toast.success('OTP verified successfully');
        setIsOtpVerified(true);
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to verify OTP. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword) {
      toast.error('Please enter a new password');
      return;
    }

    try {
      // Simulate password reset (Replace with actual API call)
      // e.g., await resetPassword(email, newPassword);
      toast.success('Password reset successfully');
      navigate('/'); // Redirect to login page after successful password reset
    } catch (error) {
      toast.error('Failed to reset password. Please try again.');
    }
  };

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
      <Container
        maxWidth="xs"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',  // Light background with transparency
          backdropFilter: 'blur(10px)',  // Apply blur effect
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
          Forgot Password
        </Typography>

        {!isOtpSent && (
          <>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black' } }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </>
        )}

        {isOtpSent && !isOtpVerified && (
          <>
            <TextField
              fullWidth
              id="otp"
              name="otp"
              label="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black' } }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>
          </>
        )}

        {isOtpVerified && (
          <>
            <TextField
              fullWidth
              id="newPassword"
              name="newPassword"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: 'black' } }}
              InputProps={{ style: { color: 'black' } }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default ForgotPassword;

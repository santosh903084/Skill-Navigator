import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import bg_1 from './images/bg_1.jpg'; // Import the background image

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the user's name and email from location.state
  const userName = location.state?.name || 'User';
  const userEmail = location.state?.email || '';

  // Profile Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Dialog state for updating user info
  const [openDialog, setOpenDialog] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: userName,
    email: userEmail,
    password: '',
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens)
    navigate('/');
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Save changes logic here (e.g., update user details)
    setOpenDialog(false);
    // You can add a toast notification here to indicate success
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Skill Navigator Application
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleOpenDialog}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div
        style={{
          backgroundImage: `url(${bg_1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(100vh - 64px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
            Welcome, {userName}, to the Skill Navigator Application
          </h1>
        </div>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={userDetails.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            value={userDetails.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={userDetails.password}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;

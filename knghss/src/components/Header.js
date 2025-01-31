import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from "react-router-dom"

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          K.N.G.H.S.S
        </Typography>
        {/* Buttons for larger screens */}
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/#" style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Link>
        </Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/about#" style={{ textDecoration: 'none', color: 'white' }}>
            About
          </Link>
        </Button>
        <Button color="inherit" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/contact#" style={{ textDecoration: 'none', color: 'white' }}>
            Contact
          </Link>
        </Button>

        {/* Burger icon for small screens, moved to the right */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { sm: 'none' }, ml: 'auto' }} // Hide on desktop and move to the right on mobile
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={()=>window.location.href="/"}>Home</MenuItem>
          <MenuItem onClick={()=>window.location.href="/about"}>About</MenuItem>
          <MenuItem onClick={()=>window.location.href="/contact"}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

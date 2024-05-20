"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <FontAwesomeIcon icon={faBars} />
      </a>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem component="a" href="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem component="a" href="#about-us" onClick={handleClose}>About us</MenuItem>
        <MenuItem component="a" href="#shop" onClick={handleClose}>Shop</MenuItem>
        <MenuItem component="a" href="#blog" onClick={handleClose}>Blog</MenuItem>
        <MenuItem component="a" href="#contact" onClick={handleClose}>Contact us</MenuItem>
      </Menu>
    </div>
  );
}

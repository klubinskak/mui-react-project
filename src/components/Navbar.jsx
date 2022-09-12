import React, { useState } from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none", 
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "flex"
  }
}));


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex", 
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} sx={{fontFamily: "'Montserrat', sans-serif"}}>
          CatchUp 🚀
        </Typography>
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width: 30, height: 30}} onClick= {e => setOpen(true)} src={"https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"}/>
        </Icons>
        <UserBox>
          <Avatar sx={{width: 30, height: 30}} onClick= {e => setOpen(true)} >H</Avatar>
          <p>Harry</p>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open = {open}
        onClose= {(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

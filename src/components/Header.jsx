import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NameContext } from "../context/NameContext";

const Header = () => {
  const { name } = useContext(NameContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#344e41" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Welcome {name} to Codecraft Intranet
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/employees">Employee Management</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

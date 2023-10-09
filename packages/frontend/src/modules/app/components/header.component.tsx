import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../../../shared/hooks/use-auth.hook";
import { RouterKeys } from "../../../router/keys";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../app.style";

const Header: React.FunctionComponent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () => navigate(RouterKeys.LOGIN);
  const goToRegister = () => navigate(RouterKeys.REGISTER);
  const goToDashboard = () => navigate(RouterKeys.DASHBOARD);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link to={RouterKeys.ROOT} className={linkStyle}>
              Home
            </Link>
            <Link to={RouterKeys.RSS} className={linkStyle}>
              RSS
            </Link>
          </Typography>
          {!user ? (
            <>
              <Button color="inherit" onClick={goToLogin}>
                Login
              </Button>
              <Button color="inherit" onClick={goToRegister}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={goToDashboard}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

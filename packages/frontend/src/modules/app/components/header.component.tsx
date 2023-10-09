import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../../../shared/hooks/use-auth.hook";
import { RouterKeys } from "../../../router/keys";
import { useNavigate } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () => navigate(RouterKeys.LOGIN);
  const goToRegister = () => navigate(RouterKeys.REGISTER);
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
            Home
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
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

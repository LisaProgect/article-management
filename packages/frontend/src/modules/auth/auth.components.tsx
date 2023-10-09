import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Card, CardContent } from "@mui/material";
import { container } from "./auth.style";
import { useFormik } from "formik";
import { useAuthComponent } from "./hooks/auth.hook";
import { LoginFormValidationSchema } from "../../shared/validation-schemas/login-form.validation-schema";
import { useAuth } from "../../shared/hooks/use-auth.hook";
import { Navigate, useLocation } from "react-router-dom";
import { RouterKeys } from "../../router/keys";

const Login: React.FunctionComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const location = useLocation();

  const handleClickShowPassword = () => {
    setShowPassword((show) => {
      return !show;
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { handleLogin } = useAuthComponent();

  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormValidationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  if (user) {
    return <Navigate to={RouterKeys.ROOT} />;
  }

  return (
    <div className={container}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-error"
              label="Email"
              name="email"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormControl
              sx={{
                m: 1,
                width: "25ch",
              }}
              variant="outlined"
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                value={formik.values.password}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button color="primary" variant="contained" fullWidth type="submit">
              {location.pathname === RouterKeys.LOGIN ? "Login" : "Register"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

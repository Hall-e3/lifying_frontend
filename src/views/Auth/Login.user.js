import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../actions/auth.actions";
import { Spinner } from "../../components/Spinner/Spinner";
import FormAction from "../../components/CustomForm/FormAction";
import { CustomInput } from "../../components";
import { Collapse, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://Lify.com/">
        Lify.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AlerT = ({ message, open, setOpen }) => (
  <Box sx={{ width: "100%" }}>
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
    {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
  </Box>
);

const theme = createTheme();

export default function Login() {
  const [open, setOpen] = React.useState(true);
  const {
    showPassword,
    handleShowPassword,
    loginformData,
    handleFormClear,
    handleInputChange,
  } = FormAction();
  const dispatch = useDispatch();
  const props = useSelector((state) => state.Auth);
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginData(loginformData));
    handleFormClear();
  };
  const message = props.authError;
  console.log(message);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {message && <AlerT message={message} open={open} setOpen={setOpen} />}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <CustomInput
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={loginformData.email}
                onChange={handleInputChange}
              />
              <CustomInput
                margin="normal"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={loginformData.password}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        variant="body2"
                        onClick={handleShowPassword}
                        style={{ color: "#000", cursor: "pointer" }}
                      >
                        {showPassword ? "HIDE" : "SHOW"}
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              {props.login_user_loading ? <Spinner /> : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

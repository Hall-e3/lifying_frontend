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
import { useDispatch, useSelector } from "react-redux";
import { confirmationCode, loginData } from "../../actions/auth.actions";
import { Spinner } from "../../components/Spinner/Spinner";
import FormAction from "../../components/CustomForm/FormAction";
import { CustomInput } from "../../components";

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

const theme = createTheme();

export default function ConfirmationCode() {
  const [confirmCode, setConfirmCode] = React.useState("");
  const dispatch = useDispatch();
  const props = useSelector((state) => state.Auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(confirmationCode(confirmCode));
  };

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
          <Typography component="h1" variant="h5">
            Confirm Your Code
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <CustomInput
                margin="normal"
                id="confirmation_code"
                label="Confirmation Code"
                name="confirmation_code"
                autoComplete="confirmation_code"
                value={confirmCode.confirmation_code}
                onChange={(e) => setConfirmCode(e.target.value)}
                fullWidth
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              fullWidth
            >
              {/* {props.login_user_loading ? <Spinner /> : "Sign In"} */}
              Confirm
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  After, Sign In
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

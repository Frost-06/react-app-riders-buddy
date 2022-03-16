import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Riders Buddy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (event) => {
    event.persist();
    setLogin({ ...loginInput, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("user", res.data);
          swal("Success", res.data.message, "success");
          navigate("/homepage");
        } else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/img/signIn-img.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              style={{ width: 560, marginBottom: 32, fontWeight: 700 }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                style={{ width: 560, marginBottom: 32 }}
                className="searchbox noshadow"
                placeholder="Enter your email address"
                variant="outlined"
                name="email"
                type="text"
                id="email"
                onChange={handleInput}
                value={loginInput.email}
              />
              <Container
                item
                xs={12}
                sm={9}
                style={{
                  color: "red",
                  marginTop: "-27px",
                  marginLeft: "-25px",
                  marginBottom: "12px",
                }}
              >
                {loginInput.error_list.email}
              </Container>
              <TextField
                style={{ width: 560, marginBottom: 16 }}
                className="searchbox noshadow"
                placeholder="Enter your password"
                variant="outlined"
                name="password"
                type="password"
                id="password"
                onChange={handleInput}
                value={loginInput.password}
              />
              <Container
                item
                xs={12}
                sm={9}
                style={{
                  color: "red",
                  marginTop: "-10px",
                  marginLeft: "-25px",
                }}
              >
                {loginInput.error_list.password}
              </Container>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    style={{
                      color: "#1AA3E9",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Don't have an account?{" "}
                  </span>
                  <Link
                    href="/sign-up"
                    variant="body2"
                    style={{
                      color: "#1AA3E9",
                    }}
                  >
                    {"Sign up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 15, mb: 1 }} />
        </Container>
      </Grid>
    </Grid>
  );
}

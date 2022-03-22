import {
    Box,
    Container,
    Grid,
    TextField,
    Typography,
    Paper,
    Alert,
    AlertTitle,
  } from "@mui/material";
  import React, { useState } from "react";
  import Button from "@mui/material/Button";
  import CssBaseline from "@mui/material/CssBaseline";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import Checkbox from "@mui/material/Checkbox";
  import Link from "@mui/material/Link";
  import axios from "axios";
  import { useTheme } from "@mui/material/styles";
  import { useNavigate } from 'react-router-dom';
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
  
  export default function SignUp() {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error_list: [],
    });
  
    const handleInput = (event) => {
      event.persist();
      setRegister({ ...registerInput, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        firstName: registerInput.firstName,
        lastName: registerInput.lastName,
        email: registerInput.email,
        password: registerInput.password,
      };
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post(`/api/register`, data).then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_name", res.data.username);
              swal("Success",res.data.message,"success")
              navigate('/homepage');
          } else {
            setRegister({
              ...registerInput,
              error_list: res.data.validation_errors,
            });
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
            backgroundImage: "url(/img/signUp-img.png)",
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
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                style={{ marginBottom: 16, fontWeight: 700, width: "150%" }}
              >
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2} style={{ maxWidth: 1600 }}>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      style={{ width: 600, marginBottom: 16 }}
                      className="searchbox noshadow"
                      placeholder="First name..."
                      variant="outlined"
                      autoComplete="given-name"
                      name="firstName"
                      onChange={handleInput}
                      value={registerInput.firstName}
                      type="text"
                      id="firstName"
                      autoFocus
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    style={{ color: "red", marginTop: "-25px" }}
                  >
                    {registerInput.error_list.firstName}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      style={{ width: 600, marginBottom: 16 }}
                      className="searchbox noshadow"
                      placeholder="Last name..."
                      variant="outlined"
                      autoComplete="family-name"
                      name="lastName"
                      onChange={handleInput}
                      value={registerInput.lastName}
                      type="text"
                      id="lastName"
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    style={{ color: "red", marginTop: "-25px" }}
                  >
                    {registerInput.error_list.lastName}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: 600, marginBottom: 16 }}
                      className="searchbox noshadow"
                      placeholder="Email address..."
                      variant="outlined"
                      autoComplete="femail"
                      name="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      type="text"
                      id="email"
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    style={{ color: "red", marginTop: "-25px" }}
                  >
                    {registerInput.error_list.email}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: 600, marginBottom: 16 }}
                      className="searchbox noshadow"
                      placeholder="Enter your password..."
                      variant="outlined"
                      name="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      type="password"
                      id="password"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    style={{ color: "red", marginTop: "-25px" }}
                  >
                    {registerInput.error_list.password}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I agree to Terms and Conditions."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-start">
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
                      href="/sign-in"
                      variant="body2"
                      style={{
                        color: "#1AA3E9",
                      }}
                    >
                      {"Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </Grid>
      </Grid>
    );
  }
  
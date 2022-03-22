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
  import { useNavigate } from "react-router-dom";
  import IconButton from "@mui/material/IconButton";
  import Collapse from "@mui/material/Collapse";
  import CloseIcon from "@mui/icons-material/Close";
  import { WarningIcon } from "../theme/CustomIcons";
  
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Riders Buddy
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  
  export default function SignIn() {
    let invalidUser = "true";
    const navigate = useNavigate();
    const [open, setOpen] = useState();
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
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("auth_name", res.data.username);
            localStorage.setItem("user", res.data);
            console.log("Success", res.data.message, "success");
            navigate("/homepage");
          } else if (res.data.status === 401) {
            console.log("Warning", res.data.message, "warning");
  
          } else {
            setLogin({ ...loginInput, error_list: res.data.validation_errors });
          }
        });
      });
    };
    console.log(invalidUser);
    return (
      <>
      <Box sx={{display: "flex"}}>
        <Grid
          sx={{
            backgroundImage: "url(/img/signIn-img.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid>
          <Container>
          {invalidUser ? (<Box sx={{ width: "100%" }}>
            
          <Collapse in={open} style={{marginBottom: "-39px"}}>
            <Alert
              sx={{borderRadius: "16px", marginTop: "20px"}}
              icon={<WarningIcon />}
              severity="warning"
              color="warning"
              action={
                <IconButton
                  aria-label="close"
                  color="warning"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Invalid Credentials
            </Alert>
          </Collapse>
          </Box>) : (
          ""
          )
          }
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
                  onClick={() => {
                    setOpen(true);
                  }}
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
      </Box>
      </>
    );
  }
  
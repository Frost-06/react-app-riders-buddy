import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Alert,
  AlertTitle,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import swal from "sweetalert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SignUp() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
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
          swal("Success", res.data.message, "success");
          history.push("/homepage");
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
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* image container */}
        <Grid className={isMd ? "" : "sign-up-banner"} />
        {/* details container */}
        <Grid
          sx={{
            margin: isMd ? "96px auto" : "0 auto",
            display: "flex",
            width: isMd ? 360 : 616,
            height: 916,
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "0 24px",
          }}
        >
          <Typography variant="h2" style={{ fontWeight: 800 }}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              height: isMd ? 916 : 516,
              justifyContent: "space-around",
              flexWrap: "wrap",
              mt: isMd ? 4 : -2,
            }}
          >
            <Grid
              sx={{
                display: "inline-flex",
                flexWrap: isMd ? "wrap" : "no-wrap",
                justifyContent: "space-between",
                width: isMd ? 312 : 568,
              }}
            >
              <Grid sx={{ width: "100%", paddingRight: isMd ? "" : "16px" }}>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  First name
                </Typography>
                <TextField
                  sx={{ mt: "12px", mb: isMd ? "16px" : "" }}
                  width="100%"
                  className="textinputbox noshadow"
                  placeholder="Enter your email address"
                  variant="outlined"
                  name="email"
                  type="email"
                  id="email"
                  required
                  onChange={handleInput}
                  // value={loginInput.email}
                />
              </Grid>
              <Grid sx={{ width: "100%", paddingLeft: isMd ? "" : "16px" }}>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  Last Name
                </Typography>
                <TextField
                  sx={{ mt: "12px", mb: isMd ? "16px" : "" }}
                  width="100%"
                  className="textinputbox noshadow"
                  placeholder="Enter your email address"
                  variant="outlined"
                  name="email"
                  type="email"
                  id="email"
                  required
                  onChange={handleInput}
                  // value={loginInput.email}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" style={{ fontWeight: 700 }}>
              Email
            </Typography>
            <TextField
              width="100%"
              sx={{ mb: isMd ? "16px" : "" }}
              className="textinputbox noshadow"
              placeholder="Enter your email address"
              variant="outlined"
              name="email"
              type="email"
              id="email"
              required
              onChange={handleInput}
              // value={loginInput.email}
            />
            <Container
              item
              xs={12}
              sm={9}
              style={{
                color: "#E61B00",
              }}
            >
              {/* {loginInput.error_list.email} */}
            </Container>

            <Typography variant="body1" style={{ fontWeight: 700 }}>
              Mobile Number
            </Typography>
            <TextField
              sx={{ mb: isMd ? "16px" : "8px" }}
              width="100%"
              className="textinputbox noshadow"
              placeholder="Enter your email address"
              variant="outlined"
              name="email"
              type="string"
              id="email"
              required
              onChange={handleInput}
              // value={loginInput.email}
            />
            <Grid
              sx={{
                display: "inline-flex",
                flexWrap: isMd ? "wrap" : "no-wrap",
                justifyContent: "space-between",
                width: isMd ? 312 : 568,
              }}
            >
              <Grid sx={{ width: "100%", paddingRight: isMd ? "" : "16px" }}>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  Password
                </Typography>
                <TextField
                  sx={{ mt: 1, mb: isMd ? "16px" : "" }}
                  width="100%"
                  className="textinputbox noshadow"
                  placeholder="Enter your email address"
                  variant="outlined"
                  name="email"
                  type="email"
                  id="email"
                  required
                  onChange={handleInput}
                  // value={loginInput.email}
                />
              </Grid>
              <Grid sx={{ width: "100%", paddingLeft: isMd ? "" : "16px" }}>
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                  Confirm Password
                </Typography>
                <TextField
                  sx={{ mt: 1, mb: isMd ? "24px" : "" }}
                  width="100%"
                  className="textinputbox noshadow"
                  placeholder="Enter your email address"
                  variant="outlined"
                  name="email"
                  type="email"
                  id="email"
                  required
                  onChange={handleInput}
                  // value={loginInput.email}
                />
              </Grid>
            </Grid>
            <Container
              item
              xs={12}
              sm={9}
              style={{
                color: "#E61B00",
              }}
            >
              {/* {loginInput.error_list.password} */}
            </Container>
            <FormControlLabel
              sx={{ mt: isMd ? -2 : -3 }}
              control={<Checkbox value="remember" color="primary" />}
              label="I agree to the terms and conditions"
            />
          </Box>

          <Button
            type="submit"
            wdith="100%"
            variant="contained"
            sx={{ mt: isMd ? 4 : "", mb: isMd ? 1 : -4 }}
            onClick={() => {
              // setOpen(true);
            }}
          >
            Sign Up
          </Button>

          <Link
            href="#"
            variant="body2"
            style={{
              color: "#1AA3E9",
            }}
          >
            Forgot password?
          </Link>
          <Grid sx={{ margin: "40px auto" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginRight: 4,
                mt: isMd ? 16 : "",
              }}
            >
              {" "}
              Already have an account?{" "}
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
      </Grid>
    </>
  );
}

import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../context/UserContext";

export default function SignIn() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
  const isMerchantRef = useRef();
  const { updateUser } = useContext(UserContext);
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
      is_merchant: isMerchantRef.current.checked,
    };

    axios.post(`/api/login`, data).then((res) => {
      if (res.data.status === 200) {
        axios.defaults.headers.post["Authorization"] =
          "Bearer " + res.data.token;
        updateUser({
          type: "setUser",
          payload: {
            ...res.data.user,
            isLoggedIn: true,
          },
        });
        setTimeout(() => {
          history.push("/homepage");
        }, 0);
      } else if (res.data.status === 401) {
      } else {
        setLogin({ ...loginInput, error_list: res.data.validation_errors });
      }
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
        <Grid className={isMd ? "" : "sign-in-banner"} />
        {/* details container */}
        <Grid
          sx={{
            margin: isMd ? "80px auto" : "0 auto",
            display: "flex",
            flexWrap: "wrap",
            width: 480,
            height: 616,
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "0 24px",
          }}
        >
          <Typography variant="h2" style={{ fontWeight: 800 }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              height: 296,
              justifyContent: "space-around",
            }}
          >
            <Typography variant="body1" style={{ fontWeight: 700 }}>
              Email
            </Typography>
            <TextField
              width="100%"
              className="textinputbox noshadow"
              placeholder="Enter your email address"
              variant="outlined"
              name="email"
              type="email"
              id="email"
              required
              onChange={handleInput}
              value={loginInput.email}
            />
            <Container
              item
              xs={12}
              sm={9}
              style={{
                color: "#E61B00",
              }}
            >
              {loginInput.error_list.email}
            </Container>
            <Typography variant="body1" style={{ fontWeight: 700 }}>
              Password
            </Typography>
            <TextField
              width="100%"
              className="textinputbox noshadow"
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
                color: "#E61B00",
              }}
            >
              {loginInput.error_list.password}
            </Container>
            <FormControlLabel
              inputRef={isMerchantRef}
              sx={{ mt: -3 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Merchant?"
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 4 }}
            onClick={handleSubmit}
          >
            Sign In
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

          <Grid sx={{ margin: "24px auto" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginRight: 4,
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
              {"Create an account"}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

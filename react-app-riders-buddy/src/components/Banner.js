import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { NearbyLocation } from "../theme/CustomIcons";

function Banner(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  var arr = ["banner-3", "banner", "banner-2"];
  var banner = arr[Math.floor(Math.random() * arr.length)];
  console.log(banner);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Container className={banner} maxWidth="100%">
          <div style={{ marginLeft: isMd ? 10 : 80 }}>
            <Typography
              variant="h1"
              style={{
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              Browse for nearby stores
            </Typography>
            <Grid>
              <TextField
                className="searchbox"
                placeholder="Enter your delivery address..."
                InputProps={{
                  outline: "none",
                  startAdornment: (
                    <InputAdornment position="start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                          fill="#1AA3E9"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                          fill="#76C8F2"
                        />
                        <path
                          d="M5.5 9C5.5 5.40614 8.40614 2.5 12 2.5C15.5939 2.5 18.5 5.40614 18.5 9C18.5 10.9402 17.4591 13.3197 16.1343 15.5414C14.8221 17.742 13.2831 19.7042 12.3854 20.7905C12.1853 21.03 11.8242 21.0298 11.6242 20.7901C10.7222 19.7046 9.18047 17.7421 7.86684 15.5412C6.54084 13.3196 5.5 10.9402 5.5 9ZM9 9C9 10.6561 10.3439 12 12 12C13.6561 12 15 10.6561 15 9C15 7.34386 13.6561 6 12 6C10.3439 6 9 7.34386 9 9Z"
                          stroke="#1AA3E9"
                        />
                      </svg>
                    </InputAdornment>
                  ),
                  endAdornment: (
                      <IconButton color="primary" disableRipple={true}>
                        <motion.div
                      initial={{scale: 1}}
                      whileTap={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 100, ease: "easeIn", duration: 1 }}
                      style={{originZ: 0.5}}
                    >
                        <InputAdornment position="end">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="11"
                              y="1"
                              width="2"
                              height="3"
                              rx="1"
                              fill="#1AA3E9"
                            />
                            <rect
                              x="11"
                              y="20"
                              width="2"
                              height="3"
                              rx="1"
                              fill="#1AA3E9"
                            />
                            <rect
                              x="23"
                              y="11"
                              width="2"
                              height="3"
                              rx="1"
                              transform="rotate(90 23 11)"
                              fill="#1AA3E9"
                            />
                            <rect
                              x="4"
                              y="11"
                              width="2"
                              height="3"
                              rx="1"
                              transform="rotate(90 4 11)"
                              fill="#1AA3E9"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              stroke="#1AA3E9"
                              stroke-width="2"
                            />
                            <circle cx="12" cy="12" r="4" fill="#76C8F2" />
                          </svg>
                        </InputAdornment>
                        </motion.div>
                      </IconButton>
                  ),
                }}
                variant="outlined"
              />
              <Button variant="contained">Find Shops</Button>
            </Grid>
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default Banner;

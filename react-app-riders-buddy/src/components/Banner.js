import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Banner(props) {
  var arr = ["banner-3", "banner", "banner-2"];
  var banner = arr[Math.floor(Math.random() * arr.length)];
  console.log(banner);
  return (
    <>
      <Container className={banner}>
        <div>
          <Typography
            variant="h1"
            style={{
              padding: "0px 0px 8px 150px",
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
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/img/location-icon.png" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <img src="/img/target-icon.png" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              style={{
                padding: "0px 0px 0px 150px",
              }}
            />
            <Button variant="contained">Find Shops</Button>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Banner;

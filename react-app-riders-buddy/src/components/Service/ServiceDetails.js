import {
  Box,
  Container,
  Grid,
  Typography,
  CardHeader,
  Button,
  Avatar,
} from "@mui/material";

import React from "react";
import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";

function ServiceDetails(props) {
  const theme = useTheme();
  const loc = useLocation();
  const { name } = loc.state;
  const { rating } = loc.state;
  const { serviceDescription } = loc.state;
  const { price } = loc.state;
  const { endingPrice } = loc.state;
  const { salePrice } = loc.state;
  return (
    <div>
      <Typography
        variant="h2"
        style={{
          fontSize: 20,
          padding: "0px 0px 8px 0px",
        }}
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        className="productRatingReview"
      >
        {rating && (
          <Typography variant="body2" color="text.secondary">
            {new Array(rating.stars).fill(0).map((s, i) => (
              <React.Fragment key={i}>⭐</React.Fragment>
            ))}
            &nbsp;&nbsp;
            <span variant> | </span>&nbsp;&nbsp;
            <span>{rating.count} review | </span> &nbsp;&nbsp;
            <span>{serviceDescription.soldItems} sold</span>
          </Typography>
        )}
      </Typography>

      <Grid className="priceRange" container columns={2}>
        <Typography
          style={{
            color: "#1AA3E9",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          ₱ {price} - ₱ {endingPrice}
        </Typography>

        <CardHeader
          style={{ width: "60%" }}
          avatar={
            <Box
              bgcolor={theme.palette.primary.main}
              color="#ffffff"
              width={100}
              style={{ padding: "5px 9px" }}
            >
              {salePrice * 100}% off
            </Box>
          }
          title=""
          subheader=""
        />
      </Grid>

      <Grid
        style={{
          width: "100%",
          display: "inline-flex",
          marginBottom: "32px",
          marginTop: "32px",
        }}
      >
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "76px" }}
          >
            Status:
            <span
              style={{
                fontSize: "15px",
                color: "#008A00",
              }}
            >
              {serviceDescription.status}
            </span>
          </Typography>
        </Container>

        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "48px" }}
          >
            Categories:
            <span
              style={{
                fontSize: "15px",
                color: "#1AA3E9",
                marginLeft: "-6px",
              }}
            >
              {serviceDescription.categories}
            </span>
          </Typography>
        </Container>
      </Grid>

      <Grid
        style={{
          width: "100%",
          display: "inline-flex",
          marginBottom: "32px",
        }}
      >
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "56px" }}
          >
            Service Type:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
                marginLeft: "-28px",
              }}
            >
              {serviceDescription.serviceType}
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "79px" }}
          >
            Availability:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
                marginLeft: "-36px",
              }}
            >
              {serviceDescription.availability}
            </span>
          </Typography>
        </Container>
      </Grid>

      <Grid
        style={{
          width: "100%",
          display: "inline-flex",
          marginBottom: "32px",
        }}
      >
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "42px" }}
          >
            Labor type:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {serviceDescription.laborType}
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "90px" }}
          >
            Time:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {serviceDescription.time}
            </span>
          </Typography>
        </Container>
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Get Price
      </Button>
      <Grid
        style={{
          marginLeft: "24px",
          marginRight: "24px",
          display: "inline-flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "22px",
        }}
      >
        <Avatar alt="Favourite" src="/img/Favorite.png" />

        <Typography variant="h3">Add to Favourites</Typography>
        <img src={"/img/vertical-line.png"} alt="vertical" />

        <img src={"/img/Share.png"} alt="vertical" />

        <Typography variant="h3">Share</Typography>
        <img src={"/img/vertical-line.png"} alt="vertical" />

        <img src={"/img/Compare.png"} alt="vertical" />
        <Typography variant="h3">Compare</Typography>
      </Grid>
    </div>
  );
}

export default ServiceDetails;

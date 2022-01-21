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
import useChat from "../../hooks/useChat";
import ChatContainer from "../Chat/ChatContainer";
import { useLocation } from "react-router-dom";

function ProductPage(props) {
  const theme = useTheme();
  const { chatDrawer, setChatDrawer } = useChat();

  const loc = useLocation();
  const { name } = loc.state;
  const { rating } = loc.state;
  const { productDescription } = loc.state;
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
            <span>{productDescription.soldItems} sold</span>
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
          action={<img src="/img/product-category-label-icon.png" />}
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
            style={{ display: "inline-flex", gap: "48px" }}
          >
            Parts:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.parts}
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
              }}
            >
              {productDescription.categories}
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
            SKU:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.SKU}
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "79px" }}
          >
            Weight:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.weight}
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
            Brand:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.brand}
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "90px" }}
          >
            Color:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.color}
            </span>
          </Typography>
        </Container>
      </Grid>

      <Grid style={{ width: "100%", display: "inline-flex" }}>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "42px" }}
          >
            Stock:
            <span
              style={{
                fontSize: "15px",
                color: "#008A00",
              }}
            >
              {productDescription.stockStatus}
            </span>
            <span
              variat="label"
              style={{
                fontSize: "15px",

                marginLeft: "-35px",
              }}
            >
              ({productDescription.numberOfStocks})
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "50px" }}
          >
            Dimensions:
            <span
              style={{
                fontSize: "15px",
                color: "#14142B",
              }}
            >
              {productDescription.Dimensions}
            </span>
          </Typography>
        </Container>
      </Grid>

      <Button
        onClick={() => {
          setChatDrawer({ ...chatDrawer, right: true });
        }}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
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

export default ProductPage;

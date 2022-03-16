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

function ProductDetails(props) {
  const theme = useTheme();
  const { chatDrawer, setChatDrawer } = useChat();

  const loc = useLocation();
  const {
    item_name,
    reviews,
    rating,
    description,
    price,
    endingPrice,
    salePrice,
    descriptionCategories,
    numberOfStocks,
    stockStatus,
    SKU,
    weight,
    brand,
    dimensions,
    color,
    parts,
  } = loc.state;

  return (
    <div>
      <Typography
        variant="h2"
        style={{
          fontSize: 20,
          padding: "0px 0px 8px 0px",
        }}
      >
        {item_name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className="productRatingReview"
      >
        {rating && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            {new Array(parseInt(rating)).fill(0).map((s, i) => (
              <React.Fragment key={i}>
                <img
                  src={"/img/star.png"}
                  alt="stars"
                  style={{ marginRight: "8px" }}
                />
              </React.Fragment>
            ))}
            {new Array(5 - parseInt(rating)).fill(0).map((s, i) => (
              <React.Fragment key={i}>
                <img
                  src={"/img/star.png"}
                  alt="stars"
                  style={{ marginRight: "8px", filter: "saturate(0)" }}
                />
              </React.Fragment>
            ))}
            &nbsp;&nbsp;
            <span variant> | </span>&nbsp;&nbsp;
            <span>{reviews} reviews </span> &nbsp;&nbsp;
            {/* <span>{productDescription.soldItems} sold</span> */}
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
            salePrice && (
              <Box
                bgcolor={theme.palette.primary.main}
                color="#ffffff"
                width={100}
                style={{ padding: "5px 9px" }}
              >
                {salePrice * 100}% off
              </Box>
            )
          }
          action={
            <img
              src="/img/product-category-label-icon.png"
              style={{ marginTop: "-19px" }}
              alt=""
            />
          }
          title=""
          subheader=""
        />
      </Grid>
      <br />
      <Typography>{description}</Typography>
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
              {parts}
            </span>
          </Typography>
        </Container>
        <Container>
          <Typography
            variant="label"
            style={{ display: "inline-flex", gap: "36px" }}
          >
            Categories:
            <span
              style={{
                fontSize: "15px",
                color: "#1AA3E9",
              }}
            >
              {descriptionCategories}
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
              {SKU}
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
              {weight}
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
              {brand}
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
              {color}
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
              {stockStatus}
            </span>
            <span
              variat="label"
              style={{
                fontSize: "15px",

                marginLeft: "-35px",
              }}
            >
              ({numberOfStocks})
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
              {dimensions}
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
        state={props}
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

export default ProductDetails;

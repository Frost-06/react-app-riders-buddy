import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import UserContext from "../../context/UserContext";
import useChat from "../../hooks/useChat";
import socket, { events } from "../../utils/socket";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

function ProductDetails({ product }) {
  const theme = useTheme();
  const { chatDrawer, setChatDrawer } = useChat();
  const { user, updateUser } = React.useContext(UserContext);

  const StyledRating = styled(Rating)({
    "& .MuiRating-icon": {
      color: "#E61B00",
    },

    "& .MuiRating-iconFilled": {
      color: "#E61B00",
    },
    "& .MuiRating-iconHover": {
      color: "#E61B00",
    },
  });

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
  } = product;

  return (
    <Container>
      <Typography
        variant="h5"
        style={{
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
      <Grid
        className="priceRange"
        container
        columns={2}
        sx={{ justifyContent: "space-between", padding: "8px 24px !important" }}
      >
        <Typography
          variant="h3"
          style={{
            color: "#1AA3E9",
            fontWeight: 700,
          }}
        >
          ₱ {price} - ₱ {endingPrice}
        </Typography>
        <CardHeader
          style={{ width: "40%" }}
          avatar={
            salePrice ? (
              <Box
                bgcolor={theme.palette.primary.main}
                color="#ffffff"
                width={"100px"}
                style={{ padding: "5px 9px" }}
              >
                {salePrice * 100}% off
              </Box>
            ) : (
              ""
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
          updateUser({ type: "setCurrentItem", payload: product });
          setChatDrawer({ ...chatDrawer, right: true });
          socket.emit(events.GET_PRICE, {
            product,
            user,
          });
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
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <IconButton>
            <StyledRating
              name="customized-color"
              defaultValue={0}
              max={1}
              size="large"
              sx={{ margin: "0 auto" }}
              icon={<FavoriteIcon />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </IconButton>

          <Typography variant="h6">Add to Favourites</Typography>
        </Box>
        <img src={"/img/vertical-line.png"} alt="vertical" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <IconButton>
            <img src={"/assets/share.svg  "} alt="vertical" />
          </IconButton>

          <Typography variant="h6">Share</Typography>
        </Box>
        <img src={"/img/vertical-line.png"} alt="vertical" />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <IconButton>
            {" "}
            <img src={"/assets/similar.svg"} alt="vertical" />
          </IconButton>

          <Typography variant="h6">Similar</Typography>
        </Box>
      </Grid>
    </Container>
  );
}

export default ProductDetails;

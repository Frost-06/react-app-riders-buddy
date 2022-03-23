import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import SecondCarouselContainer from "../components/Carousel/SecondCarouselContainer";
import Categories from "../components/Categories";
import ChatContainer from "../components/Chat/ChatContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SecondHeader from "../components/SecondHeader";
import ProductItem from "../components/ProductItem";
import UserContext from "../context/UserContext";

function Homepage(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const { user, updateUser } = useContext(UserContext);
  const [products, setProducts] = useState();
  console.log(user.isLoggedIn);

  useEffect(() => {
    axios.get("api/items").then((resp) => {
      if (resp.data) {
        setProducts(resp.data);
      }
    });
  }, []);

  return (
    <div>
      {user.isLoggedIn ? <SecondHeader /> : <Header />}
      <Banner />
      <Container style={{ maxWidth: 1400, float: "none", margin: "auto" }}>
        <Box style={{ marginBottom: 56, marginTop: 56 }}>
          <Typography
            variant={isMd ? "h4" : "h3"}
            style={{ fontWeight: "800", marginBottom: 8 }}
          >
            Explore by Category
          </Typography>
          <Typography
            variant={isMd ? "body2" : "body1"}
            style={{ color: "#6E7191", marginBottom: 49 }}
          >
            Discover items and services that will fit to your needs
          </Typography>
          <Categories />
        </Box>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Typography
              variant={isMd ? "h4" : "h3"}
              style={{ fontWeight: "800", marginBottom: 8 }}
            >
              Best Deals
            </Typography>
          </Grid>
          <IconButton disableRipple={true} sx={{ display: "flex", gap: "8px" }}>
            <Typography
              variant={isMd ? "caption" : "subtitle1"}
              style={{ fontWeight: "700", color: "#262338" }}
            >
              View all
            </Typography>
            <img
              src="/assets/Forward-arrow.svg"
              alt=""
              style={{ height: isMd ? "16px" : "24px" }}
            />
          </IconButton>
        </Grid>

        <Typography
          variant={isMd ? "body2" : "body1"}
          style={{ color: "#6E7191", marginBottom: 56 }}
        >
          Greatest offers awaits you.
        </Typography>
        <CarouselContainer />
        <Divider sx={{ mb: "48px", mt: "48px" }} />
        <Typography
          variant={isMd ? "h4" : "h3"}
          style={{ fontWeight: "800", marginBottom: 8 }}
        >
          What’s new?
        </Typography>
        <Typography
          variant={isMd ? "body2" : "body1"}
          style={{ color: "#6E7191", marginBottom: 56 }}
        >
          Experience the latest and be part of the trend!
        </Typography>
        <SecondCarouselContainer />
        <Divider sx={{ mb: "48px", mt: "48px" }} />
        <Typography
          variant={isMd ? "h4" : "h3"}
          style={{ fontWeight: "800", marginBottom: 8 }}
        >
          Products and Services
        </Typography>

        <Typography
          variant={isMd ? "body2" : "body1"}
          style={{ color: "#6E7191", marginBottom: 24 }}
        >
          Explore shops products and services that fits you
        </Typography>
        <Grid sx={{ display: "flex" }}>
          <TextField
            style={{ width: isMd ? 260 : "", maxWidth: 560, marginBottom: 56 }}
            className="searchbox noshadow"
            placeholder="Search product, or services..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 22L18 18"
                      stroke="#76C8F2"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                      stroke="#1AA3E9"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button
            variant="filters"
            color="primary"
            size="large"
            sx={{ display: "inline-flex" }}
          >
            <img src="/assets/filters.svg" alt="" />
            {isMd ? (
              ""
            ) : (
              <Typography variant="h6" sx={{ color: "#1AA3E9", ml: 2 }}>
                Filters
              </Typography>
            )}
          </Button>
        </Grid>
        <Box width="100%" spacing={2}>
          {products && (
            <Grid container columns={isMd ? 1 : 4} spacing={3}>
              {products.map((product, index) => (
                <Grid key={index} item xs={1} style={{ width: 356 }}>
                  <ProductItem {...product} />
                </Grid>
              ))}
            </Grid>
          )}
          {!products && <i>Loading products...</i>}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Homepage;

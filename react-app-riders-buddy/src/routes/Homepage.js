import { useTheme } from "@emotion/react";
import {
  Box,
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
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import SecondCarouselContainer from "../components/Carousel/SecondCarouselContainer";
import Categories from "../components/Categories";
import ChatContainer from "../components/Chat/ChatContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

function Homepage(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("api/items").then((resp) => {
      if (resp.data) {
        setProducts(resp.data);
      }
    });
  }, []);

  return (
    <div>
      <ChatContainer />
      <Header />
      <Banner />
      <Container style={{ maxWidth: 1400, float: "none", margin:"auto", }}>
        <Box style={{ marginBottom: 56, marginTop: 56 }}>
          <Typography
            variant="h3"
            style={{ fontWeight: "800", marginBottom: 8 }}
          >
            Explore by Category
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#6E7191", marginBottom: 49 }}
          >
            Discover items and services that will fit to your needs
          </Typography>
          <Categories />
        </Box>
        <TextField
          style={{ width: 560, marginBottom: 56 }}
          className="searchbox noshadow"
          placeholder="Search product, or services..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 22L18 18"
                    stroke="#76C8F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                    stroke="#1AA3E9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Typography
              variant="h3"
              style={{ fontWeight: "800", marginBottom: 8 }}
            >
              Best Deals
            </Typography>
          </Grid>
          <IconButton disableRipple={true} sx={{display: "flex", gap: "16px"}}>
            <Typography variant="subtitle1" style={{ fontWeight: "700", color: "#262338" }}>
              View all
            </Typography>
            <img src="/assets/Forward-arrow.svg" alt=""/>
          </IconButton>
        </Grid>

        <Typography
          variant="body1"
          style={{ color: "#6E7191", marginBottom: 56 }}
        >
          Greatest offers awaits you.
        </Typography>
        <CarouselContainer />
        <Divider sx={{ mb: "48px", mt: "48px" }} />
        <Typography variant="h3" style={{ fontWeight: "800", marginBottom: 8 }}>
          What’s new?
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "#6E7191", marginBottom: 56 }}
        >
          Experience the latest and be part of the trend!
        </Typography>
        <SecondCarouselContainer />
        <Divider sx={{ mb: "48px", mt: "48px" }} />
        <Typography variant="h3" style={{ fontWeight: "800", marginBottom: 8 }}>
          Bicycle Products and Services
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "#6E7191", marginBottom: 56 }}
        >
          Explore shops products and services that fits you
        </Typography>
        <Box width="100%" spacing={2}>
          {products && (
            <Grid container columns={isMd ? 2 : 4} spacing={3}>
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

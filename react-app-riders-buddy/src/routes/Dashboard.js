import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import SecondCarouselContainer from "../components/Carousel/SecondCarouselContainer";
import Categories from "../components/Categories";
import ChatContainer from "../components/Chat/ChatContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

function Dashboard(props) {
  return (
    <div>
      <ChatContainer />
      <Header />
      <Banner />
      <Container style={{ maxWidth: 1600 }}>
        <div style={{ marginBottom: 56, marginTop: 56 }}>
          <Typography variant="h2">Explore by Category</Typography>
          <Typography variant="body2" style={{ marginBottom: 49 }}>
            Discover items and services that will fit to your needs
          </Typography>
          <Categories />
        </div>
        <TextField
          style={{ width: 560, marginBottom: 56 }}
          className="searchbox noshadow"
          placeholder="Search product, or services..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/img/search-icon.png" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Typography variant="h2">Best Deals</Typography>
        <Typography variant="body2" style={{ marginBottom: 56 }}>
          Greatest offers awaits you.
        </Typography>
        <CarouselContainer />
        <TextField
          style={{ width: 560, marginBottom: 56 }}
          className="searchbox noshadow"
          placeholder="Search product, or services..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/img/search-icon.png" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <Typography variant="h2">What’s new?</Typography>
        <Typography variant="body2" style={{ marginBottom: 56 }}>
          Experience the latest and be part of the trend!
        </Typography>
        <SecondCarouselContainer />

        <Typography variant="h2">Bicycle Products and Services</Typography>
        <Typography variant="body2" style={{ marginBottom: 56 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box width="100%" spacing={2}>
          <Grid container columns={4} spacing={2}>
            {require("../products.json").map((product, index) => (
              <Grid key={index} item xs={1}>
                <ProductItem {...product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default Dashboard;

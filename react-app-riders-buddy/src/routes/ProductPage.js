import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Link,
  Breadcrumbs,
  Divider,
  CardMedia,
} from "@mui/material";

import React from "react";
import SecondHeader from "../components/SecondHeader";
import ThirdCarouselContainer from "../components/Carousel/ThirdCarouselContainer";
import { useTheme } from "@emotion/react";
import ProductDetails from "../components/Product/ProductDetails";
import ChatContainer from "../components/Chat/ChatContainer";
import Footer from "../components/Footer";
import TabPage from "../components/Product/TabPage";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function ProductPage(props) {
  const theme = useTheme();
  const loc = useLocation();

  const { image } = loc.state;

  return (
    <div>
      <useScrollToTop>
        <ChatContainer />
        <SecondHeader />
        <Container
          style={{ maxWidth: 1600, marginTop: "48px" }}
          className="productDesc"
        >
          <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "24px" }}>
            <Link
              underline="hover"
              color="inherit"
              href="/homepage"
              variant="h3"
              st
            >
              Home
            </Link>

            <Typography color="text.primary">Product Page</Typography>
          </Breadcrumbs>
          <Grid container component="main" sx={{ marginBottom: "56px" }}>
            <CssBaseline />

            {/* Product Images */}

            <Grid
              item
              xs={false}
              sm={4}
              md={6.7}
              sx={{
                backgroundImage: "url(" + { image } + ")",
                height: "600px",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "35px",
                borderRadius: "24px",
              }}
            >
              <CardMedia
                component="img"
                height="600"
                image={image}
                style={{ borderRadius: "32px" }}
              />
            </Grid>

            {/* Product Details */}
            <Grid item md={5} elevation={6}>
              <ProductDetails />
            </Grid>
          </Grid>
          <TabPage />
          <Divider />
          <Typography
            variant="h2"
            style={{ marginTop: "128px", marginBottom: "32px" }}
          >
            Product or Service You May Like
          </Typography>
          <ThirdCarouselContainer />
        </Container>
        <Footer />
      </useScrollToTop>
    </div>
  );
}

export default ProductPage;

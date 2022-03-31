import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Link,
  Breadcrumbs,
  Divider,
  CardMedia,
  CircularProgress,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import SecondHeader from "../components/SecondHeader";
import ThirdCarouselContainer from "../components/Carousel/ThirdCarouselContainer";
import { useTheme } from "@emotion/react";
import ProductDetails from "../components/Product/ProductDetails";
import ChatContainer from "../components/Chat/ChatContainer";
import Footer from "../components/Footer";
import TabPage from "../components/Product/TabPage";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

function ProductPage(props) {
  const theme = useTheme();

  const { id } = props.match.params;

  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get("api/item/" + id).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
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
            variant="subtitle1"
            sx={{ fontWeight: "700" }}
          >
            Home
          </Link>

          <Typography color="text.primary">Product Page</Typography>
        </Breadcrumbs>
        {product && (
          <>
            <Grid container component="main" sx={{ marginBottom: "56px" }}>
              <CssBaseline />

              {/* Product Images */}

              <Grid
                item
                xs={false}
                sm={4}
                md={6.7}
                sx={{
                  backgroundImage: "url(" + product.image + ")",
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
                  image={product.image}
                  style={{ borderRadius: "32px" }}
                />
              </Grid>

              {/* Product Details */}
              <Grid item md={5} elevation={6}>
                <ProductDetails product={product} />
              </Grid>
            </Grid>
            <TabPage />
          </>
        )}
        {!product && <CircularProgress />}
        <Divider />
        <Typography
          variant={"h3"}
          style={{
            fontWeight: "800",
            marginTop: "128px",
            marginBottom: "32px",
          }}
        >
          Product or Service You May Like
        </Typography>
        <ThirdCarouselContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default ProductPage;

import {
  Container,
  Grid,
  Typography,
  CssBaseline,
  Link,
  Breadcrumbs,
  Divider,
} from "@mui/material";

import React from "react";
import SecondHeader from "../components/SecondHeader";
import CarouselContainer from "../components/Carousel/CarouselContainer";
import ServiceDetails from "../components/Service/ServiceDetails";
import Footer from "../components/Footer";
import ServiceTabPage from "../components/Service/serviceTabPage";
import { useLocation } from "react-router-dom";

function Service(props) {
  const loc = useLocation();

  const { image } = loc.state;

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
            variant="h3"
            st
          >
            Home
          </Link>

          <Typography color="text.primary">Service Page</Typography>
        </Breadcrumbs>
        <Grid
          container
          component="main"
          sx={{ height: "140vh", marginBottom: "56px" }}
        >
          <CssBaseline />
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
            <Container
              style={{ display: "block", width: "79%", objecFit: "contain" }}
            >
              <img src={image} style={{ width: "109%" }} />
            </Container>
          </Grid>
          <Grid item md={5} elevation={6}>
            <ServiceDetails />
          </Grid>
        </Grid>
        <ServiceTabPage />
        <Divider />
        <Typography
          variant="h2"
          style={{ marginTop: "128px", marginBottom: "32px" }}
        >
          Similar Services
        </Typography>
        <CarouselContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default Service;

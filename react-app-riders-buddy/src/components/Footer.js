import { Container, Divider, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Footer(props) {
  return (
    <div>
      <Box
        style={{
          backgroundColor: "#F7F7FC",
          backgroundSize: "cover",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
          width: "100%",
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            marginTop: "88px",
            width: "100%",
            padding: "42px 0",
            maxWidth: 1400,
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              color: "#1AA3E9",
              padding: "0px 24px 0px 24px",
            }}
          >
            Why choose Riders Buddy?
          </Typography>
        </Container>
      </Box>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "80%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <Grid>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/assets/prof-mechanics.svg"} alt="prof"/>
            <Container>
              <Typography
                variant="h4"
                style={{ fontWeight: "800", color: "#0D5275" }}
              >
                Professional Mechanics
              </Typography>
              <Typography variant="body1" style={{ color: "#6E7191" }}>
                Cheap with excellent jobs
              </Typography>
            </Container>
          </Box>
        </Grid>

        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/assets/relia-prod.svg"} alt="prof" />
            <Container>
              <Typography
                variant="h4"
                style={{ fontWeight: "800", color: "#0D5275" }}
              >
                Reliable products
              </Typography>
              <Typography variant="body1" style={{ color: "#6E7191" }}>
                Proven and tested product quality
              </Typography>
            </Container>
          </Box>
        </Box>

        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/assets/cus-support.svg"} alt="prof" />
            <Container>
              <Typography
                variant="h4"
                style={{ fontWeight: "800", color: "#0D5275" }}
              >
                Customer Support
              </Typography>
              <Typography variant="body1" style={{ color: "#6E7191" }}>
                Friendly 24/7 Support
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ margin: "0 auto", maxWidth: 1400 }} />

      <Container
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: "48px 0"
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "60%",
            gap: "32px",
            flexWrap: "wrap",

          }}
        >
          <img
            src={"/assets/riders-buddy-horizontal-logo.svg"}
            alt="logo"
            width=" 35%"
          />
          <Typography
            variant="body1"
            style={{
              fontWeight: "400",
              color: "#6E7191",
              width: "80%",
              lineHeight: "40px",
            }}
          >
            Riders Buddy is a cross-platform application that offers buying and
            selling of wide range of bicycle and motorcycle parts and
            accessories. The brand mission is to provide purchases to consumers
            without the worries of unreliable products. The brand mainly act as
            an open space to work with potential stores that sells bicycle and
            motorcycle parts and accessories.
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "40%",
            margin: "0 auto",
            paddingTop: "20px"
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "56px",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1AA3E9",
              }}
            >
              Learn More
            </Typography>
            <Link>About us</Link>
            <Link>Seller Center</Link>
            <Link>Help Center</Link>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "56px",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1AA3E9",
              }}
            >
              Categories
            </Typography>
            <Link>Bicycle</Link>
            <Link>Motorcycle</Link>
            <Link>Shops</Link>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "56px",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1AA3E9",
              }}
            >
              Legal
            </Typography>

            <Link href="https://sites.google.com/view/riders-buddy/home">
              Terms and Conditions
            </Link>
            <Link>Privacy Policy</Link>
            <Typography>&nbsp;</Typography>
          </Box>
        </Box>

      </Container>
      <Divider sx={{ margin: "0 auto", maxWidth: 1400 }} />
      <Container 
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: 1400,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "24px 0"
      }}>
      <Typography
        style={{ fontSize: "18px", fontWeight: "bold", color: "#1AA3E9" }}
      >
        ©2022 Riders Buddy
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
          <Link>
            <img src={"/img/Facebook.png"} alt="fb" />
          </Link>
          <Link>
            <img src={"/img/Twitter.png"} alt="twitter" />
          </Link>
          <Link>
            <img src={"/img/Instagram.png"} alt="insta" />
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;

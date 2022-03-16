import { Container, Divider, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
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
            width: "80%",
            padding: "42px 0",
          }}
          maxWidth="1920px!important"
        >
          <Typography
            variant="h1"
            style={{ fontWeight: "bold", color: "#1AA3E9" }}
          >
            Why Riders Buddy?
          </Typography>
        </Container>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: "128px",
          flexWrap: "wrap",
          width: "80%",
          maxWidth: 1920,
          margin: "0 auto",
          padding: "96px 0",
        }}
      >
        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/img/prof-mechanic.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Professional Mechanics
              </Typography>
              <Typography variant="normal">
                Cheap with excellent jobs
              </Typography>
            </Container>
          </Box>
        </Box>

        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/img/security.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Reliable products
              </Typography>
              <Typography variant="normal">
                Proven and tested product quality
              </Typography>
            </Container>
          </Box>
        </Box>

        <Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img src={"/img/support.png"} alt="prof" />
            <Container>
              <Typography variant="h2" style={{ color: "#0D5275" }}>
                Customer Support
              </Typography>
              <Typography variant="normal">Friendly 24/7 Support</Typography>
            </Container>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          width: "80%",
          maxWidth: 1920,
          margin: "0 auto",
          padding: "22px 0",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            marginRight: "-100px",
            gap: "32px",
            marginTop: "48px",
            flexWrap: "wrap",
          }}
        >
          <img src={"/img/logo.png"} alt="logo" width="35%" />
          <Typography
            variant="label"
            style={{ width: "80%", lineHeight: "32px" }}
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
            flexDirection: "column",
            gap: "56px",
            marginTop: "48px",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1AA3E9",
            }}
          >
            LEARN MORE
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
            marginTop: "48px",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1AA3E9",
            }}
          >
            CATEGORIES
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
            marginTop: "48px",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1AA3E9",
            }}
          >
            CONTACT
          </Typography>
          <Typography>support-ridersbuddy@gmail.com</Typography>

          <Typography>(032) 541 9812</Typography>

          <Box style={{ display: "flex", gap: "32px" }}>
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
        </Box>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          padding: "32px",
          justifyContent: "space-between",
          width: "80%",
          maxWidth: 1920,
          margin: "0 auto",
          padding: "22px 0",
        }}
      >
        <Typography
          style={{ fontSize: "18px", fontWeight: "bold", color: "#1AA3E9" }}
        >
          ©2022 Riders Buddy
        </Typography>
        <Box style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
          <Link href="https://sites.google.com/view/riders-buddy/home">
            Terms and Conditions
          </Link>
          <Link>Privacy Policy</Link>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;

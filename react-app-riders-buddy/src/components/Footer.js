import { Container, Link } from "@mui/material";
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
          height: "140px",
          backgroundColor: "#F7F7FC",
          maximumWidth: 1600,
          marginTop: "88px",
          backgroundSize: "cover",
          padding: "42px 170px 42px 170px",
          display: "flex!important",
          alignItems: "center",
          maxWidth: "1920px!important",
          width: "1920px!important",
          borderBottom: "1px solid #D9DBE9",
        }}
      >
        <Container style={{ marginLeft: "-20px" }}>
          <Typography
            variant="h1"
            style={{ fontWeight: "bold", color: "#1AA3E9" }}
          >
            Why Riders Buddy?
          </Typography>
        </Container>
      </Box>
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "128px",
          marginLeft: "180px",
          marginTop: "36px",
          marginBottom: "36px",
          height: "140px",
        }}
      >
        <Box>
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
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
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
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
          <Box style={{ display: "inline-flex", alignItems: "center" }}>
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

      <Box
        style={{
          display: "inline-flex",
          gap: "50px",
          height: "460px",
          borderTop: "1px solid #D9DBE9",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            marginRight: "-100px",
            gap: "32px",
            marginLeft: "170px",
            marginTop: "48px",
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

          <Box style={{ display: "inline-flex", gap: "32px" }}>
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
      <Box
        style={{
          borderTop: "1px solid #D9DBE9",
          display: "inline-flex",
          alignItems: "center",
          gap: "1090px",
          marginLeft: "120px",
          padding: "32px",
        }}
      >
        <Typography
          style={{ fontSize: "18px", fontWeight: "bold", color: "#1AA3E9" }}
        >
          ©2022 Riders Buddy
        </Typography>
        <Box
          style={{ display: "inline-flex", flexDirection: "row", gap: "32px" }}
        >
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

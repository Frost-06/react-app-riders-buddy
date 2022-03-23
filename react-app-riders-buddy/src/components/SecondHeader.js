import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Link,
  TextField,
  InputAdornment,
  Divider,
  useMediaQuery,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { motion } from "framer-motion";
import UserContext from "../context/UserContext";
import ChatContext from "../context/ChatContext";
import { useTheme } from "@emotion/react";

export default function Header() {
  const { user, updateUser } = React.useContext(UserContext);
  const { chatDrawer, setChatDrawer } = React.useContext(ChatContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Container style={{ marginTop: 40 }}>
        <Box style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img src={"/img/user-icon.png"} style={{ width: "25%" }} alt="prof" />
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" style={{}}>
              {user.firstName} {user.lastName}
            </Typography>
            <Link
              variant="subtitle2"
              style={{ fontWeight: "600 !important", color: "#1AA3E9" }}
            >
              View Account
            </Link>
          </Box>
        </Box>
        <Box>
          {/* Navigation */}
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/my-order.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    My Orders
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/my-favourites.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    My Favourites
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                >
                  <ListItemIcon>
                    <img src={"/img/vouchers.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    Vouchers
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  style={{ marginBottom: "24px", padding: "22px" }}
                  onClick={() => {
                    updateUser({ type: "logout" });
                  }}
                >
                  <ListItemIcon>
                    <img src={"/img/log-out.png"} alt="prof" />
                  </ListItemIcon>
                  <Typography style={{ fontWeight: "bold" }}>
                    Log-out
                  </Typography>
                  <ListItemText style={{ fontWeight: "bold" }}></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
        </Box>
        <List>
          {["About us", "Seller Center", "Help Center"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );

  return (
    <>
      <motion.header
        style={{ position: "sticky", top: 0, zIndex: 20 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="primary"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#1AA3E9" />
                <rect
                  x="3"
                  y="16"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#1AA3E9"
                />
                <rect
                  x="3"
                  y="11"
                  width="14"
                  height="2"
                  rx="1"
                  fill="#76C8F2"
                />
              </svg>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/homepage">
                <img
                  src="/assets/riders-buddy-horizontal-logo.svg"
                  width={isMd ? 200 : 220}
                  alt=""
                />
              </Link>
            </Typography>
            <TextField
              style={{
                width: isMd ? 260 : "",
                maxWidth: 664,
                marginBottom: 6,
                marginRight: 525,
              }}
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
            <Link
              style={{ marginRight: 40, width: "-25%" }}
              onClick={() => {
                setChatDrawer({ ...chatDrawer, right: true });
              }}
            >
              <img src="/assets/message.svg" height="40" />
            </Link>
            <Link style={{ marginRight: 24, width: "-25%" }}>
              <img src="/assets/cart.svg" height="40" />
            </Link>
          </Toolbar>
        </AppBar>
      </motion.header>
    </>
  );
}

import {
  Container,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Link,
  Divider,
  useMediaQuery,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "../theme/CustomIcons";
import { useTheme } from "@emotion/react";

export default function Header() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const loginID = 1;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <Typography variant="h1" style={{ fontSize: 28, marginBottom: 32 }}>
          Sign-in to enjoy exclusive deals and offers
        </Typography>
        <Button variant="contained" href="/sign-in" fullWidth="true">
          Sign in
        </Button>
        <Box>
          <Divider style={{ marginTop: "32px" }} />
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

        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                <img src="/img/logo.png" width={isMd ? 150 : 249}  alt=""/>
              </Link>
            </Typography>
            <Button
              variant="contained"
              href="/sign-in"
              style={{ marginRight: 24 }}
            >
              Sign in
            </Button>
            <Button variant="outlined" href="/sign-up">
              Sign up
            </Button>
          </Toolbar>
        </AppBar>
      </motion.header>
    </>
  );
}

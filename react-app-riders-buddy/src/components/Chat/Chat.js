import {
  AppBar,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function Chat(props) {
  return (
    <div className="chat">
      <AppBar style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {}}
          >
            <img src="/img/backward-icon.png" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            <img src="/img/image.png" className="product-image" />
          </Typography>
          <ListItemText
            style={{ flexGrow: 1 }}
            primary="Product Name"
            secondary="Online"
          />
          <Typography>...</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Chat;

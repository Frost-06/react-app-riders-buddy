import {
  AppBar,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
  CardMedia
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function Chat(props) {
  const loc = useLocation();
  const { name } = loc.state;
  const { image } = loc.state;
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
            <img src="/img/backward-icon.png"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.6 }}>
            <CardMedia
              component="img"
              image={image}
              style={{ borderRadius: "6px"}}
              className="product-image"
            />
          </Typography>
          <ListItemText
            style={{ flexGrow: 1}}
            primary={name && name.slice(0, 25) + "..."}
            secondary="Online"
          />
          <Typography>...</Typography>
        </Toolbar>
        
      </AppBar>
      Hello
 
    </div>
  );
}

export default Chat;

import {
  AppBar,
  CardMedia,
  Container,
  Divider,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";

function Chat(props) {
  const { user } = React.useContext(UserContext);
  const { chatData } = React.useContext(ChatContext);
  const [messages, setMessages] = React.useState([]);

  return (
    <div className="chat">
      <AppBar
        style={{ position: "inherit", top: 0, left: 0, right: 0, zIndex: 1 }}
      >
        {user.item && (
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {}}
            >
              <img src="/img/backward-icon.png" alt="" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.6 }}>
              <CardMedia
                component="img"
                image={user.item.image}
                style={{ borderRadius: "6px" }}
                className="product-image"
              />
            </Typography>
            <ListItemText
              style={{ flexGrow: 1 }}
              primary={
                user.item.item_name && user.item.item_name.slice(0, 25) + "..."
              }
              secondary="Online"
            />
            <Typography sx={{ fontSize: 25 }}>•••</Typography>
          </Toolbar>
        )}
      </AppBar>
      <Container>
        <Divider>Yesterday</Divider>
        {JSON.stringify(chatData)}
      </Container>

      <div></div>
    </div>
  );
}

export default Chat;

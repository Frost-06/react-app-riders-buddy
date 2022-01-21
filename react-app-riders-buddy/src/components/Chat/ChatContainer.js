import { Box, SwipeableDrawer } from "@mui/material";
import React, { useEffect } from "react";
import useChat from "../../hooks/useChat";
import Chat from "../Chat/Chat";

function ChatContainer(props) {
  // set
  const { chatDrawer, setChatDrawer } = useChat();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setChatDrawer({ ...chatDrawer, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 464 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Chat />
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={chatDrawer["right"]}
      onClose={toggleDrawer("right", false)}
      onOpen={toggleDrawer("right", true)}
    >
      {list("right")}
    </SwipeableDrawer>
  );
}

export default ChatContainer;

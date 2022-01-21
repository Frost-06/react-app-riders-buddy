import { useContext, useEffect } from "react";
import ChatContext from "../context/ChatContext";

function useChat() {
  const { chatData, setChat, chatDrawer, setChatDrawer } =
    useContext(ChatContext);
  return { chatData, setChat, chatDrawer, setChatDrawer };
}

export default useChat;

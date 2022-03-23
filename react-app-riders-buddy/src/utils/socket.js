import io from "socket.io-client";

export const events = {
  GET_PRICE: "getPrice",
  SET_USER: "setUser",
  REMOVE_USER: "removeUser",
  NEW_ORDER: "newOrder",
  ROOM_MESSAGE: "roomMessage",
};

export default io.connect("http://localhost:4000");

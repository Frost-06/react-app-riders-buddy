const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app);
const { getStoreMerchant } = require("./utils/getStore");
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const users = {};

const rooms = {};

const events = {
  GET_PRICE: "getPrice",
  SET_USER: "setUser",
  REMOVE_USER: "removeUser",
  NEW_ORDER: "newOrder",
  ROOM_MESSAGE: "roomMessage",
};

io.on("connection", (socket) => {
  socket.on(events.SET_USER, (user) => {
    if (!user.id) return;
    users[socket.id] = { ...user, socket };
  });
  socket.on(events.ROOM_MESSAGE, ({ room_id, message }) => {
    rooms[room_id].messages.push({
      from: users[socket.id],
      message,
      date: new Date(),
    });
    io.to(room).broadcast.emit(events.ROOM_MESSAGE, {
      started: rooms[room].started,
      product: rooms[room_id].product,
      customer: rooms[room].customer,
      room_id,
      messages: rooms[room].messages,
    });
  });
  socket.on(events.GET_PRICE, ({ user, product }) => {
    const merchant = getStoreMerchant(product.store_id, users);
    if (merchant) {
      const room = user.id + "-" + product.id;
      socket.join(room);
      merchant.socket.join(room);
      const m = { ...merchant };
      delete m.socket;
      rooms[room] = {
        started: new Date(),
        product,
        customer: user,
        merchant,
        messages: [
          {
            from: "SYSTEM",
            message: "Connected with " + merchant.firstName,
            date: new Date(),
          },
          {
            from: user,
            message: "palit ko shabu",
            date: new Date(),
          },
          {
            from: m,
            message: "OK",
            date: new Date(),
          },
        ],
      };
      io.to(room).emit(events.ROOM_MESSAGE, {
        started: rooms[room].started,
        product,
        customer: rooms[room].customer,
        room_id: room,
        messages: rooms[room].messages,
      });
      io.to(merchant.socket.id).emit(events.NEW_ORDER, { user, product });
    }
  });
  socket.on("disconnect", () => {
    delete users[socket.id];
  });
  socket.on(events.REMOVE_USER, () => {
    delete users[socket.id];
  });
});

httpServer.listen(4000, () => {
  console.log("listening on *:4000");
});

import axios from "axios";
import { useReducer, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ChatContainer from "./components/Chat/ChatContainer";
import ChatContext from "./context/ChatContext";
import UserContext from "./context/UserContext";
import userReducer from "./reducers/userReducer";
import Dashboard from "./routes/Homepage";
import ProductPage from "./routes/ProductPage";
import ServicePage from "./routes/ServicePage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import socket, { events } from "./utils/socket";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  const [chatData, setChat] = useState();
  const [chatDrawer, setChatDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [user, updateUser] = useReducer(
    userReducer,
    localStorage["user"]
      ? {
          ...JSON.parse(localStorage["user"]),
          isLoggedIn: true,
        }
      : {
          isLoggedIn: false,
        }
  );

  useEffect(() => {
    socket.emit(events.SET_USER, user);
    socket.on(events.NEW_ORDER, ({ user, product }) => {
      updateUser({ type: "setCurrentItem", payload: product });
      setChatDrawer({ ...chatDrawer, right: true });
    });
    socket.on(events.ROOM_MESSAGE, (room) => {
      console.log("connected", room.started);
      setChat(room);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      <ChatContext.Provider
        value={{ chatData, setChat, chatDrawer, setChatDrawer }}
      >
        <ChatContainer />
        <Router>
          <Switch>
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/service" component={ServicePage} />
            <Route path="/homepage" component={Dashboard} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </ChatContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

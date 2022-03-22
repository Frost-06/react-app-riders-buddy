import { Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import Dashboard from "./routes/Homepage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ServicePage from "./routes/ServicePage";
import ChatContext from "./context/ChatContext";
import UserContext from "./context/UserContext";
import { useReducer, useState } from "react";
import axios from "axios";
import userReducer from "./reducers/userReducer";

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
        <Routes>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/homepage" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ChatContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

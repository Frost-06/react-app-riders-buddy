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
  const [chatData, setChat] = useState({
    started: "2022-03-23T18:52:39.483Z",
    product: {
      id: 1,
      item_name:
        "KMC Chain Road Bike/Mountain Bike 9/10/11 Speed Magic Button 116L/118L Compatible for SHIMANO 9/10/11",
      price: 1500,
      endingPrice: 2500,
      salePrice: 0.25,
      parts: "Bike Chain",
      descriptionCategories: "Bicycle Products",
      SKU: 96635,
      weight: "4kg",
      brand: "KMC",
      color: "Silver",
      numberOfStocks: 25,
      stockStatus: "In Stock",
      dimensions: "10 x 20 x15",
      categoryType: "product",
      description: "",
      created_at: "2022-03-23T16:12:04.000000Z",
      updated_at: "2022-03-23T16:12:04.000000Z",
      image: "/img/item-img/1.png",
      sold_items: 500,
      store_id: 1,
    },
    customer: {
      id: 12,
      firstName: "ANDRE",
      lastName: "GUINITA",
      email: "andredulaguinita@gmail.com",
      email_verified_at: null,
      created_at: "2022-03-23T16:47:47.000000Z",
      updated_at: "2022-03-23T16:47:47.000000Z",
      type: "customer",
      isLoggedIn: true,
    },
    room_id: "12-1",
    messages: [
      {
        from: "SYSTEM",
        message: "Connected with MERCHANT",
        date: "2022-03-23T18:52:39.483Z",
      },
      {
        from: {
          id: 12,
          firstName: "ANDRE",
          lastName: "GUINITA",
          email: "andredulaguinita@gmail.com",
          email_verified_at: null,
          created_at: "2022-03-23T16:47:47.000000Z",
          updated_at: "2022-03-23T16:47:47.000000Z",
          type: "customer",
          isLoggedIn: true,
        },
        message: "palit ko shabu",
        date: "2022-03-23T18:52:39.483Z",
      },
      {
        from: {
          id: 13,
          firstName: "MERCHANT",
          lastName: "GUINITA",
          email: "andredulaguinita2@gmail.com",
          email_verified_at: null,
          created_at: "2022-03-23T16:47:47.000000Z",
          updated_at: "2022-03-23T16:47:47.000000Z",
          type: "merchant",
          merchant: {
            id: 1,
            merchant_firstname: "",
            merchant_lastname: "",
            merchant_username: "",
            merchant_password: "",
            seller_storeid: 1,
            created_at: null,
            updated_at: null,
            user_id: 13,
            store: {
              id: 1,
              store_name: "Oten",
              store_address: "Store",
              store_rating: "5",
              items_added: "",
              created_at: null,
              updated_at: null,
            },
          },
          isLoggedIn: true,
        },
        message: "OK",
        date: "2022-03-23T18:52:39.483Z",
      },
    ],
  });
  const [chatDrawer, setChatDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
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
      setChat(room);
      console.log(room);
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

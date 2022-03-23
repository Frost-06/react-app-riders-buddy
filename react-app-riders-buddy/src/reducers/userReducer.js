export default function userReducer(state, action) {
  switch (action.type) {
    case "setUser":
      localStorage["user"] = JSON.stringify(action.payload);
      return action.payload;
    case "logout":
      delete localStorage["user"];
      window.location = "/";
      return {
        isLoggedIn: false,
      };
    case "setCurrentItem":
      return {
        ...state,
        item: action.payload,
      };
    default:
      throw new Error("Invalid user context dispatch");
  }
}

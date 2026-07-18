import { createContext, useState } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ctxValue = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={ctxValue}>{children}</UserContext.Provider>
  );
}

export { UserContext };

import { createContext, useState } from "react";

const AdminMobileNavigationContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export default function AdminMobileNavigationContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const ctxValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <AdminMobileNavigationContext.Provider value={ctxValue}>
      {children}
    </AdminMobileNavigationContext.Provider>
  );
}

export { AdminMobileNavigationContext };

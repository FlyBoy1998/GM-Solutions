import { createContext, useState } from "react";

const MobileNavigationContext = createContext({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export default function MobileNavigationContextProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ctxValue = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <MobileNavigationContext.Provider value={ctxValue}>
      {children}
    </MobileNavigationContext.Provider>
  );
}

export { MobileNavigationContext };

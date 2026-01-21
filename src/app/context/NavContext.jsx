// app/context/NavContext.jsx

"use client";
import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};

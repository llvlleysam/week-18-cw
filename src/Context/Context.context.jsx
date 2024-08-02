import { createContext, useState } from "react";

export const RootContext = createContext();

export default function ContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [currentCart, setCurrentCart] = useState(null);
  return (
    <div>
      <RootContext.Provider
        value={{ showModal, setShowModal, showCheckOut, setShowCheckOut, currentCart, setCurrentCart }}
      >
        {children}
      </RootContext.Provider>
    </div>
  );
}

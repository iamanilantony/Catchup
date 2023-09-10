"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from "react";

export const ModalContext = createContext<{
  setShowAddContactModal: Dispatch<SetStateAction<boolean>>;
}>({
  setShowAddContactModal: () => {}
});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  return (
    <ModalContext.Provider value={{ setShowAddContactModal }}>
      {children}
    </ModalContext.Provider>
  );
}

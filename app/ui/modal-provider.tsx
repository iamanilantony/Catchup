"use client";

import { useAddContactModal } from "@/components/modals/add-contact-modal";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

export const ModalContext = createContext<{
  setShowAddContactModal: Dispatch<SetStateAction<boolean>>;
}>({
  setShowAddContactModal: () => {}
});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const { AddContactModal, setShowAddContactModal } = useAddContactModal();
  return (
    <ModalContext.Provider value={{ setShowAddContactModal }}>
      <AddContactModal />
      {children}
    </ModalContext.Provider>
  );
}

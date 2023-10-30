import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogTrigger
} from "@/components/ui/Dialog";
import AddExpenseForm from "@/components/expensetracker/AddExpenseForm";
import Modal from "../shared/modal";
import { Button } from "@/components/ui/Button";

type Props = {};

const ExpenseModal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal((prev) => !prev)}>I am Anil</Button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddExpenseForm />
      </Modal>
    </div>
  );
};

export default ExpenseModal;

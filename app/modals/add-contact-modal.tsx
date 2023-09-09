import Modal from "@/components/shared/modal";
import { ContactCreationRequest } from "@/lib/validators/contact";
import axios from "axios";
import Link from "next/link";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useMutation } from "react-query";

function AddContactModalHelper({
  showAddContactModal,
  setShowAddContactModal
}: {
  showAddContactModal: boolean;
  setShowAddContactModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<ContactCreationRequest>({
    name: "",
    duration: 0,
    relation: ""
  });

  const { name, duration, relation } = data;

  return (
    <Modal
      showModal={showAddContactModal}
      setShowModal={setShowAddContactModal}
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
        <h3 className="text-lg font-medium">Create a new Contact</h3>
        <Link
          href="/contacts"
          className="text-center text-xs text-gray-500 underline underline-offset-4 hover:text-gray-400"
        >
          Show Your current contacts
        </Link>
        <form
          onSubmit={async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSaving(true);
            const { mutate: createContact } = useMutation({
              mutationFn: async ({
                name,
                duration,
                relation
              }: ContactCreationRequest) => {
                const payload: ContactCreationRequest = {
                  name,
                  duration,
                  relation
                };

                const { data } = await axios.post(
                  "/api/contact/create",
                  payload
                );
                return data;
              }
            });
          }}
        ></form>
      </div>
    </Modal>
  );
}

"use client";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { ModalContext } from "@/app/ui/modal-provider";
import { useContext } from "react";

const page = () => {
  // const { setShowAddContactModal } = useContext(ModalContext);

  return (
    <>
      <div className="flex h-36 items-center border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl text-gray-600">My Contacts</h1>
            <button
              // onClick={() => setShowAddContactModal(true)}
              className="rounded-md border border-black bg-black px-5 py-2 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
            >
              CreateProject
            </button>
          </div>
        </MaxWidthWrapper>
      </div>
      asdasd
    </>
  );
};

export default page;

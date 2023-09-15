"use client";

import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { useContext } from "react";
import { ModalContext } from "../ui/modal-provider";

const page = () => {
  const { setShowAddContactModal } = useContext(ModalContext);

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        {/* <h1
          className="animate-fade-up font-display opacity-1 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Prioritize What Truly Matters: Reconnect and Cherish
          </Balancer>
        </h1>
        <p
          className="animate-fade-up opacity-1 mt-6 text-center text-gray-500 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Your Gateway to Reconnecting with Friends and Family
          </Balancer>
        </p>
        <div
          className="animate-fade-up mx-auto mt-6 flex items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-[#8e32bb] px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Get started, It's free</p>
          </a>
        </div> */}
        <button
          onClick={() => setShowAddContactModal(true)}
          className="rounded-md border border-black bg-black px-5 py-2 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
        >
          CreateProject
        </button>
      </div>
    </>
  );
};

export default page;

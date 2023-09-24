"use client";

import { Session } from "next-auth";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useSignInModal } from "./sign-in-modal";
import {
  AiFillHome,
  AiOutlineVideoCameraAdd,
  AiFillCheckCircle,
  AiFillSetting
} from "react-icons/ai";
import { HiMiniArrowLeftCircle } from "react-icons/hi2";
// import { GiCootieCatcher } from "react-icons/gi";
import { useState } from "react";

export default function Sidebar({ session }: { session?: Session | null }) {
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const [modalCollapse, setModalCollapse] = useState(true);
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-56 overflow-y-auto bg-[#F7F9FC] text-[#BDC5CE]">
      <div className="flex items-center p-4 pl-8 text-2xl font-bold text-[#0F6FDE]">
        <AiOutlineVideoCameraAdd className="mr-2" />
        <p>Catchup</p>
        <div className="fixed z-0 ml-44 cursor-pointer">
          <button
            className={`bg-${
              modalCollapse ? "red" : "blue"
            }-500 rounded-lg p-2 text-black`}
            onClick={() => setModalCollapse(!modalCollapse)}
          >
            <HiMiniArrowLeftCircle />
          </button>
        </div>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2 px-5 py-5 ">
            <a
              href="#"
              className="flex items-center text-[#0F6FDE] hover:text-[#0F6FDE]"
            >
              <AiFillHome className="mr-2" />
              {modalCollapse && "Dashboard"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#0F6FDE]"
            >
              <AiFillCheckCircle className="mr-2" />
              {modalCollapse && "Profile"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#0F6FDE]"
            >
              <AiFillSetting className="mr-2" />
              {modalCollapse && "Settings"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#0F6FDE]"
            >
              <AiFillCheckCircle className="mr-2" />
              {modalCollapse && "Logout"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

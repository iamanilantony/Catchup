"use client";

import { Session } from "next-auth";
import { HiMiniArrowLeftCircle, HiMiniArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import sideBarData from "@/components/sidebar/sideBarData";
import SubMenu from "@/components/sidebar/subMenu";

export default function Sidebar({ session }: { session?: Session | null }) {
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const [modalCollapse, setModalCollapse] = useState(true);
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen transform transition-transform text-white duration-300 ${
        modalCollapse ? "w-46" : "w-22"
      } overflow-y-auto bg-[#0d0d0d] text-[#5169F6]`}
    >
      <Link href="/">
        <div className="flex items-center p-4 pl-8 text-2xl font-bold text-[#5169F6]">
          <span className="bg-[#5169F6] p-1 rounded-sm mr-2 font-light text-white">
            Cu
          </span>
          {modalCollapse && <span className="text-white">catchup</span>}
          {/* <button
            className={`bg fixed z-0  cursor-pointer ${
              modalCollapse ? "ml-40" : "ml-8"
            } rounded-lg p-2`}
            onClick={() => setModalCollapse(!modalCollapse)}
          >
            {modalCollapse ? (
              <HiMiniArrowLeftCircle />
            ) : (
              <HiMiniArrowRightCircle />
            )}
          </button> */}
        </div>
      </Link>
      <nav className="p-4">
        {sideBarData.map((item) => (
          <SubMenu
            title={item.title}
            to={item.to}
            icon={item.activeIcon}
            subItem={item.subItem}
          />
        ))}
      </nav>
    </div>
  );
}

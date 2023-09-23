import { Session } from "next-auth";
import { useSignInModal } from "./sign-in-modal";
import {
  AiFillHome,
  AiOutlineVideoCameraAdd,
  AiFillCheckCircle,
  AiFillSetting
} from "react-icons/ai";
import { GiCootieCatcher } from "react-icons/gi";

export default function Sidebar({ session }: { session?: Session | null }) {
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <div className="fixed left-0 top-0 h-screen w-52 overflow-y-auto bg-[#F7F9FC] text-[#BDC5CE]">
      <div className="flex items-center p-4 pl-8 text-2xl font-bold text-[#0F6FDE]">
        <AiOutlineVideoCameraAdd className="mr-2" />
        <p>Catchup</p>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2 px-5 py-5 ">
            <a
              href="#"
              className="flex items-center text-[#0F6FDE] hover:text-white"
            >
              <AiFillHome className="mr-2" />
              Dashboard
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <AiFillCheckCircle className="mr-2" />
              Profile
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <AiFillSetting className="mr-2" />
              Settings
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <AiFillCheckCircle className="mr-2" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

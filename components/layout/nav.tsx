import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Sidebar from "../sidebar/sidebar";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return session ? <Navbar session={session} /> : <Sidebar session={session} />;
}

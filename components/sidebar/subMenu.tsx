import Link from "next/link";
import React, { ReactElement } from "react";
// import { IconBase, IconType } from "react-icons";

type SubItem = {
  title: string;
  to: string;
  icon: ReactElement;
};

type Props = {
  title: string;
  to: string;
  icon: ReactElement;
  subItem?: SubItem[];
};

function SubMenu({ title, to, icon, subItem }: Props) {
  return (
    <Link href={to}>
      <div className="flex items-center justify-between p-5">
        <span>{icon}</span>
        <span className="w-[64.47px]">{title}</span>
      </div>
    </Link>
  );
}

export default SubMenu;

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/app/ui/card";
import { SlCalender } from "react-icons/sl";
import { GiMuscleUp } from "react-icons/gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";

const iconStyle = "rounded-xl bg-[#0F6FDE] p-2 text-4xl text-white";

const panelItems = [
  {
    item: "Habit Tracker",
    desc: "Track, Monitor, and Improve Daily Habits.",
    icon: <SlCalender className={iconStyle} />
  },
  {
    item: "CatchUp",
    desc: "CatchUp to you close friends and family.",
    icon: <GiMuscleUp className={iconStyle} />
  },
  {
    item: "Expense Tracker",
    desc: "Calculate all you monthly expenses in one place",
    icon: <MdOutlineAttachMoney className={iconStyle} />
  },
  {
    item: "To Do",
    desc: "Keep All your to do tasks together",
    icon: <FcTodoList className={iconStyle} />
  }
];

export function Dashpanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Access</CardTitle>
      </CardHeader>
      <div className="flex">
        {panelItems.map((item) => (
          <div className="flex justify-between p-4">
            <Card className="bg-[#eaf2f8]">
              <CardHeader>
                <div className="mb-2">{item.icon} </div>
                <CardTitle className="mr-4">
                  <div className="flex items-center">
                    <span className="mr-2">{item.item}</span>
                    <BsFillArrowRightCircleFill className="text-base text-[#373737]" />
                  </div>
                </CardTitle>
                <CardDescription className="w-60">{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
}

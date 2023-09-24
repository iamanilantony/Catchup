import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/app/ui/card";
import { AiFillWarning } from "react-icons/ai";

export default function PendingTasks() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>Your pending tasks</CardTitle>
        <CardDescription className="cursor-pointer">
          See all task
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl">4</p>
        <p className="text-md my-2">Pending task</p>
        <Card className="my-2 w-full">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex items-center">
              <AiFillWarning className="mr-3 rounded-xl bg-[#e0dfdf] p-1 text-2xl" />
              <p> Thomas Edward has a invalid social security system</p>
            </div>
            <CardDescription className="text-md cursor-pointer text-[#0F6FDE]">
              Expand
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="my-2 w-full">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex items-center">
              <AiFillWarning className="mr-3 rounded-xl bg-[#e0dfdf] p-1 text-2xl" />
              <p> Thomas Edward has a invalid social security system</p>
            </div>
            <CardDescription className="text-md cursor-pointer text-[#0F6FDE]">
              Expand
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex items-center">
              <AiFillWarning className="mr-3 rounded-xl bg-[#e0dfdf] p-1 text-2xl" />
              <p> Thomas Edward has a invalid social security system</p>
            </div>
            <CardDescription className="text-md cursor-pointer text-[#0F6FDE]">
              Expand
            </CardDescription>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
}

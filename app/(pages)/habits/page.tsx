import dateObj from "@/lib/info/DateObj";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export default function page() {
  const habits = ["", "nofap", "read", "workout", "code", "sleep", "meditate"];
  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="flex">
          <div className="mx-6 my-2 mt-20 flex cursor-pointer flex-col text-center">
            {habits.map((habit) => (
              <p className="my-[12px] font-semibold">{habit}</p>
            ))}
          </div>
          {dateObj.map((current) => (
            <div className="mx-6 my-2 flex cursor-pointer flex-col justify-center text-center">
              <p>{current.day}</p>
              <p>{current.date}</p>
              <BsFillCheckCircleFill className="ml-1 mt-8 text-green-600" />

              <ImCross className="ml-1 mt-8 text-red-600" />
              <BsFillCheckCircleFill className="ml-1 mt-8 text-green-600" />
              <BsFillCheckCircleFill className="ml-1 mt-8 text-green-600" />
              <BsFillCheckCircleFill className="ml-1 mt-8 text-green-600" />
              <BsFillCheckCircleFill className="ml-1 mt-8 text-green-600" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

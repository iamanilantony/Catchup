import HabitCard from "@/components/home/habits";
import dateObj from "@/lib/info/DateObj";

export default function page() {
  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="flex">
          {dateObj.map((day) => (
            <div>
              {day.date}
              {day.day}
            </div>
          ))}
          <HabitCard />
        </div>
      </div>
    </>
  );
}

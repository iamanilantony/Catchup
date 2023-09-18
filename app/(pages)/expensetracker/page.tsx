import HabitCard from "@/components/home/habits";

export default function page() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dateObj = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((e) => {
    return {
      day: new Date(new Date().getDay() - e),
      date: new Date(new Date().getDate() - e)
    };
  });
  console.log(dateObj);
  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="flex">
          <HabitCard />
        </div>
      </div>
    </>
  );
}

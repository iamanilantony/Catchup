import HabitCard from "@/components/home/habits";

export default function page() {
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

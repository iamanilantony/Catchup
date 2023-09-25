import PendingTasks from "@/components/home/pending-tasks";
import HabitCard from "@/components/home/habits";
import { Dashpanel } from "@/components/home/dashpanel";

const page = () => {
  // const { setShowAddContactModal } = useContext(ModalContext);

  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="flex">
          <HabitCard />
        </div>
      </div>
    </>
  );
};

export default page;

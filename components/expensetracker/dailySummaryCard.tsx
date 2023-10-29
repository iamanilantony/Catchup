import React from "react";
import SingleExpenseCard from "@/components/expensetracker/SingleExpenseCard";

type Props = {};

const DailySummaryCard = (props: Props) => {
  return (
    <div className="my-4 bg-white px-2">
      <div className="my-2 flex justify-between">
        <p className="font-bold">
          27{" "}
          <span className="rounded bg-gray-400 p-1 text-xs font-light">
            Fri
          </span>
        </p>
        <p className="text-blue-400">₹ 303030</p>
        <p className="text-red-400">₹ 303030</p>
      </div>
      <hr />
      <SingleExpenseCard />
      <SingleExpenseCard />
      <SingleExpenseCard />
      <SingleExpenseCard />
    </div>
  );
};

export default DailySummaryCard;

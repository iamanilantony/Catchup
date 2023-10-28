import React from "react";

type Props = {};

const SingleExpenseCard = (props: Props) => {
  return (
    <div className="flex cursor-pointer justify-between p-1 hover:border">
      <span>socailLife</span>
      <div className="flex flex-col">
        <span>Trip Wayanad</span>
        <span className="text-xs text-gray-400">Bank Accounts</span>
      </div>
      <span className="text-red-400">₹ 4610</span>
    </div>
  );
};

export default SingleExpenseCard;

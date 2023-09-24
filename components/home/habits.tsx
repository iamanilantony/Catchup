import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/app/ui/card";
import { useState } from "react";

export default function HabitCard() {
  const handleSlotSelect = ({ index, day }: { index: number; day: number }) => {
    setSelectedSlots(
      ...selectedSlots,
      selectedSlots[index].find((e) => e.day === day)?.active === true
    );
  };
  const slotData = [
    [
      { day: 1, active: false },
      { day: 2, active: false },
      { day: 3, active: false },
      { day: 4, active: false },
      { day: 5, active: false },
      { day: 6, active: false }
    ],
    [
      { day: 1, active: false },
      { day: 2, active: false },
      { day: 3, active: false },
      { day: 4, active: false },
      { day: 5, active: false },
      { day: 6, active: false }
    ],
    [
      { day: 1, active: false },
      { day: 2, active: false },
      { day: 3, active: false },
      { day: 4, active: false },
      { day: 5, active: false },
      { day: 6, active: false }
    ],
    [
      { day: 1, active: false },
      { day: 2, active: false },
      { day: 3, active: false },
      { day: 4, active: false },
      { day: 5, active: false },
      { day: 6, active: false }
    ],
    [
      { day: 1, active: false },
      { day: 2, active: false },
      { day: 3, active: false },
      { day: 4, active: false },
      { day: 5, active: false },
      { day: 6, active: false }
    ]
  ];
  const [selectedSlots, setSelectedSlots] =
    useState<{ day: number; active: Boolean }[][]>(slotData);

  return (
    <Card className="mr-4">
      <CardHeader>
        <CardTitle>Habits</CardTitle>
        <CardDescription>Personal Growth Habits</CardDescription>
      </CardHeader>
      <CardContent>
        {selectedSlots.map((ind, index) => (
          <div className="flex" key={index}>
            {ind.map((i) => (
              <div
                key={i.day}
                className={`m-1 cursor-pointer rounded-md ${
                  i.active ? "bg-[#0F6FDE]" : "bg-[#e0e0e0]"
                } px-2 py-1 text-white`}
                onClick={() => handleSlotSelect({ index, day: i.day })}
              >
                {i.day}
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

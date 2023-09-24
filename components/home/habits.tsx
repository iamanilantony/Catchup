"use client";

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
  const handleSlotSelect = ({ habit, day }: { habit: string; day: number }) => {
    setSelectedSlots((prevSelectedSlots) =>
      prevSelectedSlots.map((item) => {
        if (item.habit === habit) {
          return {
            ...item,
            slots: item.slots.map((slot) =>
              slot.day === day ? { ...slot, active: !slot.active } : slot
            )
          };
        }
        return item;
      })
    );
  };
  const slotData = [
    {
      habit: "NoFap",
      slots: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
        { day: 6, active: false }
      ]
    },
    {
      habit: "DSA",
      slots: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
        { day: 6, active: false }
      ]
    },
    {
      habit: "Exercise",
      slots: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
        { day: 6, active: false }
      ]
    },
    {
      habit: "Drink",
      slots: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
        { day: 6, active: false }
      ]
    },
    {
      habit: "Read",
      slots: [
        { day: 1, active: false },
        { day: 2, active: false },
        { day: 3, active: false },
        { day: 4, active: false },
        { day: 5, active: false },
        { day: 6, active: false }
      ]
    }
  ];
  const [selectedSlots, setSelectedSlots] =
    useState<{ habit: string; slots: { day: number; active: Boolean }[] }[]>(
      slotData
    );

  return (
    <Card className="mr-4">
      <CardHeader>
        <CardTitle>Habits</CardTitle>
        <CardDescription>Personal Growth Habits</CardDescription>
      </CardHeader>
      <CardContent>
        {selectedSlots.map((ind, index) => (
          <div className="my-4 flex items-center" key={index}>
            <span className="w-20">{ind?.habit}</span>
            {ind.slots.map((i) => (
              <div
                key={i.day}
                className={`m-1 cursor-pointer rounded-md ${
                  i.active ? "bg-[#0F6FDE]" : "bg-[#e0e0e0]"
                } px-2 py-1 text-white`}
                onClick={() =>
                  handleSlotSelect({ habit: ind.habit, day: i.day })
                }
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

"use client";

import dateObj from "@/lib/info/DateObj";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";

export default function page() {
  type Habit = {
    name: string;
    completion: number;
    streak: number;
    attempts: number;
    notes: string;
  };

  const defaultData: Habit[] = [
    {
      name: "PMO",
      completion: 2,
      streak: 2,
      attempts: 2,
      notes: "string"
    },
    {
      name: "Read",
      completion: 2,
      streak: 2,
      attempts: 2,
      notes: "string"
    },
    {
      name: "Study",
      completion: 2,
      streak: 2,
      attempts: 2,
      notes: "string"
    }
  ];

  const columnHelper = createColumnHelper<Habit>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("completion", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("attempts", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("notes", {
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("streak", {
      cell: (info) => info.getValue()
    })
  ];
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
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
        <table width="1200px">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
}

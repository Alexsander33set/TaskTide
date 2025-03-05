"use client"
// import { ReactNode } from "react";

import Column from "./Column";
import { Button } from "@/components/ui/button"
import { EllipsisVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Board() {
  const columns = ['Backlog', 'To Do', 'Doing', 'Done'];

  return (
    <section className="p-4 overflow-x-auto overflow-hidden">
      <div id="board-header" className="flex justify-between items-center">
      <div>
        <h3 className="text-2xl">Kanban Board Name</h3>
        <p>Decription</p>
        </div>
      <div className="flex items-center gap-4">
      {/* <Button variant={"outline"}><Plus /> Add Column</Button> */}
      <DropdownMenu>
        <DropdownMenuTrigger><EllipsisVertical className="text-gray-800"/></DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>

      </div>
      <div className={`grid grid-flow-col mt-4 gap-4`}>
        {columns.map((column) => (
          <Column key={column} title={column} />
        ))}
      </div>
    </section>
  );
}

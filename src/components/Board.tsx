"use client"
// import { ReactNode } from "react";

import Column from "./Column";
import SettingsIcon from "./icons/Settings";

export default function Board() {
  const columns = ['Backlog', 'To Do', 'Doing', 'Done'];

  return (
    <section className="p-4 overflow-x-auto overflow-hidden">
      <div id="board-header" className="flex justify-between items-center">
      <div>
        <h3 className="text-2xl">Board Name</h3>
        <p>Decription</p>
        </div>
      <div className="flex items-center gap-4">
      <button className="hover:bg-white py-1 px-2 rounded transition">+ Add Column</button>
      <button><SettingsIcon className="text-gray-800" /></button>
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

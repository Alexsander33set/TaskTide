// import { ReactNode } from "react";

import Column from "./Column";

export default function Board(
  // { children }: { children: ReactNode }
) {
  const columns = ['Backlog', 'To Do', 'Doing', 'Done'];

  return (
    <section className=" p-4 grid grid-cols-4 gap-4 bg-slate-200 shadow-md">
      {columns.map((column) => (
        <Column key={column} title={column} />
      ))}
    </section>
  );
}

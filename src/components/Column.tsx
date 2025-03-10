import { Plus } from "lucide-react";
import Card from "./Card";
import { Button } from "./ui/button";

export default function Column({ title }: { title: string }) {
  return (
    <div className="min-w-40 bg-slate-200 p-2 shadow border border-slate-300 rounded-md">
      {/* Column title */}
      <div className="flex justify-between items-center text-slate-700 px-1">
        <h2 className="text-md  font-bold uppercase">{title}</h2>
        <p>1 {/* Number of Cards on Column*/}</p>
      </div>
      {/* Cards */}
      <div className="mt-4 flex flex-col gap-4">
        <Card/>
        <Button variant={"outline"}>
          <div className="inline-flex items-center gap-2"> <Plus />Add a Card</div>
        </Button>
      </div>
    </div>
  );
}

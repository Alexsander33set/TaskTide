import Board from "@/components/Board";
import Card from "@/components/Card";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-3xl font-bold text-center mb-6">Bem-vindo ao TaskTide!</h1>
        <p className="text-center text-gray-600">Gerencie suas tarefas de forma eficiente com nosso quadro Kanban.</p>
      </section>
      <section className="m-6">
        <Board />
        <Card />
      </section>
    </>
  );
}

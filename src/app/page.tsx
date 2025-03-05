"use client"
import Board from "@/components/Board";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    function redirectTo(route:string){
      router.push(route)
    }

  return (
    <>
      <section className="mt-12">
        <h1 className="text-3xl font-bold text-center mb-6">Bem-vindo ao TaskTide!</h1>
        <p className="text-center text-gray-600">Gerencie suas tarefas de forma eficiente com nosso quadro Kanban.</p>
      </section>
      <section className="m-6 grid place-items-center">
        <Button onClick={()=>redirectTo("/board/new")}>Criar Board</Button>
      </section>
    </>
  );
}

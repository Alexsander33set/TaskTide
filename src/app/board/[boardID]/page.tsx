import Board from "@/components/Board"

export default async function Page({
  params,
}: {
  params: Promise<{ boardID: string }>
}) {
  const boardID = (await params).boardID
  return (
  <div>
    Board: {boardID}
    <Board />
  </div>)
}

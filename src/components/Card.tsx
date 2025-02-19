export default function Card({showCardDescription=false}) {
  return (
    <article className="p-4 rounded-lg shadow-md px-4 bg-white">
    <div>Card Name</div>
    {showCardDescription && <div>Card Description</div>}
    </article>
  )
}

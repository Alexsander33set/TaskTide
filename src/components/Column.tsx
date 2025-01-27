export default function Column({ title }: { title: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {/* Aqui ficarão os cartões */}
    </div>
  );
}

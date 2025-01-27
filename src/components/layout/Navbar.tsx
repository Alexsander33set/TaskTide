import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return(
    <section id="navbar" className="flex justify-between items-center px-4 py-2">
      <div className="logo flex items-center gap-4">
        <Image src='/logo.webp' alt="Logo" height={28} width={28} />
        <h1 className="font-medium text-xl">TaskTide</h1>
      </div>
      <nav className="flex gap-4">
        <Link href="/">Link1</Link>
        <Link href="/">Link2</Link>
        <Link href="/">Link3</Link>
        <Link href="/">Link4</Link>
      </nav>
    </section>
  )
}

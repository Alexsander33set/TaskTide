import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../Profile";


export default async function Navbar() {
  return(
    <section id="navbar" className="flex justify-between items-center px-4 py-2">
      <Link href="/">
        <div className="logo flex items-center gap-4">
          <Image src='/logo.webp' alt="Logo" height={28} width={28} />
          <h1 className="font-medium text-xl">TaskTide</h1>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/user">User</Link>
          <Link href="/">Link4</Link>
        </nav>
        <UserAvatar />

      </div>
    </section>
  )
}

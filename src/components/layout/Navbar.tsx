import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import UserProfile from "../Profile";


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
        <nav>
          <Link href="/">Home</Link>
          <Link href="/boards">My Boards</Link>
        </nav>
        <Separator orientation="vertical" className="min-h-5" />
        <UserProfile />

      </div>
    </section>
  )
}

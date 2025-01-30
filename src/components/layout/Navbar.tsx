import { signIn, useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession()

  return(
    <section id="navbar" className="flex justify-between items-center px-4 py-2">
      <div className="logo flex items-center gap-4">
        <Image src='/logo.webp' alt="Logo" height={28} width={28} />
        <h1 className="font-medium text-xl">TaskTide</h1>
      </div>
      <div className="flex items-center gap-2">
        <nav className="flex gap-4">
          <Link href="/">Homem</Link>
          <Link href="/about">About</Link>
          <Link href="/">Link3</Link>
          <Link href="/">Link4</Link>
        </nav>
        <div className="flex gap-2 items-center">
          { !session ? (
              <>
                <button onClick={() => signIn("google")}>Sign in with Google</button>
              </>
            ) : (
              <>
                |<p>Welcome, {session.user?.name?.split(" ")[0]}</p>
                <Image src={session?.user?.image ?? '/no-user-image.webp'} alt={session?.user?.name ?? 'User'} height="32" width="32" className="rounded-full ring-2 ring-blue-500" />
              </>
            )
          }
        </div>

      </div>
    </section>
  )
}

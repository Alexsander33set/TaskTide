import Image from "next/image"
import { auth, signIn } from "../auth"

export default async function UserAvatar() {
  const session = await auth()
  console.log(session)

  if (!session?.user) return (
    <form action={async () => {"use server";
      await signIn("google")}}>
      <button type="submit">Sign in with Google</button>
    </form>
  )

  return(
        <>
          <button className="flex items-center gap-2 py-1 px-2 rounded-md transition hover:bg-gray-600/10">
            <p>Welcome, {session.user?.name?.split(" ")[0]}</p>
            <Image src={session?.user?.image ?? '/no-user-image.webp'} alt={session?.user?.name ?? 'User'} height="32" width="32" className="rounded-full ring-2 ring-blue-500" />
          </button>
        </>
      )
}

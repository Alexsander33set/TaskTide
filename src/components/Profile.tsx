"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function UserProfile() {
  const { data: session } = useSession();

  const router = useRouter()
  function redirectTo(route:string){
    router.push(route)
  }

  if (!session?.user) return (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  )

  return(
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 py-1 px-2 rounded-md transition hover:bg-gray-600/10">
            <p>Welcome, {session.user?.name?.split(" ")[0]}</p>
            <Image height="32" width="32" className="rounded-full ring-2 ring-blue-500"
              src={session?.user?.image ?? '/no-user-image.webp'}
              alt={session?.user?.name ?? 'User'}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={()=>redirectTo("/user")} className="cursor-pointer">
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )
}

"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return session ? (
    <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  ) : (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}

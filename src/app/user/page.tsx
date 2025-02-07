import Image from "next/image";
import { auth, signOut } from "@/auth"
import Board from "@/components/Board";
// import { SignOut } from "@/components/SignOut";

let inputDisabledStyle = "border border-gray-400 p-1 rounded-md"

export default async function UserProfile() {
  const session = await auth()
  return (
    <>
      <section className=" m-4 mt-12 p-4 flex">
        <div className="grid place-items-center gap-2">
        <Image src={session?.user?.image!} alt="user profile image"
          width={96} height={96} className="rounded-full"/>

          {/* TODO: Add a button to change the profile image */}
          <button className="border border-gray-300 py-1 px-2 rounded-md shadow-sm">
            ✏️ Change Image
          </button>
        </div>
        <div className="ml-8 flex-1 flex flex-col gap-2 text-gray-500">
          <input value={session?.user?.name!} type="text" disabled
            className={inputDisabledStyle}/>
          <input value={session?.user?.email!} type="text" disabled
            className={inputDisabledStyle} />
          <form className="mt-6 flex gap-4"
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit" className="bg-red-600 py-1 px-2 rounded-md text-white">Sign Out</button>
          <button className="text-red-600">Delete everything stored about me</button>
        </form>
        </div>
      </section>
    </>
  );
}

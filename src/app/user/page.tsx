import Image from "next/image";
import { auth, signOut } from "@/auth";
import { prisma } from "@/prisma";
import EditIcon from "@/components/icons/Edit";

export default async function UserProfile() {
  const session = await auth();
  if (!session?.user) return <p>You need to be signed in</p>;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
  });

  //* Styles
  let inputStyle = "border border-gray-400 p-1 rounded-md w-full placeholder:italic"
  let centerDivStyle = "absolute min-h-1/2 left-1/2 top-1/2 -translate-1/2"
  let centerChildrenStyle = "grid place-items-center"

  return (
    <section className={`${centerDivStyle} ${centerChildrenStyle} p-8 bg-white shadow rounded-xl`}>
      <button id="profile-image-conteiner" aria-label="Edit profile image">
        <Image id="profile-image"
          src={user?.image ?? "/default-avatar.png"}
          alt="User profile image"
          width={128}
          height={128}
        />
        <EditIcon id="profile-image-edit-icon" />
      </button>
      <div className="flex flex-col gap-3 min-w-[18vw]">
        <label htmlFor="name-field">
          Name
          <input
            id="name-field"
            defaultValue={user?.name ?? ""}
            type="text"
            placeholder="Put your username here"
            className={`${inputStyle}`}
          />
        </label>
        <label htmlFor="email-field">
          Email
          <input
            id="email-field"
            value={user?.email ?? ""}
            type="text"
            disabled
            className={`${inputStyle} text-gray-500 bg-gray-100 cursor-not-allowed`}
          />
        </label>
        <span className="flex gap-4 justify-center">
          <form action={async () => { "use server"; await signOut(); }}>
            <button type="submit" className="text-red-600 py-1 px-2 rounded hover:bg-red-600 hover:text-white transition">
              Sign Out
            </button>
          </form>
          <button className="py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition">
            Save Changes
          </button>
        </span>
      </div>
    </section>
  );
}

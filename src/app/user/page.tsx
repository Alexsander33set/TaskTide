"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner";
import { EditIcon, Loader2 } from "lucide-react";

import { useSession, signIn, signOut } from "next-auth/react";
import { User } from "@/types";
import { Toaster } from "@/components/ui/sonner";

//* =================================

export default function UserProfile() {
  const { data: session, update } = useSession();

  const [user, setUser] = useState<User | null>(null);
  const [originalName, setOriginalName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isFetchingUser, setFetchingUser] = useState(true);
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchUser = async () => {
      setFetchingUser(true);
      try {
        const res = await fetch("/api/user", { method: "GET" });
        const data = await res.json();
        if (res.ok) {
          setUser(data);
          setOriginalName(data.name);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setFetchingUser(false);
    };
    fetchUser();
  }, [session?.user?.email]);
  async function handleUpdate() {
    if (!user?.name || user.name.trim().length < 3) {
      toast.error("Username must be at least 3 characters long");
      return;
    }
    if (user.name === originalName) {
      toast.info("No changes detected.");
      return;
    }
    if (session?.user?.email !== user?.email) {
      toast.error("You can only edit your own profile.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: user.name }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      toast.success("Profile updated successfully! ✅");
      setOriginalName(user.name);
      update();
    } else {
      toast.error(data.error || "Failed to update profile");
    }
  }

  if (session === null) return (<div className="grid place-content-center mt-30"><h2>Please login to edit your profile</h2><Button onClick={() => signIn("google")} className="mt-4" variant="outline">Login</Button></div>)
  return (
    <>
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center p-8 bg-white shadow rounded-xl">
        {isFetchingUser ? (
          <Loader2 className="animate-spin text-gray-500" size={32} />
        ) : (
          <>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span id="profile-image-conteiner" aria-label="Edit profile image">
                    <Image id="profile-image"
                      src={user?.image ?? "/default-avatar.webp"}
                      alt="User profile image"
                      width={128}
                      height={128}
                      priority
                    />
                    <EditIcon id="profile-image-edit-icon" />
                    <Input type="file" className="absolute w-full h-full opacity-0 cursor-pointer" title="" onChange={(e) => { console.log(e) }} />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Change Image</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex flex-col gap-3 min-w-[18vw] mt-10">
              <Label htmlFor="email">Username</Label>
              <Input id="name-field" minLength={3}
                value={user?.name || ""}
                onChange={(e) => setUser((prev) => prev ? { ...prev, name: e.target.value } : null)}
                placeholder="Put your username here" />

              <Label htmlFor="email-field">Email</Label>
              <span className="cursor-not-allowed">
                <Input id="email-field" disabled defaultValue={user?.email ?? ""} placeholder="account email" className="bg-gray-100" />
              </span>

              <div className="flex gap-4 justify-center">
                <Button variant={"ghost"} onClick={() => signOut()} className="text-red-600 py-1 px-2 rounded hover:bg-red-600 hover:text-white transition">
                  Sign Out
                </Button>
                <Button variant={"ghost"} className={`py-1 px-2 rounded transition ${!isLoading ? "text-blue-500 hover:bg-blue-500 hover:text-white" : "cursor-not-allowed bg-blue-300"}`}
                  onClick={handleUpdate} disabled={isLoading}>
                  {isLoading ? (<><Loader2 className="animate-spin" size={16} /> Saving...</>) : <>Save Changes</>}
                </Button>
              </div>
            </div>
          </>)}
      </section>
      <Toaster />
    </>
  );
}

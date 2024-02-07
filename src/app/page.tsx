import Image from "next/image";
import {UserButton} from "@clerk/nextjs";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </main>
  );
}

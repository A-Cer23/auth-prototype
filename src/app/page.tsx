import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export const runtime = 'edge';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>/home</h1>
      </div>
    </main>
  );
}

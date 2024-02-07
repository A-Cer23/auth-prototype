import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Prototype",
  description: "A prototype for authentication with Clerk.",
};

function Header() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
            <h1>Auth Prototype</h1>
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
        </header>
    );
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}

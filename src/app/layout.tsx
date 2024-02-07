import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Header() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
            <h1>My App</h1>
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
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

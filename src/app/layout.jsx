import { getServerSession } from "next-auth";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="ko" className="light">
      <body>
        <nav>
          <div className="flex items-center px-20 h-[52px] shadow">
            <p className="grow font-bold text-lg text-gray-500">DSeeInside</p>
            <LoginBtn name={session?.user.name} />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

import { getServerSession } from "next-auth";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="ko" className="light">
      <body>
        <nav className="fixed w-full bg-white z-10">
          <div className="flex items-center px-20 h-[52px] shadow">
            <p className="grow font-bold text-lg text-gray-500">DSeeInside</p>
            <input className="grow bg-gray-100 rounded-full" placeholder="여기서 검색ㄱㄱ"/>
            <LoginBtn name={session?.user.name} />
          </div>
        </nav>
        <div className="mt-[52px]">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>
        </div>
      </body>
    </html>
  );
}

import { SessionProvider } from "@/components/SessionProvider";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getServerSession, Session } from "next-auth";
import "@/styles/globals.css";
import "./style.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex w-full">
              <Topbar />
              {/* sidebar */}
              <Sidebar />
              {/* notification */}
              <div className="bg-[var(--text-default)] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

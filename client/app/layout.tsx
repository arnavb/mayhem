import ServerList from "components/server-list";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex h-screen">
          {/* Two column layout, fixed width server/channel/people list and flexible chat container */}
          <ServerList />
          {children}
        </div>
      </body>
    </html>
  );
}

import Main from "components/main";
import Sidebar from "components/sidebar/sidebar";

export const metadata = {
  title: "Mayhem",
};

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main />
    </div>
  );
}

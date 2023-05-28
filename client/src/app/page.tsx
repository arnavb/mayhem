import Main from "../components/Main";
import Sidebar from "../components/sidebar/Sidebar";

export const metadata = {
  title: "Mayhem",
};

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <Main />
    </div>
  );
}

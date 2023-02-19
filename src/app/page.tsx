import Sidebar from "./components/sidebar/Sidebar";

export const metadata = {
  title: "Title",
};

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="w-3/4 bg-gray-600"></div>
    </div>
  );
}

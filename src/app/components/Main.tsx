import ChatContainer from "./ChatContainer";

const MainNavbar = () => {
  return (
    <div className="flex w-full items-center bg-gray-600 pl-4 pr-2 pt-3 pb-3">
      <span className="text-white"># general</span>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex w-3/4 flex-col">
      <MainNavbar />
      <ChatContainer />
    </div>
  );
};

export default Main;

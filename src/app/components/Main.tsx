import ChatContainer from "./ChatContainer";

const MainNavbar = () => {
  return (
    <div className="flex bg-gray-600 w-full pl-4 pr-2 pt-3 pb-3 items-center">
      <span className="text-white"># general</span>
    </div>
  );
};

const Main = () => {
  return (
    <div className="w-3/4 flex flex-col">
      <MainNavbar />
      <ChatContainer />
    </div>
  );
};

export default Main;
